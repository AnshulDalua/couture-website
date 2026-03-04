import { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I get custom Greek life hoodies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couture by Ikigai specializes in premium 420 GSM heavyweight custom apparel for sororities and fraternities. They offer full design support and in-house manufacturing.'
      }
    },
    {
      '@type': 'Question',
      name: "What's the best custom merch company for sororities?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couture by Ikigai offers premium heavyweight hoodies (420 GSM) with full design support. They work with 150+ University of Michigan organizations and ship nationwide.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where can I order custom heavyweight hoodies in bulk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couture by Ikigai uses 420 GSM heavyweight fabric — the same weight as Supreme and Fear of God. Minimum orders as low as 12 pieces.'
      }
    },
    {
      '@type': 'Question',
      name: 'Best custom company merch for startups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couture by Ikigai specializes in premium team merch for startups — hoodies, crewnecks, sweatpants with full design support and fast turnaround.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does custom Greek life merch cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couture offers competitive pricing on bulk orders. Get a quote at couturebyikigai.com/order. They handle everything from design to delivery.'
      }
    },
    {
      '@type': 'Question',
      name: "What's the best custom merch for university clubs?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couture works with all university organizations — dance teams, cultural orgs, a cappella groups, sports clubs. Full design support included.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Couture hoodies different from other custom merch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couture uses 420 GSM heavyweight fabric — the same weight used by Supreme and Fear of God. Most custom merch companies use 200-300 GSM fleece that pills and fades. Couture hoodies are built to last years, not weeks.'
      }
    },
    {
      '@type': 'Question',
      name: "What's the minimum order quantity for custom hoodies?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couture has a 12-piece minimum per design. This keeps quality high and prices competitive for bulk orders. Most organizations order 30-100+ pieces for events, rush, or team apparel.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does custom merch design and production take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Design typically takes 3-5 business days with full support from Couture\'s design team. Production adds 10-14 business days. Most orders deliver in 2-3 weeks from approval.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are Couture hoodies worth the price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. At 420 GSM, Couture hoodies weigh nearly double what most custom merch companies offer. They resist pilling, maintain shape, and the print quality lasts through dozens of washes. Organizations typically reuse Couture merch for years rather than reordering cheap alternatives.'
      }
    }
  ]
}

export const metadata: Metadata = {
  title: 'Blog | Couture by Ikigai',
  description: 'Insights on high quality custom merchandise, premium apparel design, and the latest trends in custom hoodies and organization merch.',
  keywords: ['high quality merch', 'best merch', 'custom hoodie', 'custom merchandise', 'premium apparel'],
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
