import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Programme d'affiliation",
  description:
    "Tout savoir sur le programme d'affiliation de Yayoo Femme : transparence, fonctionnement et impact sur les recommandations.",
}

export default function AffiliationPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="section gradient-warm">
        <div className="container-tight text-center">
          <div className="text-3xl mb-4">🔗</div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Notre engagement affiliation
          </h1>
          <p className="text-[#8C7B6B] max-w-xl mx-auto text-lg">
            La transparence est au cœur de Yayoo Femme. Voici exactement comment fonctionne notre modèle d&apos;affiliation.
          </p>
        </div>
      </div>

      <div className="container-tight py-16">
        <div className="space-y-10">

          <section className="card p-8">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">
              🤔 C&apos;est quoi l&apos;affiliation ?
            </h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              L&apos;affiliation est un partenariat entre Yayoo Femme et des marchands (Sephora, Zalando, Amazon, etc.).
              Quand tu cliques sur un lien affilié et que tu achètes un produit, le marchand nous verse
              une commission —{' '}
              <strong>sans aucun coût supplémentaire pour toi</strong>.
              Le prix que tu paies est exactement le même que si tu avais accédé directement au site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">Notre charte transparence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  emoji: '✅',
                  title: 'Identification systématique',
                  text: "Chaque lien affilié est clairement indiqué avec le label «\u00a0Lien affilié\u00a0» sur la fiche produit.",
                },
                {
                  emoji: '🎯',
                  title: 'Recommandations objectives',
                  text: "Nous recommandons d'abord les produits qui correspondent le mieux à ton profil. La commission n'est jamais le critère principal.",
                },
                {
                  emoji: '🚫',
                  title: 'Zéro produit inventé',
                  text: "Notre IA ne recommande que des produits réels de notre catalogue. Aucun produit fantôme, aucune invention.",
                },
                {
                  emoji: '💎',
                  title: 'Sélection par qualité',
                  text: "Chaque produit est évalué selon la qualité, le rapport qualité-prix et les retours utilisateurs — pas uniquement le taux de commission.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <div className="text-2xl mb-3">{item.emoji}</div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8C7B6B] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">
              Comment la commission influence (ou pas) les recommandations
            </h2>
            <p className="text-[#2C2C2C] leading-relaxed mb-4">
              Notre algorithme attribue à chaque produit un score basé sur plusieurs critères :
            </p>
            <div className="space-y-3">
              {[
                { label: 'Correspondance avec ton style', weight: '25%' },
                { label: 'Adéquation budgétaire', weight: '20%' },
                { label: "Correspondance avec l'occasion", weight: '15%' },
                { label: 'Score qualité du produit', weight: '15%' },
                { label: 'Score tendance', weight: '10%' },
                { label: 'Rapport qualité-prix', weight: '10%' },
                { label: 'Commission (signal commercial)', weight: '5%' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex-1 text-sm text-[#2C2C2C]">{item.label}</div>
                  <div className="w-10 text-right text-sm font-medium text-[#1A1A1A] shrink-0">
                    {item.weight}
                  </div>
                  <div className="w-24 h-2 bg-[#F5F0E8] rounded-full overflow-hidden shrink-0">
                    <div
                      className="h-full bg-[#C9978A] rounded-full"
                      style={{ width: item.weight }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#8C7B6B] mt-4">
              La commission ne représente que 5% du score total. Les produits sponsorisés dont le score
              de pertinence est inférieur à 60% subissent une pénalité supplémentaire.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Nos partenaires marchands</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'Sephora', 'Zalando', 'Asos', 'Amazon', "L'Occitane",
                'Nocibé', 'La Redoute', 'Galeries Lafayette', 'Net-a-Porter', 'Farfetch',
              ].map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-white border border-[#EDE4D6] rounded-full text-sm text-[#2C2C2C]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </section>

          <section className="card p-8 bg-[#FAF8F5]">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">
              Pourquoi l&apos;affiliation ?
            </h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Les commissions d&apos;affiliation nous permettent de maintenir le service gratuit pour toutes,
              de financer le développement de nouvelles fonctionnalités et de rémunérer notre équipe.
              C&apos;est un modèle qui aligne nos intérêts avec les tiens : nous gagnons seulement
              si tu es satisfaite de tes achats.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-4">Questions ?</h2>
            <p className="text-[#2C2C2C] leading-relaxed">
              Tu as des questions sur notre politique d&apos;affiliation ?{' '}
              <a href="mailto:hello@fmmyy.com" className="text-[#C9978A] hover:text-[#A67060] underline">
                hello@fmmyy.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
