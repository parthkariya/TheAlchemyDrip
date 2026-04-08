// import React from "react";

// const ExchangeReturnPolicy = () => {
//   return <div>ExchangeReturnPolicy</div>;
// };

// export default ExchangeReturnPolicy;
import React from "react";
import styled from "styled-components";

const ExchangeReturnPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Wrapper>
        <section className="sec-privacy-policy">
          <div className="con-privacy-policy">
            <h3 className="privacy-policy-heading">
              RETURNS & EXCHANGE POLICY
            </h3>

            {/* OLD CONTENT COMMENTED */}
            {/*
            <ul className="privacy-policy-subheading-list-flex">
              ... (old list fully commented)
            </ul>

            <h4>SELF-SHIPPING OF ORDERS FOR RETURNS:</h4>
            <ul className="privacy-policy-subheading-list-flex">
              ...
            </ul>

            <div>
              ...
            </div>
            */}

            {/* NEW CONTENT */}

            <h4 className="privacy-policy-subheading">General Timeline</h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Returns & exchanges can be requested within
                <b>7 days from the date of delivery</b>.
              </li>
              <li className="privacy-policy-subheading-txt">
                An additional <b>5–7 days</b> may be required for the product(s)
                to reach us and be processed.
              </li>
            </ul>

            <h4 className="privacy-policy-subheading">Bangalore Schools</h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Returns & exchanges must be initiated via the <b>website</b>.
              </li>
              <li className="privacy-policy-subheading-txt">
                A <b>fixed service fee of ₹100</b> is applicable per request.
              </li>
              <li className="privacy-policy-subheading-txt">
                Any <b>price difference</b> must be paid additionally.
              </li>
              <li className="privacy-policy-subheading-txt">
                Post payment, our team will contact you within <b>7 days</b>.
              </li>
            </ul>

            <h4 className="privacy-policy-subheading">
              Hyderabad & Pune Schools
            </h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Returns & exchanges must be sent via <b>self-shipping</b>.
              </li>
              <li className="privacy-policy-subheading-txt">
                Shipping charges are to be <b>borne by the customer</b>.
              </li>
              <li className="privacy-policy-subheading-txt">
                Once the product is received and verified, the request will be
                processed.
              </li>
            </ul>

            <p className="privacy-policy-txt">
              <b>Shipping Address:</b>
              <br />
              The Alchemy Drip <br />
              8073209270 <br />
              174, Ground Floor, 4th Cross, Opp. Bhuvaneshwarinagar Park <br />
              Bhuvaneshwarinagar, Kathriguppe <br />
              Bangalore – 560085
            </p>

            <h4 className="privacy-policy-subheading">Product Condition</h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Items must be returned in <b>unused condition</b> with original
                tags and packaging.
              </li>
              <li className="privacy-policy-subheading-txt">
                Worn or damaged products will <b>not be accepted</b>.
              </li>
            </ul>

            <h4 className="privacy-policy-subheading">Reverse Pickup</h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Available <b>only for Bangalore orders</b>.
              </li>
              <li className="privacy-policy-subheading-txt">
                Hyderabad & Pune require <b>self-shipping</b>.
              </li>
            </ul>

            <h4 className="privacy-policy-subheading">Refund Policy</h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Refunds are applicable <b>only for prepaid orders</b>.
              </li>
              <li className="privacy-policy-subheading-txt">
                Allow up to <b>7 days after approval</b> for refund.
              </li>
              <li className="privacy-policy-subheading-txt">
                <b>Shipping charges are non-refundable</b>.
              </li>
            </ul>

            <h4 className="privacy-policy-subheading">Non-Returnable Items</h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">Socks</li>
              <li className="privacy-policy-subheading-txt">
                Leggings (full/half)
              </li>
              <li className="privacy-policy-subheading-txt">
                The Alchemy Drip may update this list without prior notice.
              </li>
            </ul>

            <h4 className="privacy-policy-subheading">
              Self-Shipping Guidelines (Hyderabad & Pune)
            </h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                Ensure secure packaging.
              </li>
              <li className="privacy-policy-subheading-txt">
                Mention <b>Order ID & mobile number</b> on parcel.
              </li>
              <li className="privacy-policy-subheading-txt">
                Use <b>Speed Post or DTDC</b>.
              </li>
              <li className="privacy-policy-subheading-txt">
                Avoid <b>The Professional Couriers</b>.
              </li>
            </ul>

            <h4 className="privacy-policy-subheading">Support</h4>
            <p className="privacy-policy-txt">
              WhatsApp: <b>8073209270</b> <br />
              Timings: <b>Monday – Sunday, 10 AM – 7 PM</b>
            </p>

            <p className="privacy-policy-txt">
              <b>By placing an order, you agree to the terms outlined above.</b>
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

export default ExchangeReturnPolicy;
