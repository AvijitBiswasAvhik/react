import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ReturnPolicy.css";

const RefundPolicyPage = () => {
    return (
        <div className="refund-container mt-2">
            <header className="refund-header">
                <h1 className="refund-title">Refund Policy</h1>
            </header>
            <section className="refund-section">
                <h2 className="refund-subtitle">1. Overview</h2>
                <p className="refund-paragraph">
                    Welcome to [Your Company Name], your premier destination for
                    high-quality products. We're dedicated to ensuring your
                    satisfaction with every purchase. If you find yourself in a
                    situation where you need to return a product, our refund
                    policy is designed to assist you.
                </p>
            </section>
            <section className="refund-section">
                <h2 className="refund-subtitle">2. Eligibility for Refund</h2>
                <p className="refund-paragraph">
                    To be eligible for a refund, the following conditions must
                    be met:
                </p>
                <ul>
                    <li>
                        The item must be unused, in the same condition as
                        received, and in the original packaging.
                    </li>
                    <li>
                        The return must be initiated within [number] days of the
                        purchase date.
                    </li>
                    <li>
                        Customized or personalized items are exempt from being
                        refunded unless they are defective or damaged.
                    </li>
                </ul>
            </section>
            <section className="refund-section">
                <h2 className="refund-subtitle">3. Refund Process</h2>
                <p className="refund-paragraph">
                    Initiating a refund is a straightforward process:
                </p>
                <ol>
                    <li>
                        Contact Us: Send an email to [your customer support
                        email] with the subject line "Refund Request - Order
                        #[your order number]."
                    </li>
                    <li>
                        Provide Details: In the email, include your order
                        number, the reason for the refund, and any supporting
                        documentation or images if applicable.
                    </li>
                    <li>
                        Wait for Approval: We will review your request and
                        notify you of the approval or rejection of your refund.
                    </li>
                    <li>
                        Return Shipping: If approved, we will provide you with
                        instructions on how to return the item. Please ensure
                        that the item is securely packaged.
                    </li>
                </ol>
            </section>
            {/* Add more sections as needed */}
            <Link to="/return-policy/submit" className="refund-link">
                Submit a Refund Request
            </Link>
        </div>
    );
};

export default RefundPolicyPage;
