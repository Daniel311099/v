import React from "react";
import Link from "next/link";

// export const runtime = "experimental-edge"

const Success: React.FC = () => {
    return (
        <div className="payment-status-page">
            <h1>Payment Successful!</h1>
            <p>Thank you for your donation. Your support helps us make a difference.</p>
            <Link href="/">
                <button className="back-button">Go to Home</button>
            </Link>
        </div>
    );
};

export default Success;
