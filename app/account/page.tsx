'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

interface Subscription {
  plan: string | null
  status: string | null
  current_period_end: string | null
}


export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null)
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [orderCount, setOrderCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      setUser(user)
      if (user) {
        const [{ data: sub }, { count }] = await Promise.all([
          supabase
            .from('subscriptions')
            .select('plan, status, current_period_end')
            .eq('user_id', user.id)
            .eq('status', 'active')
            .maybeSingle(),
          supabase
            .from('one_shot_orders')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', user.id),
        ])
        setSubscription(sub ?? null)
        setOrderCount(count ?? 0)
      }
      setLoading(false)
    })
  }, [])

  const PLAN_LABELS: Record<string, string> = {
    basic: 'Basic — 4,90€/mois',
    plus: 'Plus — 9,90€/mois',
    premium: 'Premium — 19,90€/mois',
  }

  const planLabel = subscription?.plan ? PLAN_LABELS[subscription.plan] ?? subscription.plan : null

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-[#EDE4D6] border-t-[#C9978A] rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-4">
        <div className="card p-10 max-w-md w-full text-center">
          <div className="text-4xl mb-4">👋</div>
          <h1 className="font-serif text-2xl text-[#1A1A1A] mb-3">Connexion requise</h1>
          <p className="text-[#8C7B6B] mb-6">
            Connecte-toi pour accéder à ton espace personnel.
          </p>
          <div className="space-y-3">
            <Button className="w-full" onClick={() => {
              const supabase = createClient()
              supabase.auth.signInWithOAuth({
                provider: 'google',
                options: { redirectTo: `${window.location.origin}/account` },
              })
            }}>
              Continuer avec Google
            </Button>
            <p className="text-xs text-[#8C7B6B]">
              En continuant, tu acceptes nos{' '}
              <Link href="/terms" className="underline">conditions d&apos;utilisation</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="bg-white border-b border-[#EDE4D6] py-8">
        <div className="container-tight">
          <h1 className="font-serif text-3xl text-[#1A1A1A]">Mon compte</h1>
          <p className="text-[#8C7B6B] mt-1">{user.email}</p>
        </div>
      </div>

      <div className="container-tight py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile card */}
          <div className="card p-6">
            <h2 className="font-serif text-xl text-[#1A1A1A] mb-4">Profil</h2>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-[#8C7B6B] uppercase tracking-wider">Email</label>
                <p className="text-sm text-[#1A1A1A] mt-0.5">{user.email}</p>
              </div>
              <div>
                <label className="text-xs text-[#8C7B6B] uppercase tracking-wider">Compte créé</label>
                <p className="text-sm text-[#1A1A1A] mt-0.5">
                  {user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR') : '—'}
                </p>
              </div>
              <div>
                <label className="text-xs text-[#8C7B6B] uppercase tracking-wider">Commandes</label>
                <p className="text-sm text-[#1A1A1A] mt-0.5">{orderCount}</p>
              </div>
            </div>
          </div>

          {/* Subscription card */}
          <div className="card p-6">
            <h2 className="font-serif text-xl text-[#1A1A1A] mb-4">Abonnement</h2>
            {subscription ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    {planLabel}
                  </span>
                </div>
                {subscription.current_period_end && (
                  <p className="text-xs text-[#8C7B6B]">
                    Renouvellement le{' '}
                    {new Date(subscription.current_period_end).toLocaleDateString('fr-FR')}
                  </p>
                )}
                <Link href="/pricing">
                  <Button variant="outline" size="sm" className="mt-2">Gérer mon abonnement</Button>
                </Link>
              </div>
            ) : (
              <>
                <p className="text-sm text-[#8C7B6B] mb-4">Aucun abonnement actif</p>
                <Link href="/pricing">
                  <Button variant="outline" size="sm">Voir les offres</Button>
                </Link>
              </>
            )}
          </div>

          {/* Quick actions */}
          <div className="card p-6">
            <h2 className="font-serif text-xl text-[#1A1A1A] mb-4">Actions rapides</h2>
            <div className="space-y-3">
              <Link href="/style" className="flex items-center gap-3 text-sm text-[#2C2C2C] hover:text-[#C9978A] transition-colors">
                <span>👗</span> Style Finder
              </Link>
              <Link href="/beauty" className="flex items-center gap-3 text-sm text-[#2C2C2C] hover:text-[#C9978A] transition-colors">
                <span>✨</span> Beauty Finder
              </Link>
              <Link href="/gifts" className="flex items-center gap-3 text-sm text-[#2C2C2C] hover:text-[#C9978A] transition-colors">
                <span>🎁</span> Gift Finder
              </Link>
              <Link href="/perfume" className="flex items-center gap-3 text-sm text-[#2C2C2C] hover:text-[#C9978A] transition-colors">
                <span>🌹</span> Perfume Finder
              </Link>
              <Link href="/capsule" className="flex items-center gap-3 text-sm text-[#2C2C2C] hover:text-[#C9978A] transition-colors">
                <span>👘</span> Dressing Capsule
              </Link>
              <Link href="/account/wishlist" className="flex items-center gap-3 text-sm text-[#2C2C2C] hover:text-[#C9978A] transition-colors">
                <span>❤️</span> Ma wishlist
              </Link>
              <Link href="/guides" className="flex items-center gap-3 text-sm text-[#2C2C2C] hover:text-[#C9978A] transition-colors">
                <span>📖</span> Mes guides
              </Link>
            </div>
          </div>
        </div>

        {/* Sign out */}
        <div className="mt-8 text-center">
          <button
            onClick={async () => {
              const supabase = createClient()
              await supabase.auth.signOut()
              window.location.reload()
            }}
            className="text-sm text-[#8C7B6B] hover:text-[#1A1A1A] underline underline-offset-4 transition-colors"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  )
}
