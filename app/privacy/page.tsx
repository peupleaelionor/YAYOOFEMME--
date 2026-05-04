import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles de Yayoo Femme.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="section bg-white border-b border-[#EDE4D6]">
        <div className="container-tight text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-[#8C7B6B]">Dernière mise à jour : mai 2025</p>
        </div>
      </div>

      <div className="container-tight py-16">
        <div className="space-y-10">

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">1. Qui sommes-nous ?</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Yayoo Femme est une plateforme d&apos;assistance à l&apos;achat féminin alimentée par intelligence artificielle,
              accessible à l&apos;adresse <strong>fmmyy.com</strong>. L&apos;éditeur responsable du traitement de vos données
              personnelles est la société exploitant la marque Yayoo Femme.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">2. Données collectées</h2>
            <p className="text-[#2C2C2C] leading-relaxed mb-3">
              Nous collectons les données suivantes :
            </p>
            <ul className="space-y-2 text-[#2C2C2C]">
              <li className="flex items-start gap-2">
                <span className="text-[#C9978A] mt-1">•</span>
                <span><strong>Données de compte</strong> : adresse e-mail, nom (via Google OAuth)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9978A] mt-1">•</span>
                <span><strong>Données de profil</strong> : préférences de style, type de peau, budget, centres d&apos;intérêt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9978A] mt-1">•</span>
                <span><strong>Données de navigation</strong> : pages visitées, clics sur produits, quiz complétés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9978A] mt-1">•</span>
                <span><strong>Données de paiement</strong> : traitées exclusivement par Stripe — nous ne stockons pas vos coordonnées bancaires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9978A] mt-1">•</span>
                <span><strong>Newsletter</strong> : adresse e-mail si vous souscrivez à nos alertes bons plans</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">3. Finalités du traitement</h2>
            <div className="space-y-3 text-[#2C2C2C]">
              <p className="leading-relaxed">Vos données sont utilisées pour :</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9978A] mt-1">•</span>
                  <span>Personnaliser vos recommandations produits via notre moteur IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9978A] mt-1">•</span>
                  <span>Gérer votre compte, abonnement et historique d&apos;achats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9978A] mt-1">•</span>
                  <span>Vous envoyer des alertes bons plans (avec votre consentement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9978A] mt-1">•</span>
                  <span>Améliorer la qualité de nos algorithmes de recommandation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9978A] mt-1">•</span>
                  <span>Respecter nos obligations légales et fiscales</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">4. Base légale</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Le traitement de vos données repose sur : (a) l&apos;exécution du contrat (service de recommandation),
              (b) votre consentement explicite (newsletter, cookies analytiques), et (c) notre intérêt légitime
              (amélioration de la plateforme, prévention de la fraude).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">5. Conservation des données</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Vos données de compte sont conservées pendant la durée de votre relation avec Yayoo Femme,
              puis 3 ans après la dernière activité. Les données de navigation sont conservées 13 mois maximum.
              Vous pouvez demander la suppression à tout moment.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">6. Partage des données</h2>
            <p className="text-[#2C2C2C] leading-relaxed mb-3">
              Nous ne vendons jamais vos données. Nous partageons uniquement avec :
            </p>
            <ul className="space-y-2 text-[#2C2C2C]">
              <li className="flex items-start gap-2">
                <span className="text-[#C9978A] mt-1">•</span>
                <span><strong>Supabase</strong> : hébergement et base de données (UE)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9978A] mt-1">•</span>
                <span><strong>Stripe</strong> : traitement des paiements (certifié PCI-DSS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9978A] mt-1">•</span>
                <span><strong>OpenAI</strong> : génération des explications de recommandations (données anonymisées)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">7. Vos droits (RGPD)</h2>
            <p className="text-[#2C2C2C] leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="space-y-2 text-[#2C2C2C]">
              {[
                "Droit d'accès à vos données",
                'Droit de rectification',
                "Droit à l'effacement (droit à l'oubli)",
                'Droit à la portabilité',
                "Droit d'opposition au traitement",
                'Droit à la limitation du traitement',
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span className="text-[#C9978A] mt-1">•</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#2C2C2C] leading-relaxed mt-4">
              Pour exercer ces droits :{' '}
              <a href="mailto:privacy@fmmyy.com" className="text-[#C9978A] hover:text-[#A67060] underline">
                privacy@fmmyy.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">8. Cookies</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Nous utilisons des cookies essentiels au fonctionnement du service et, avec votre consentement,
              des cookies analytiques. Consultez notre{' '}
              <a href="/cookies" className="text-[#C9978A] hover:text-[#A67060] underline">
                politique cookies
              </a>{' '}
              pour plus d&apos;informations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">9. Contact & réclamations</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Pour toute question ou réclamation :{' '}
              <a href="mailto:privacy@fmmyy.com" className="text-[#C9978A] hover:text-[#A67060] underline">
                privacy@fmmyy.com
              </a>
              . Vous pouvez également saisir la CNIL (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#C9978A] hover:text-[#A67060] underline">
                cnil.fr
              </a>
              ).
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
