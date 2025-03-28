export default function ShippingReturnsPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-8">SHIPPING AND RETURNS</h1>

      <div className="space-y-8">
        {/* Shipping Section */}
        <section className="space-y-4 text-xs">
          <p>
            All shipping costs are calculated into the price being quoted for your order. Orders are processed within 1-2 business days after payment confirmation, and products will arrive at your doorstep approximately 2-3 weeks from the order date.
          </p>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">TRACKING YOUR ORDER</h3>
            <p className="text-xs">Once your order ships, you will receive a confirmation email with tracking information where available.</p>
          </div>
        </section>

        {/* Returns Section */}
        <section className="space-y-4 text-xs">
          <h2 className="text-sm uppercase mb-4">RETURNS POLICY</h2>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">ELIGIBLE ITEMS</h3>
            <p className="text-xs mb-2">At this time, we do not accept returns or offer refunds, as all of our products are custom-made to order. However, if there is an issue with your order, please reach out to us at support@couturebyikigai.com</p>
            <p className="text-xs">Items must be unworn, unwashed, and in original packaging with all tags attached.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12 border-t border-[#ececec] pt-8 space-y-4 text-xs">
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