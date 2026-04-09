import React from "react";
import styled from "styled-components";

const ShippingDeliveryPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Wrapper>
        <section className="sec-privacy-policy">
          <div className="con-privacy-policy">
            <h3 className="privacy-policy-heading">
              Shipping & Delivery Policy
            </h3>

            {/* OLD CONTENT COMMENTED */}
            {/*
            <p className="privacy-policy-subheading-txt">
              For domestic buyers, orders are shipped through registered
              domestic courier companies and /or speed post only. Orders are
              shipped within 6-8 days or as per the delivery date agreed at the
              time of order confirmation and delivering of the shipment subject
              to Courier Company / post office norms. The Alchemy Drip is not
              liable for any delay in delivery by the courier company / postal
              authorities and only guarantees to hand over the consignment to
              the courier company or postal authorities within 6-8 days from the
              date of the order and payment or as per the delivery date agreed
              at the time of order confirmation. Delivery of all orders will be
              to the address provided by the buyer. Delivery of our services
              will be confirmed on your mail ID as specified during
              registration. For any issues in utilizing our services you may
              contact our helpdesk on or Info@TheAlchemydrip.com
            </p>
            */}

            {/* NEW CONTENT */}
            <p className="privacy-policy-subheading-txt">
              All domestic orders are shipped through registered courier
              partners and/or Speed Post. <br /> Orders are dispatched within{" "}
              <b>6–8 working days</b> from the date of order confirmation and
              successful payment, unless a different delivery timeline is
              explicitly agreed upon by the school and informed to the customer.
            </p>

            <h4 className="privacy-policy-subheading">1. Delivery Timelines</h4>
            <p className="privacy-policy-txt privacy-policy-txt-lineheight">
              Estimated delivery timelines are subject to the serviceability and
              operational norms of the courier company or postal authorities.{" "}
              <br />
              The Alchemy Drip is responsible only for handing over the shipment
              within the committed dispatch timeline (6–8 days or agreed date).{" "}
              <br />
              We are <b>not liable for delays</b> caused by courier partners,
              postal services, or unforeseen logistical issues (weather,
              strikes, regional restrictions, etc.).
            </p>

            <h4 className="privacy-policy-subheading">2. Delivery Address</h4>
            <p className="privacy-policy-txt">
              Orders will be delivered strictly to the address provided by the
              customer at the time of order placement. <br /> Customers are
              responsible for ensuring accuracy of address and contact details.
            </p>

            <h4 className="privacy-policy-subheading">
              3. Order Tracking & Confirmation
            </h4>
            <p className="privacy-policy-txt">
              Shipment confirmation and updates are shared via <b>WhatsApp</b>{" "}
              on the registered mobile number. <br /> Customers may be contacted
              for coordination if required.
            </p>

            <h4 className="privacy-policy-subheading">
              4. Failed Delivery / Reattempts
            </h4>
            <p className="privacy-policy-txt">
              In case of failed delivery attempts due to incorrect address,
              unavailability, or refusal, re-delivery may incur additional
              charges. <br /> Orders returned back to origin due to such issues
              will be re-shipped only after additional payment.
            </p>

            <h4 className="privacy-policy-subheading">5. Support</h4>
            <p className="privacy-policy-txt">
              For any issues related to shipping, delivery, or service
              utilization, contact: <br />
              <b>Email:</b> Info@TheAlchemyDrip.in <br />
              <b>Phone/WhatsApp:</b> 8073209270
            </p>

            <p className="privacy-policy-txt">
              <b>
                By placing an order, you agree to the terms outlined in this
                policy.
              </b>
            </p>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .sec-privacy-policy {
    width: 100%;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-bottom: 168px;
  }

  .con-privacy-policy {
    max-width: 1140px;
    margin: 0 auto;
    text-align: start;
  }

  .privacy-policy-heading {
    color: var(--clr-heading-main);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 28px;
  }

  .privacy-policy-subheading-txt {
    font-size: 16px;
    color: var(--color-gray);
  }

  .privacy-policy-subheading {
    font-size: 22px;
    font-weight: 600;
    color: #000;
    line-height: 1.6rem;
  }

  .privacy-policy-txt {
    font-size: 16px;
    line-height: 1.3;
    color: var(--color-gray);
  }

  .privacy-policy-txt-lineheight {
    line-height: 1.5;
  }

  .privacy-policy-subheading-list-flex {
    font-size: 20px;
    color: #000;
    line-height: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: disc;
    padding-left: 15px;
  }
  @media screen and (max-width: 1140px) {
    .con-privacy-policy {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export default ShippingDeliveryPolicy;
