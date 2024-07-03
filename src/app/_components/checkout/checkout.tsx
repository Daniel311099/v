import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import "~/styles/donate.css";
import { api } from "~/trpc/server";

const currencies = [
    { code: "GBP", label: "British Pound" },
    { code: "USD", label: "US Dollar" },
    { code: "EUR", label: "Euro" }
];

const donationAmounts = [5, 10, 15];

export const DonateForm: React.FC = () => {
    const { data: session } = useSession();
    const [selectedAmount, setSelectedAmount] = useState<string>("");
    const [customAmount, setCustomAmount] = useState<string>("");
    const [selectedFrequency, setSelectedFrequency] = useState<string>("monthly");
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
    const [currency, setCurrency] = useState<string>("GBP");

    const handleAmountChange = (value: string) => {
        setSelectedAmount(value);
        setCustomAmount("");
    };

    const handleFrequencyChange = (value: string) => {
        setSelectedFrequency(value);
    };

    const handleAnonymousChange = () => {
        setIsAnonymous(!isAnonymous);
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAmount("");
        setCustomAmount(e.target.value);
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value);
    };

    const getCurrencySymbol = () => {
        switch (currency) {
            case "USD":
                return "$";
            case "EUR":
                return "€";
            case "GBP":
            default:
                return "£";
        }
    };

    // const handleCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     console.log({session, isAnonymous})
    //     if (!session && !isAnonymous) {
    //         signIn();
    //     } else {
    //         console.log("Checkout");
    //         window.open("https://buy.stripe.com/9AQdROaFs7AF6bufYY");
    //     }
    // };

    const handleCheckout = async () => {
        if (!session && !isAnonymous) {
            signIn();
            return;
        }

        const amount = customAmount ? parseFloat(customAmount) : parseFloat(selectedAmount);

        // const response = await api.checkout.createCheckoutSession({
        //     amount,
        //     currency,
        //     frequency: selectedFrequency,
        //     anonymous: isAnonymous,
        // });

        // if (response.url) {
        //     window.open(response.url, '_blank');
        // }
    };

    return (
        <form className="donate-form" onSubmit={(e) => e.preventDefault()}>
            <p className="donate-welcome">Welcome to our donation page. Please fill out the form below.</p>
            <div className="currency-selector">
                <label htmlFor="currency-select">Choose a currency:</label>
                <select id="currency-select" value={currency} onChange={handleCurrencyChange} className="currency-select">
                    {currencies.map(({ code, label }) => (
                        <option key={code} value={code}>
                            {code} - {label}
                        </option>
                    ))}
                </select>
            </div>
            <fieldset className="donation-amount">
                <legend>Choose a donation amount</legend>
                {donationAmounts.map((amount) => (
                    <label
                        key={amount}
                        className={`radio-label ${selectedAmount === amount.toString() ? "selected" : ""}`}
                        onClick={() => handleAmountChange(amount.toString())}
                    >
                        <input type="radio" name="amount" value={amount} className="radio-input" checked={selectedAmount === amount.toString()} readOnly />
                        {getCurrencySymbol()}
                        {amount}
                    </label>
                ))}
                <input 
                    type="number" 
                    placeholder={`Enter a custom donation amount (${getCurrencySymbol()})`} 
                    className="custom-donation-input" 
                    value={customAmount} 
                    onChange={handleCustomAmountChange} 
                />
            </fieldset>
            <fieldset className="donation-frequency">
                <legend>Choose a donation frequency</legend>
                <div className="radio-buttons">
                    {["monthly", "yearly", "onetime"].map((frequency) => (
                        <label
                            key={frequency}
                            className={`radio-label ${selectedFrequency === frequency ? "selected" : ""}`}
                            onClick={() => handleFrequencyChange(frequency)}
                        >
                            <input type="radio" name="frequency" value={frequency} className="radio-input" checked={selectedFrequency === frequency} readOnly />
                            {frequency.charAt(0).toUpperCase() + frequency.slice(1)}
                        </label>
                    ))}
                </div>
            </fieldset>
            <fieldset className="donation-anonymous">
                <label className="checkbox-label">
                    <input type="checkbox" name="anonymous" className="checkbox-input" checked={isAnonymous} onChange={handleAnonymousChange} />
                    Do you want your donation to be anonymous?
                </label>
            </fieldset>
            <fieldset className="donation-message">
                <label htmlFor="message-input">Add a message!</label>
                <textarea id="message-input" placeholder="Your message..." className="message-input"></textarea>
            </fieldset>
            <div className="donate-buttons">
                <button type="button" className="cancel-button">Cancel</button>
                {!session && !isAnonymous ? (
                    <>
                        <p className="login-required">You need to log in to proceed with the checkout.</p>
                        <button type="button" className="checkout-button" onClick={() => signIn()}>Login</button>
                    </>
                ) : (
                    <button type="button" className="checkout-button" onClick={handleCheckout}>Checkout</button>
                )}
            </div>
        </form>
    );
};
