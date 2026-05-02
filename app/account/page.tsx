'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })
  }, [])

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
            </div>
          </div>

          {/* Subscription card */}
          <div className="card p-6">
            <h2 className="font-serif text-xl text-[#1A1A1A] mb-4">Abonnement</h2>
            <p className="text-sm text-[#8C7B6B] mb-4">Aucun abonnement actif</p>
            <Link href="/pricing">
              <Button variant="outline" size="sm">Voir les offres</Button>
            </Link>
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
