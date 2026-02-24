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
