import { OneTimeDonation, Subscription} from "@prisma/client";
import React from "react";

type Donation = OneTimeDonation | Subscription

interface DonationsListProps {
    title: string;
    donations: Donation[];
    onCardClick?: (donation: Donation) => void;
}

export const DonationsList: React.FC<DonationsListProps> = ({ title, donations, onCardClick }) => {
    return (
        <div className="donations-section">
            <h3>{title}</h3>
            <ul className="donations-list">
                {donations.map((donation) => (
                    <li
                        key={donation.id}
                        className={`donation-item ${onCardClick ? "clickable" : ""}`}
                        onClick={() => onCardClick && onCardClick(donation)}
                    >
                        <div className="donation-details">
                            <p className="donation-amount">{donation.currency} {donation.amount}</p>
                            {/* <p className="donation-frequency">Frequency: {donation || ""}</p> */}
                            <p className="donation-status">Status: {donation.status}</p>
                            <p className="donation-message">Message: {donation.message || "No message"}</p>
                            <p className="donation-date">Date: {new Date(donation.createdAt).toDateString()}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
