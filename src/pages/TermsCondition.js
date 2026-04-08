import React from "react";
import styled from "styled-components";

const TermsCondition = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Wrapper>
        <section className="sec-privacy-policy">
          <div className="con-privacy-policy">
            <h3 className="privacy-policy-heading">Terms & Conditions</h3>

            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                <b>1. Customer Information</b>
                <br />
                The bank account and contact details provided by the customer
                would be final and binding. The Alchemy Drip will not be
                responsible for any errors in details provided by the customer
                (including refund failures due to incorrect information).
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>2. Delivery Discrepancies</b>
                <br />
                If you receive an order delivered notification (SMS/WhatsApp)
                but have not received the product, you must notify us within 24
                hours. Failure to report within this timeframe may result in the
                issue not being considered.
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>3. Product Responsibility</b>
                <br />
                Customers are required to take reasonable care of the product(s)
                while in their possession. All original tags, packaging,
                documents, and accessories must be retained and returned in the
                same condition as received.
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>4. Damaged / Defective Products</b>
                <br />
                If the product does not meet expected standards or is received
                in a damaged/defective condition, the customer must notify us
                within 24 hours of delivery. Complaints must be raised via
                WhatsApp: 8073209270 along with clear images of the product and
                description of the issue. Our team will review and provide
                further instructions.
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>5. Inspection & Approval</b>
                <br />
                All returned products will undergo a quality check upon receipt.
                Based on inspection, The Alchemy Drip reserves the right to
                approve or reject the return/refund and deduct applicable
                charges (if any).
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>6. Refund Process</b>
                <br />
                Eligible refunds will be confirmed via WhatsApp. Refunds will be
                processed to the original payment method. While we aim to
                process refunds at the earliest, it may take up to 30 working
                days from the date of approval.
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>7. Wash & Care Instructions</b>
                <br />
                All products must be machine washed only. Strictly do not hand
                wash, bleach, or use harsh detergents. Damage caused due to
                improper washing or handling will not be eligible for return,
                exchange, or refund.
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>8. Communication</b>
                <br />
                All official communication and updates will be shared via
                WhatsApp on the registered number.
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>9. Policy Rights</b>
                <br />
                The Alchemy Drip reserves the right to modify or update these
                terms at any time without prior notice.
              </li>

              <li className="privacy-policy-subheading-txt">
                <b>
                  By placing an order, you acknowledge and agree to the above
                  Terms & Conditions.
                </b>
              </li>
            </ul>

            {/* OLD TERMS (NOT USED) */}
            {/* 
            <h4 className="privacy-policy-subheading">
              The use of this website is subject to the following terms of use:
            </h4>
            <ul className="privacy-policy-subheading-list-flex">
              <li className="privacy-policy-subheading-txt">
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </li>
              <li className="privacy-policy-subheading-txt">
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </li>
              <li className="privacy-policy-subheading-txt">
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products,
                services or information available through this website meet your
                specific requirements.
              </li>
              <li className="privacy-policy-subheading-txt">
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance and graphics. Reproduction is
                prohibited other than in accordance with the copyright notice,
                which forms part of these terms and conditions.
              </li>
              <li className="privacy-policy-subheading-txt">
                All trademarks reproduced in this website which are not the
                property of, or licensed to, the operator are acknowledged on
                the website.
              </li>
              <li className="privacy-policy-subheading-txt">
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a criminal offense.
              </li>
              <li className="privacy-policy-subheading-txt">
                From time to time this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information.
              </li>
              <li className="privacy-policy-subheading-txt">
                You may not create a link to this website from another website
                or document without The Alchemy Drip’s prior written consent.
              </li>
              <li className="privacy-policy-subheading-txt">
                Your use of this website and any dispute arising out of such use
                of the website is subject to the laws of India or other
                regulatory authority.
              </li>
            </ul>
            <p className="privacy-policy-txt">
              We as a merchant shall be under no liability whatsoever in respect
              of any loss or damage arising directly or indirectly out of the
              decline of authorization for any Transaction, on Account of the
              Cardholder having exceeded the preset limit mutually agreed by us
              with our acquiring bank from time to time
            </p> 
            */}
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
    /* list-style: disc;
    padding-left: 15px; */
    list-style: none;
    padding-left: 0;
  }

  @media screen and (max-width: 1140px) {
    .con-privacy-policy {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export default TermsCondition;
