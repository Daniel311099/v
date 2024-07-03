"use client"
import React from "react";
import { OneTimeDonation } from "@prisma/client";
import { api } from "~/trpc/react";

const OneTimeDonationsSection: React.FC<{ 
    // donations: OneTimeDonation[] 
}> = ({
    // donations,
}) => {
    //   const oneTimeDonations = donations.filter(
    //     (donation) => donation.frequency === "onetime"
    //   );

const{data, isLoading} = api.donations.getOneTimeDonations.useQuery();
    if (isLoading || !data) {
        return <h1>Loading ...</h1>
    }

    const oneTimeDonations = data
    
    return (
        <div>
            <h2>One-Time Donations</h2>
            {oneTimeDonations.length > 0 ? (
                <ul>
                    {oneTimeDonations.map((donation) => (
                        <li key={donation.id} className="donation-item">
                            <div className="donation-details">
                                <p className="donation-amount">
                                    {donation.currency} {donation.amount}
                                </p>
                                <p className="donation-status">
                                    Status: {donation.status}
                                </p>
                                <p className="donation-message">
                                    Message:{" "}
                                    {donation.message || "No message provided"}
                                </p>
                                <p className="donation-date">
                                    Date:{" "}
                                    {new Date(
                                        donation.createdAt
                                    ).toDateString()}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No one-time donations found.</p>
            )}
        </div>
    );
};

export default OneTimeDonationsSection;
