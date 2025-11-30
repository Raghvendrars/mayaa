import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import "./Policies.css";

function Policies() {
  return (
    <>
      <Header2 />
      <div className="policies-page">
        <div className="policies-container">
          <div className="policies-box">
            <div className="policy-section">
              <h2>Shipping Policy:</h2>

              <div className="policy-content">
                <div className="policy-item">
                  <ul>
                    <li>
                      <b>Order Processing:</b> Orders Are Packed And Dispatched
                      Within 48–72 Hours Of Placement (Excluding Sundays &
                      Public Holidays).
                    </li>
                    <li>
                      <b>Delivery Timelines</b>
                      <ul>
                        <li>
                          Within Karnataka: Delivered in 3–4 Business Days After
                          Dispatch.
                        </li>
                        <li>
                          Across India: Timelines May Vary By Courier Partner.
                        </li>
                        <li>
                          International: Delivered in 7–10 Business Days,
                          Depending On Destination.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <b>Delays:</b> While We Work With Trusted Counters,
                      Unforeseen Issues May Occasionally Cause Delays. We
                      Appreciate Your Patience As We Resolve Them.
                    </li>
                    <li>
                      <b>Order Cancellations:</b> If Delivery Takes Unusually
                      Long (1–2 Weeks) Or A Package Is Untraceable, Manya Kids
                      May Cancel The Order And Issue A Full Refund.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                At Manya Kids, We Value Your Trust And Strive To Deliver Your
                Orders On Time. Thank You For Supporting Us—Let's Grow Together!
              </p>
            </div>

            <div className="policy-section">
              <h2>Return Policy</h2>

              <div className="policy-content">
                <div className="policy-item">
                  At Manya Kids, Our Goal Is To Keep Every Little Customer
                  Happy. If You're Not Satisfied With Your Purchase, We're Here
                  To Help.
                  <ul>
                    <li>
                      Returns/Exchanges Can Only Be Initiated For Manufacturing
                      Defects Or Quality Issues.
                    </li>
                    <li>
                      To Raise A Request, Contact Us Within 24 Hours Of
                      Receiving Your Order At Support@Manyakids.Com Or Via
                      WhatsApp. Please Include Your Order Number, Issue Details,
                      And A Photo Of The Product. Keep The Original Invoice And
                      Tags Safe.
                    </li>
                    <li>
                      {" "}
                      Size Concerns Are Not Eligible For Returns (Please Refer The Size Chart Before Ordering, Or Contact Us For Guidance).
                      To
                    </li>
                    <li>Color Differences Are Not Considered Defects. As Slight
                    Variations May Occur Due To Lighting, Fabric Nature,
                    Finishes, Or Device Screen Settings.</li>
                    <li>
                        Once The Returned Item Reaches Our Facility And Passes A
                    Quality Check, A Replacement/Exchange Will Be Shipped. You
                    Can Track It Via Your Order Details Page.
                    </li>
                    <li>
                        Exchanges May Attract A Minimal Shipping Charge And Are
                    Subject To Stock Availability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="policy-section">
              <h2>Refunds</h2>

              <div className="policy-content">
                <div className="policy-item">
                    <ul>
                        <li>
                            Refunds Are Processed Only For Approved Returns.
                        </li>
                        <li>After Receiving And Verifying The Returned Product, Refunds
                    Are Initiated Within 5–7 Business Days.</li>
                    <li>Refunds Are Made To The Original Payment Method Used For The
                    Order.</li>
                    <li>For Replacements Or Exchanges, No Refunds Will Be
                    Issued—Only The New Products Will Be Shipped.</li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="policy-section">
              <h2>Sale Items</h2>

              <div className="policy-content">
                <div className="policy-item">
                    <ul><li>All Items Purchased During Sales Or Promotions Are
                    Considered Final Sale And Are Not Eligible For Return Or
                    Exchange.</li></ul>
                </div>
              </div>
            </div>

            <div className="policy-section">
              <h2>Cancellations</h2>

              <div className="policy-content">
                <div className="policy-item">
                    <ul>
                        <li>
                            Orders Cannot Be Cancelled Or Modified Once Placed If
                    Payment Is Confirmed.
                        </li>
                        <li>In Urgent Cases, Reach Us Immediately At
                    Support@Manyakids.Com Or Via WhatsApp With Your Order
                    Details. If The Order Has Not Been Shipped Yet, We Will Try
                    Our Best To Accommodate Your Request.</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Policies;