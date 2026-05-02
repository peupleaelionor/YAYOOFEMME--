import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Administration - Yayoo Femme',
  description: 'Espace administrateur',
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const adminEmails = (process.env.ADMIN_EMAILS ?? '').split(',').map(e => e.trim())
  const isAdmin = user && adminEmails.includes(user.email ?? '')

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="card p-10 text-center max-w-md">
          <div className="text-4xl mb-4">🔒</div>
          <h1 className="font-serif text-2xl text-[#1A1A1A] mb-3">Accès restreint</h1>
          <p className="text-[#8C7B6B] mb-6">Cet espace est réservé aux administrateurs.</p>
          <Link href="/"><Button variant="outline">Retour à l&apos;accueil</Button></Link>
        </div>
      </div>
    )
  }

  // Fetch stats
  const [{ count: productCount }, { count: userCount }, { count: orderCount }] = await Promise.all([
    supabase.from('products').select('*', { count: 'exact', head: true }),
    supabase.from('user_profiles').select('*', { count: 'exact', head: true }),
    supabase.from('one_shot_orders').select('*', { count: 'exact', head: true }),
  ])

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="bg-[#1A1A1A] text-[#FAF8F5] py-8">
        <div className="container-wide">
          <h1 className="font-serif text-3xl">Administration</h1>
          <p className="text-[#BEA98C] mt-1">Bienvenue, {user?.email}</p>
        </div>
      </div>

      <div className="container-wide py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { label: 'Produits', count: productCount ?? 0, emoji: '🛍️' },
            { label: 'Profils utilisateurs', count: userCount ?? 0, emoji: '👥' },
            { label: 'Commandes', count: orderCount ?? 0, emoji: '💳' },
          ].map((stat) => (
            <div key={stat.label} className="card p-6 text-center">
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="font-serif text-4xl text-[#1A1A1A] mb-1">{stat.count}</div>
              <div className="text-sm text-[#8C7B6B]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="card p-6">
          <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">Actions rapides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Gérer les produits', href: '/admin/products' },
              { label: 'Gérer les ebooks', href: '/admin/ebooks' },
              { label: 'Voir les commandes', href: '/admin/orders' },
              { label: 'Gérer les utilisateurs', href: '/admin/users' },
            ].map((action) => (
              <Link key={action.label} href={action.href}>
                <Button variant="outline" size="sm" className="w-full">{action.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
