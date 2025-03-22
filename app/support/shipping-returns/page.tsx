export default function ShippingReturnsPage() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-sm uppercase mb-8">SHIPPING + RETURNS</h1>

      <div className="max-w-3xl mx-auto">
        {/* Shipping Section */}
        <section className="mb-12">
          <h2 className="text-sm uppercase mb-4">SHIPPING INFORMATION</h2>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">DELIVERY OPTIONS</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#ececec]">
                  <th className="text-left py-2 font-normal">METHOD</th>
                  <th className="text-left py-2 font-normal">COST</th>
                  <th className="text-left py-2 font-normal">ESTIMATED DELIVERY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#ececec]">
                  <td className="py-2">Standard Shipping</td>
                  <td className="py-2">$8.00 (Free over $150)</td>
                  <td className="py-2">3-5 business days</td>
                </tr>
                <tr className="border-b border-[#ececec]">
                  <td className="py-2">Express Shipping</td>
                  <td className="py-2">$15.00</td>
                  <td className="py-2">1-2 business days</td>
                </tr>
                <tr className="border-b border-[#ececec]">
                  <td className="py-2">International Shipping</td>
                  <td className="py-2">$25.00 (Free over $250)</td>
                  <td className="py-2">7-14 business days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">SHIPPING POLICIES</h3>
            <ul className="text-xs list-disc pl-4 space-y-2">
              <li>Orders are processed within 1-2 business days after payment confirmation.</li>
              <li>Shipping times are estimates and not guaranteed.</li>
              <li>All orders include tracking information sent via email.</li>
              <li>We ship to most countries worldwide. Import duties and taxes may apply for international orders.</li>
              <li>P.O. boxes are accepted for standard shipping only.</li>
              <li>We do not ship on weekends or holidays.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">ORDER TRACKING</h3>
            <p className="text-xs mb-2">
              Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by:
            </p>
            <ul className="text-xs list-disc pl-4 space-y-2">
              <li>Logging into your account and viewing your order history</li>
              <li>Contacting our customer service team with your order number</li>
            </ul>
          </div>
        </section>

        {/* Returns Section */}
        <section>
          <h2 className="text-sm uppercase mb-4">RETURNS & EXCHANGES</h2>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">RETURN POLICY</h3>
            <ul className="text-xs list-disc pl-4 space-y-2">
              <li>We accept returns within 30 days of delivery.</li>
              <li>Items must be unworn, unwashed, and with all original tags attached.</li>
              <li>Sale items and accessories are final sale and cannot be returned.</li>
              <li>Return shipping costs are the responsibility of the customer unless the item is defective or we made an error.</li>
              <li>Refunds will be issued to the original payment method within 7-10 business days after we receive your return.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">HOW TO RETURN</h3>
            <ol className="text-xs list-decimal pl-4 space-y-2">
              <li>Log into your account and select the order containing the item(s) you wish to return.</li>
              <li>Select the item(s) you wish to return and the reason for your return.</li>
              <li>Print the return label and packing slip provided.</li>
              <li>Pack the item(s) securely with the packing slip inside.</li>
              <li>Attach the return label to the outside of the package.</li>
              <li>Drop off the package at your nearest postal service location.</li>
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">EXCHANGES</h3>
            <p className="text-xs mb-2">
              We do not process direct exchanges. If you need a different size or color, please return your item for a refund and place a new order for the desired item.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase font-medium mb-2">DAMAGED OR DEFECTIVE ITEMS</h3>
            <p className="text-xs mb-2">
              If you receive a damaged or defective item, please contact our customer service team within 7 days of delivery. We will provide a prepaid return label and process a replacement or refund once we receive the item.
            </p>
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