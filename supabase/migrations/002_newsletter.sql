-- ============================================================
-- Yayoo Femme - Newsletter subscribers
-- ============================================================

create table if not exists newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  source text not null default 'deals',
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  is_active boolean not null default true
);

create index if not exists idx_newsletter_email on newsletter_subscribers(email);
create index if not exists idx_newsletter_active on newsletter_subscribers(is_active);

alter table newsletter_subscribers enable row level security;
create policy "Service role can manage newsletter" on newsletter_subscribers using (true);
