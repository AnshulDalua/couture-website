export default function ShippingPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-8">SHIPPING & RETURNS</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-sm uppercase mb-4">SHIPPING</h2>
          <div className="space-y-4 text-xs">
            <p>We offer the following shipping methods for all online orders:</p>

            <div className="space-y-2">
              <p className="font-medium">STANDARD SHIPPING</p>
              <p>$8.00 USD or FREE on orders over $150 USD</p>
              <p>Delivery in 3-7 business days</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">EXPRESS SHIPPING</p>
              <p>$15.00 USD</p>
              <p>Delivery in 2-3 business days</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">OVERNIGHT SHIPPING</p>
              <p>$25.00 USD</p>
              <p>Next business day delivery for orders placed before 12PM PST</p>
            </div>

            <p>
              Please note that business days are Monday through Friday, excluding holidays. Orders placed after 12PM PST
              will be processed the following business day.
            </p>

            <p>
              All orders are shipped from our warehouse in California. Once your order has been shipped, you will
              receive a confirmation email with tracking information.
            </p>

            <p>For international shipping rates and delivery times, please see the shipping calculator at checkout.</p>
          </div>
        </section>

        <section>
          <h2 className="text-sm uppercase mb-4">RETURNS</h2>
          <div className="space-y-4 text-xs">
            <p>We accept returns within 30 days of delivery for a full refund or exchange.</p>

            <p>To be eligible for a return, items must be:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Unworn, unwashed, and unaltered</li>
              <li>In original packaging with all tags attached</li>
              <li>Free from smoke, pet hair, and other odors</li>
            </ul>

            <p className="font-medium mt-4">RETURN PROCESS:</p>

            <ol className="list-decimal pl-5 space-y-1">
              <li>Log into your account and select the order you wish to return</li>
              <li>Select the items you wish to return and the reason for return</li>
              <li>Print the prepaid return label</li>
              <li>Package the items securely and attach the return label</li>
              <li>Drop off the package at any USPS location</li>
            </ol>

            <p>
              Return shipping is free for exchanges. For refunds, a $6 return shipping fee will be deducted from your
              refund amount.
            </p>

            <p>
              Please allow 7-10 business days for your return to be processed once received at our warehouse. Refunds
              will be issued to the original form of payment.
            </p>

            <p>For international returns, please contact customer service for assistance.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

