import { Subscription} from "@prisma/client";
import React from "react";

interface ManageSubscriptionMenuProps {
    donation: Subscription;
    onClose: () => void;
}

export const ManageSubscriptionMenu: React.FC<ManageSubscriptionMenuProps> = ({ donation, onClose }) => {
    return (
        <div className="subscription-menu">
            <h3>Manage Subscription</h3>
            <p>Subscription for: {donation.currency} {donation.amount} {donation.frequency}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};
