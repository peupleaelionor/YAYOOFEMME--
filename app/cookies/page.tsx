import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  description: 'Comment Yayoo Femme utilise les cookies et technologies similaires.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="section bg-white border-b border-[#EDE4D6]">
        <div className="container-tight text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Politique de cookies
          </h1>
          <p className="text-[#8C7B6B]">Dernière mise à jour : mai 2025</p>
        </div>
      </div>

      <div className="container-tight py-16">
        <div className="space-y-10">

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">
              Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite sur un site web.
              Il permet au site de mémoriser vos préférences, de maintenir votre session active
              et d&apos;analyser l&apos;utilisation du service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">
              Cookies utilisés sur Yayoo Femme
            </h2>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 shrink-0" />
                  <h3 className="font-semibold text-[#1A1A1A]">Cookies essentiels</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-auto">
                    Toujours actifs
                  </span>
                </div>
                <p className="text-sm text-[#8C7B6B] leading-relaxed">
                  Nécessaires au fonctionnement de base du site : session de connexion,
                  panier, préférences de langue. Sans ces cookies, le service ne peut pas fonctionner.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#8C7B6B]">
                  <div><strong>Fournisseur</strong> : Supabase</div>
                  <div><strong>Durée</strong> : Session / 7 jours</div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#C9978A] shrink-0" />
                  <h3 className="font-semibold text-[#1A1A1A]">Cookies analytiques</h3>
                  <span className="text-xs bg-[#F2E8E4] text-[#A67060] px-2 py-0.5 rounded-full ml-auto">
                    Avec consentement
                  </span>
                </div>
                <p className="text-sm text-[#8C7B6B] leading-relaxed">
                  Nous aident à comprendre comment vous utilisez la plateforme pour l&apos;améliorer :
                  pages visitées, parcours utilisateur, clics sur les recommandations.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#8C7B6B]">
                  <div><strong>Fournisseur</strong> : PostHog</div>
                  <div><strong>Durée</strong> : 13 mois</div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#BEA98C] shrink-0" />
                  <h3 className="font-semibold text-[#1A1A1A]">Cookies de paiement</h3>
                  <span className="text-xs bg-[#F5F0E8] text-[#8C7B6B] px-2 py-0.5 rounded-full ml-auto">
                    Stripe uniquement
                  </span>
                </div>
                <p className="text-sm text-[#8C7B6B] leading-relaxed">
                  Utilisés lors des paiements pour sécuriser les transactions et prévenir la fraude.
                  Ces cookies sont déposés par Stripe et ne sont actifs que lors du processus de paiement.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#8C7B6B]">
                  <div><strong>Fournisseur</strong> : Stripe</div>
                  <div><strong>Durée</strong> : Session</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">
              Gérer vos préférences cookies
            </h2>
            <p className="text-[#2C2C2C] leading-relaxed mb-4">
              Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies.
              Notez que certaines fonctionnalités du service peuvent être limitées si vous désactivez tous les cookies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { browser: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                { browser: 'Firefox', url: 'https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox' },
                { browser: 'Safari', url: 'https://support.apple.com/fr-fr/guide/safari/sfri11471/mac' },
              ].map((item) => (
                <a
                  key={item.browser}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 text-center hover:border-[#C9978A] transition-colors block"
                >
                  <div className="font-medium text-[#1A1A1A] mb-1 text-sm">{item.browser}</div>
                  <div className="text-xs text-[#8C7B6B]">Gérer les cookies →</div>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Contact</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Pour toute question sur notre utilisation des cookies :{' '}
              <a href="mailto:privacy@fmmyy.com" className="text-[#C9978A] hover:text-[#A67060] underline">
                privacy@fmmyy.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
