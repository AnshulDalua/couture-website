export default function ReturnsPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-8">RETURNS</h1>

      <div className="space-y-6 text-xs">
        <p>We accept returns within 30 days of delivery for a full refund or exchange.</p>

        <p className="font-medium">RETURN ELIGIBILITY:</p>

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
          Return shipping is free for exchanges. For refunds, a $6 return shipping fee will be deducted from your refund
          amount.
        </p>

        <p>
          Please allow 7-10 business days for your return to be processed once received at our warehouse. Refunds will
          be issued to the original form of payment.
        </p>

        <p className="font-medium mt-4">NON-RETURNABLE ITEMS:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Gift cards</li>
          <li>Sale items marked as final sale</li>
          <li>Items damaged due to customer misuse</li>
          <li>Items without original tags and packaging</li>
        </ul>

        <p className="font-medium mt-4">EXCHANGES:</p>

        <p>
          If you need to exchange an item for a different size or color, please follow the same return process and
          select "exchange" as your return reason. Once your return is processed, we will ship the exchange item to you
          at no additional cost.
        </p>

        <p>
          If the item you wish to exchange is out of stock, we will issue a refund to your original form of payment.
        </p>

        <p className="font-medium mt-4">INTERNATIONAL RETURNS:</p>

        <p>
          For international returns, please contact customer service at support@couturebyikigai.com for assistance.
          International customers are responsible for return shipping costs and any applicable customs fees.
        </p>

        <p className="font-medium mt-4">QUESTIONS?</p>

        <p>
          If you have any questions about our return policy, please contact our customer service team at
          support@couturebyikigai.com or call us at 1-800-555-1234 during business hours (Monday-Friday, 9AM-5PM PST).
        </p>
      </div>
    </div>
  )
}

