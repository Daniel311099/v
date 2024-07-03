import React, { useState } from "react";
import { Subscription} from "@prisma/client";
import { api } from "~/trpc/react";

const SubscriptionsSection: React.FC<{
    // donations: Subscription[];
    selectedSubscriptionId: string | null;
    onSubscriptionClick: (id: string) => void;
}> = ({ selectedSubscriptionId, onSubscriptionClick }) => {
    // const subscriptionDonations = donations.filter(
    //     (donation) => donation.frequency !== "onetime"
    // );
    const [selectedSubscription, setSelectedSubscription] = useState(null);
    const cancelSubscription = api.donations.cancelSubscription.useMutation();

    const{data, isLoading} = api.donations.getSubscriptions.useQuery();
    if (isLoading || !data) {
        return <h1>Loading ...</h1>
    }

    const subscriptionDonations = data
    const handleCancelSubscription = async (subscriptionId: string) => {
        try {
          const result = await cancelSubscription.mutateAsync({ subscriptionId });
          alert(result.message);
          // Optionally refresh the subscriptions list or update the state
        } catch (error) {
          console.error('Failed to cancel subscription:', error);
          alert('Failed to cancel subscription');
        }
      };
      return (
        <div className="subscriptions-section">
            <h2>Subscriptions</h2>
            {subscriptionDonations.length > 0 ? (
                <ul className="subscriptions-list">
                    {subscriptionDonations.map((donation) => (
                        <li
                            key={donation.id}
                            className={`subscription-item ${selectedSubscriptionId === donation.id ? 'active' : ''}`}
                            onClick={() => onSubscriptionClick(donation.id)}
                        >
                            <div className="subscription-details">
                                <p className="subscription-amount">
                                    {donation.currency} {donation.amount}
                                </p>
                                <p className="subscription-frequency">
                                    Frequency: {donation.frequency}
                                </p>
                                <p className="subscription-status">Status: {donation.status}</p>
                                <p className="subscription-date">
                                    Date: {new Date(donation.createdAt).toDateString()}
                                </p>
                            </div>
                            {selectedSubscriptionId === donation.id && (
                                <div className="subscription-management">
                                    <h3>Manage Subscription</h3>
                                    <p>
                                        Subscription for: {donation.currency} {donation.amount} {donation.frequency}
                                    </p>
                                    <button onClick={() => alert("Change subscription")}>
                                        Change subscription
                                    </button>
                                    <button onClick={() => handleCancelSubscription(donation.stripeSubscriptionId)}>
                                        Cancel subscription
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No subscriptions found.</p>
            )}
        </div>
    );
};

export default SubscriptionsSection;
