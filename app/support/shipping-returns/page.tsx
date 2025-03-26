export default function ShippingReturnsPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">SHIPPING + RETURNS</h1>

      <div className="max-w-3xl mx-auto">
        {/* Shipping Section */}
        <section className="mb-12">
          <h2 className="text-sm uppercase mb-4">SHIPPING INFORMATION</h2>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">DELIVERY DETAILS</h3>
            <p className="text-sm mb-2">There are no separate shipping fees. All shipping costs are calculated into the price being quoted for your order.</p>
            <p className="text-sm mb-2">Orders are processed within 1-2 business days after payment confirmation.</p>
            <p className="text-sm">Products will arrive at your doorstep approximately 2-3 weeks from the order date.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">TRACKING YOUR ORDER</h3>
            <p className="text-sm">Once your order ships, you will receive a confirmation email with tracking information where available.</p>
          </div>
        </section>

        {/* Returns Section */}
        <section>
          <h2 className="text-sm uppercase mb-4">RETURNS POLICY</h2>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">ELIGIBLE ITEMS</h3>
            <p className="text-sm mb-2">All items purchased directly from COUTURE may be returned within 14 days of delivery.</p>
            <p className="text-sm">Items must be unworn, unwashed, and in original packaging with all tags attached.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">HOW TO RETURN</h3>
            <p className="text-sm mb-2">To initiate a return, please contact us at support@couturebyikigai.com with your order number and reason for return.</p>
            <p className="text-sm mb-2">Once approved, you will receive return instructions and a return shipping label if applicable.</p>
            <p className="text-sm">Return shipping costs may be the responsibility of the customer unless the return is due to our error.</p>
          </div>

          <div>
            <h3 className="text-xs uppercase font-medium mb-2">REFUNDS</h3>
            <p className="text-sm mb-2">Refunds will be issued to the original payment method within 7-10 business days after we receive and inspect your return.</p>
            <p className="text-sm">The original shipping costs included in your purchase price are non-refundable unless the return is due to our error.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12 border-t border-[#ececec] pt-8">
          <h2 className="text-sm uppercase mb-4">NEED ASSISTANCE?</h2>
          <p className="text-xs mb-4">
            If you have any questions about shipping, returns, or exchanges, our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/support/contact" className="stussy-button">
              CONTACT US
            </a>
            <a href="/support/faq" className="stussy-button">
              VIEW FAQ
            </a>
          </div>
        </section>
      </div>
    </div>
  )
} 