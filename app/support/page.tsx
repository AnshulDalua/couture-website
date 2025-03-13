import Link from "next/link"

const supportLinks = [
  {
    title: "SHIPPING & RETURNS",
    description: "Information about shipping methods, rates, delivery times, and our return policy.",
    href: "/support/shipping",
  },
  {
    title: "CONTACT US",
    description: "Get in touch with our customer service team for assistance with your order or general inquiries.",
    href: "/support/contact",
  },
  {
    title: "FAQ",
    description: "Find answers to frequently asked questions about orders, products, shipping, and more.",
    href: "/support/faq",
  },
  {
    title: "TERMS & CONDITIONS",
    description: "Read our terms and conditions governing the use of our website and services.",
    href: "/support/terms",
  },
  {
    title: "PRIVACY POLICY",
    description: "Learn about how we collect, use, and protect your personal information.",
    href: "/support/privacy",
  },
]

export default function SupportPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-8">SUPPORT</h1>

      <div className="space-y-8">
        {supportLinks.map((link) => (
          <div key={link.title} className="border-b border-[#ececec] pb-6 last:border-b-0">
            <h2 className="text-sm uppercase mb-2">{link.title}</h2>
            <p className="text-xs mb-4">{link.description}</p>
            <Link href={link.href}>
              <button className="stussy-button">VIEW</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-sm uppercase mb-4">CUSTOMER SERVICE</h2>
        <div className="text-xs space-y-1">
          <p>Hours: Monday - Friday, 9AM - 5PM PST</p>
          <p>Email: support@couturebyikigai.com</p>
          <p>Phone: 1-800-555-1234</p>
        </div>
      </div>
    </div>
  )
}

