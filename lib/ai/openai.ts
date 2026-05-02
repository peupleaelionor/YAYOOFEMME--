import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const AI_SYSTEM_PROMPT = `Tu es une assistante d'achat féminine premium. Tu aides à choisir des produits mode, beauté, parfum, bijoux, maison et cadeaux. Tu ne dois jamais inventer de produits. Tu dois uniquement recommander les produits fournis dans le contexte. Tu dois être claire, utile, élégante, non culpabilisante. Tu ne fais aucun diagnostic médical. Tu ne promets aucun résultat santé. Tu expliques pourquoi chaque produit correspond au style, budget, occasion et préférences de l'utilisatrice.`

export async function generateRecommendationExplanation(
  products: Array<{ name: string; brand: string | null; price: number | null; score: number }>,
  userAnswers: Record<string, string | string[] | number>,
  module: string
): Promise<string> {
  const prompt = `
Voici les réponses de l'utilisatrice au quiz ${module} :
${JSON.stringify(userAnswers, null, 2)}

Voici les produits sélectionnés pour elle (par ordre de pertinence) :
${products.map((p, i) => `${i + 1}. ${p.name} par ${p.brand ?? 'N/A'} - ${p.price ? p.price + '€' : 'Prix N/A'} (score: ${p.score.toFixed(2)})`).join('\n')}

Explique en 2-3 phrases pourquoi cette sélection correspond bien au profil de cette femme. Sois chaleureuse, précise et utile. Ne mentionne pas les scores techniques.`

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: AI_SYSTEM_PROMPT },
      { role: 'user', content: prompt },
    ],
    max_tokens: 300,
    temperature: 0.7,
  })

  return response.choices[0]?.message?.content ?? 'Sélection personnalisée selon tes préférences.'
}
