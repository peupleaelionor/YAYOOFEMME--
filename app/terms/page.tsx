import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation de la plateforme Yayoo Femme.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="section bg-white border-b border-[#EDE4D6]">
        <div className="container-tight text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Conditions générales d&apos;utilisation
          </h1>
          <p className="text-[#8C7B6B]">Dernière mise à jour : mai 2025</p>
        </div>
      </div>

      <div className="container-tight py-16">
        <div className="space-y-10">

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">1. Objet et acceptation</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
              de la plateforme Yayoo Femme, accessible à l&apos;adresse <strong>fmmyy.com</strong>.
              En accédant au service, vous acceptez sans réserve les présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">2. Description du service</h2>
            <p className="text-[#2C2C2C] leading-relaxed mb-3">
              Yayoo Femme est un assistant d&apos;achat féminin intelligent. La plateforme propose :
            </p>
            <ul className="space-y-2 text-[#2C2C2C]">
              {[
                'Des recommandations personnalisées mode, beauté, parfum et cadeaux via quiz interactifs',
                'Un moteur de recommandation IA basé sur vos préférences et votre profil',
                'Des guides et ebooks premium sur la mode et la beauté',
                "Un accès à des bons plans et promotions sélectionnés",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#C9978A] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">3. Accès au service</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              L&apos;accès aux fonctionnalités de base est gratuit et ne nécessite pas de création de compte.
              Certaines fonctionnalités (wishlist, recommandations complètes, guides premium) requièrent
              la création d&apos;un compte ou le paiement d&apos;un abonnement ou d&apos;un achat ponctuel.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">4. Responsabilité concernant les recommandations</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Les recommandations générées par notre IA sont fournies à titre indicatif.
              Yayoo Femme ne garantit pas la disponibilité, le prix ou les caractéristiques
              des produits recommandés au moment de votre consultation. Nous ne sommes pas
              responsables des transactions réalisées sur les sites marchands tiers.
              <strong> Les recommandations ne constituent en aucun cas des avis médicaux ou de santé.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">5. Liens affiliés & transparence</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Certains liens présents sur Yayoo Femme sont des liens d&apos;affiliation.
              Si vous effectuez un achat via ces liens, Yayoo Femme perçoit une commission
              de la part du vendeur, sans coût supplémentaire pour vous.
              Ces liens sont toujours clairement identifiés sur la plateforme.
              Consultez notre{' '}
              <a href="/affiliation" className="text-[#C9978A] hover:text-[#A67060] underline">
                page affiliation
              </a>{' '}
              pour plus d&apos;informations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">6. Abonnements et paiements</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Les abonnements sont sans engagement et résiliables à tout moment depuis votre espace compte.
              La résiliation prend effet à la fin de la période en cours.
              Les paiements ponctuels (one-shot) sont définitifs et donnent un accès permanent au contenu acheté.
              Tous les paiements sont traités de manière sécurisée par Stripe.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">7. Propriété intellectuelle</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              L&apos;ensemble des contenus de Yayoo Femme (textes, algorithmes, design, guides, ebooks)
              est protégé par les droits de propriété intellectuelle.
              Toute reproduction, même partielle, sans autorisation écrite est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">8. Modification des CGU</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Yayoo Femme se réserve le droit de modifier les présentes CGU à tout moment.
              Les utilisateurs inscrits seront notifiés par e-mail des modifications substantielles.
              La poursuite de l&apos;utilisation du service vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">9. Droit applicable</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Les présentes CGU sont soumises au droit français.
              Tout litige sera soumis à la compétence des tribunaux français.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">10. Contact</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Pour toute question relative aux présentes CGU :{' '}
              <a href="mailto:legal@fmmyy.com" className="text-[#C9978A] hover:text-[#A67060] underline">
                legal@fmmyy.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
