export default function ShippingReturnsPage() {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-sm uppercase mb-10">SHIPPING AND RETURNS</h1>

      <div className="space-y-12">
        {/* Shipping Section */}
        <section>
          <h2 className="text-sm uppercase mb-6 border-b border-[#ececec] pb-2">SHIPPING</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xs uppercase font-medium mb-2">PROCESSING TIME</h3>
              <p className="text-xs">
                Orders are processed within 1-2 business days after payment confirmation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase font-medium mb-2">DELIVERY TIME</h3>
              <p className="text-xs">
                Products will arrive at your doorstep approximately 2-3 weeks from the order date.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase font-medium mb-2">TRACKING YOUR ORDER</h3>
              <p className="text-xs">
                Once your order ships, you will receive a confirmation email with tracking information where available.
              </p>
            </div>
          </div>
          
          <p className="text-xs mt-6">
            All shipping costs are calculated into the price being quoted for your order.
          </p>
        </section>

        {/* Returns Section */}
        <section>
          <h2 className="text-sm uppercase mb-6 border-b border-[#ececec] pb-2">RETURNS</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xs uppercase font-medium mb-2">CUSTOM ORDERS</h3>
              <p className="text-xs">
                At this time, we do not accept returns or offer refunds, as all of our products are custom-made to order.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase font-medium mb-2">QUALITY ISSUES</h3>
              <p className="text-xs">
                If there is an issue with your order quality or if you received a damaged item, please reach out to us at support@couturebyikigai.com within 7 days of receiving your order.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-t border-[#ececec] pt-8">
          <h2 className="text-xs uppercase font-medium mb-3">NEED ASSISTANCE?</h2>
          <p className="text-xs mb-6">
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