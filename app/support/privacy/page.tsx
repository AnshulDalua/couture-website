export default function PrivacyPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-8">PRIVACY POLICY</h1>

      <div className="space-y-6 text-xs">
        <p>
          Couture ("we," "us," or "our") respects your privacy and is committed to protecting the personal
          information you share with us. This Privacy Policy explains what information we collect, how we use it,
          and your rights regarding that information.
        </p>

        <section>
          <h2 className="text-xs uppercase font-medium mb-2">1. INFORMATION WE COLLECT</h2>
          <p className="mt-2">When you interact with our website or place an order, we may collect:</p>
          <p className="font-medium mt-3">Personal Information</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Your name, email address, phone number, billing/shipping address, and payment details when you place an order.</li>
          </ul>
          <p className="font-medium mt-3">SMS Information</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>If you sign up for our SMS program, we collect your mobile phone number and your consent to receive messages.</li>
          </ul>
          <p className="font-medium mt-3">Order/Contact Submissions</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Any details you provide through forms on our site (e.g., inquiries, custom order requests).</li>
          </ul>
          <p className="mt-3">We do not collect browsing data or use cookies for tracking purposes.</p>
        </section>

        <section>
          <h2 className="text-xs uppercase font-medium mb-2">2. HOW WE USE YOUR INFORMATION</h2>
          <p>We may use the information you provide to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Process and fulfill orders.</li>
            <li>Communicate with you regarding your orders or inquiries.</li>
            <li>Send you marketing and promotional messages if you’ve opted in.</li>
            <li>Provide SMS updates (e.g., order confirmations, cart reminders, promotions).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs uppercase font-medium mb-2">3. SMS PRIVACY</h2>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><span className="font-medium">No Sale or Sharing of Data:</span> Your mobile information will never be shared or sold to third parties for marketing purposes.</li>
            <li>Your opt-in status is used only to deliver Couture messages.</li>
            <li>You can opt out anytime by replying “STOP” to any message.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs uppercase font-medium mb-2">4. DISCLOSURE OF INFORMATION</h2>
          <p>We may share your information only in limited cases:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>With service providers who help us process payments, ship orders, or send messages (they are required to keep your information secure).</li>
            <li>If required by law, court order, or to protect our rights.</li>
            <li>In the event of a business transfer (e.g., merger or acquisition).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs uppercase font-medium mb-2">5. SECURITY</h2>
          <p>
            We use reasonable measures to protect your personal information. However, no online system is 100% secure,
            and we cannot guarantee absolute protection.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase font-medium mb-2">6. YOUR RIGHTS</h2>
          <p>
            You may request to access, update, or delete your personal information by contacting us at
            <span> [insert your support email]</span>.
          </p>
        </section>
        
        <section>
          <h2 className="text-xs uppercase font-medium mb-2">8. CHANGES TO THIS POLICY</h2>
          <p>
            We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised
            “Last Updated” date.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase font-medium mb-2">9. CONTACT US</h2>
          <p>If you have questions, please contact us at:</p>
          <p className="mt-2">
            Couture
            <br />
            <a href="mailto:info@couturebyikigai.com">info@couturebyikigai.com</a>
          </p>
        </section>

        <p className="mt-4">Last Updated: September 19, 2025</p>
      </div>
    </div>
  )
}


