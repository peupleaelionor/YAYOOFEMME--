-- ============================================================
-- Yayoo Femme - Initial Schema
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- PRODUCTS
-- ============================================================
create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  brand text,
  category text not null,
  subcategory text,
  description text,
  price decimal(10,2),
  currency text not null default 'EUR',
  image_url text,
  product_url text,
  affiliate_url text,
  seller text,
  commission_rate decimal(5,4) not null default 0,
  material text,
  ingredients text,
  sizes text[],
  colors text[],
  target_styles text[],
  target_occasions text[],
  target_profiles text[],
  season text[],
  quality_score integer not null default 70 check (quality_score between 0 and 100),
  safety_score integer not null default 80 check (safety_score between 0 and 100),
  value_score integer not null default 70 check (value_score between 0 and 100),
  trend_score integer not null default 60 check (trend_score between 0 and 100),
  commission_score integer not null default 50 check (commission_score between 0 and 100),
  stock_status text not null default 'in_stock' check (stock_status in ('in_stock', 'low_stock', 'out_of_stock')),
  is_sponsored boolean not null default false,
  sponsored_label text,
  last_checked_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_products_category on products(category);
create index if not exists idx_products_value_score on products(value_score desc);
create index if not exists idx_products_stock_status on products(stock_status);

-- RLS for products (public read)
alter table products enable row level security;
create policy "Products are publicly readable" on products for select using (true);

-- ============================================================
-- USER PROFILES
-- ============================================================
create table if not exists user_profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  age_range text,
  style_preferences text[],
  beauty_preferences text[],
  skin_type text,
  hair_type text,
  budget_min integer,
  budget_max integer,
  favorite_categories text[],
  avoided_categories text[],
  favorite_brands text[],
  avoided_brands text[],
  created_at timestamptz not null default now()
);

alter table user_profiles enable row level security;
create policy "Users can read own profile" on user_profiles for select using (auth.uid() = user_id);
create policy "Users can insert own profile" on user_profiles for insert with check (auth.uid() = user_id);
create policy "Users can update own profile" on user_profiles for update using (auth.uid() = user_id);

-- ============================================================
-- SUBSCRIPTIONS
-- ============================================================
create table if not exists subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text check (plan in ('basic', 'plus', 'premium')),
  status text check (status in ('active', 'canceled', 'past_due', 'trialing')),
  current_period_end timestamptz,
  created_at timestamptz not null default now()
);

alter table subscriptions enable row level security;
create policy "Users can read own subscription" on subscriptions for select using (auth.uid() = user_id);
create policy "Service role can manage subscriptions" on subscriptions using (true);

-- ============================================================
-- EBOOKS
-- ============================================================
create table if not exists ebooks (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  description text,
  price decimal(10,2) not null default 0,
  cover_url text,
  file_url text,
  is_free boolean not null default false,
  is_premium boolean not null default false,
  category text,
  created_at timestamptz not null default now()
);

alter table ebooks enable row level security;
create policy "Ebooks are publicly readable" on ebooks for select using (true);

-- ============================================================
-- EBOOK PURCHASES
-- ============================================================
create table if not exists ebook_purchases (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  ebook_id uuid not null references ebooks(id) on delete restrict,
  stripe_payment_id text,
  amount decimal(10,2) not null,
  created_at timestamptz not null default now(),
  unique(user_id, ebook_id)
);

alter table ebook_purchases enable row level security;
create policy "Users can read own purchases" on ebook_purchases for select using (auth.uid() = user_id);

-- ============================================================
-- QUIZ SESSIONS
-- ============================================================
create table if not exists quiz_sessions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete set null,
  module text not null,
  answers jsonb not null default '{}',
  created_at timestamptz not null default now()
);

alter table quiz_sessions enable row level security;
create policy "Users can read own quiz sessions" on quiz_sessions for select using (auth.uid() = user_id);
create policy "Anyone can insert quiz sessions" on quiz_sessions for insert with check (true);

-- ============================================================
-- RECOMMENDATIONS
-- ============================================================
create table if not exists recommendations (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete set null,
  quiz_session_id uuid references quiz_sessions(id) on delete set null,
  module text not null,
  input jsonb not null default '{}',
  recommended_products jsonb not null default '[]',
  explanation text,
  is_paid boolean not null default false,
  created_at timestamptz not null default now()
);

alter table recommendations enable row level security;
create policy "Users can read own recommendations" on recommendations for select using (auth.uid() = user_id);
create policy "Anyone can insert recommendations" on recommendations for insert with check (true);
create policy "Service role can update recommendations" on recommendations for update using (true);

-- ============================================================
-- ONE SHOT ORDERS
-- ============================================================
create table if not exists one_shot_orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete set null,
  type text not null,
  amount decimal(10,2) not null,
  stripe_payment_id text,
  status text not null default 'pending' check (status in ('pending', 'completed', 'refunded')),
  result_id uuid,
  created_at timestamptz not null default now()
);

alter table one_shot_orders enable row level security;
create policy "Users can read own orders" on one_shot_orders for select using (auth.uid() = user_id);

-- ============================================================
-- PRODUCT CLICKS (analytics)
-- ============================================================
create table if not exists product_clicks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete set null,
  product_id uuid not null references products(id) on delete cascade,
  source text,
  referrer text,
  created_at timestamptz not null default now()
);

alter table product_clicks enable row level security;
create policy "Anyone can insert product clicks" on product_clicks for insert with check (true);
create policy "Service role can read product clicks" on product_clicks for select using (true);

-- ============================================================
-- WISHLISTS
-- ============================================================
create table if not exists wishlists (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(user_id, product_id)
);

alter table wishlists enable row level security;
create policy "Users can manage own wishlist" on wishlists for all using (auth.uid() = user_id);
