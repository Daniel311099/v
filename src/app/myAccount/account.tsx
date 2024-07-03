"use client";
import React, { useEffect, useState } from "react";
import "~/styles/account.css"; // Create a CSS file for custom styles
import { useSession, signIn } from "next-auth/react";
import { Subscription } from "@prisma/client";
import SubscriptionsSection from "./subscriptions";
import ProfileSection from "./profile";
import OneTimeDonationsSection from "./oneTime";
import { donations } from "./mockData";
import Link from "next/link";

const Account: React.FC = () => {
    const { data: session, status } = useSession();
    const [activeSection, setActiveSection] = useState<string>("profile");
    const [selectedSubscription, setSelectedSubscription] =
        useState<Subscription | null>(null);
    const [selectedSubscriptionId, setSelectedSubscriptionId] = useState<
        string | null
    >(null);

    useEffect(() => {
        if (status === "unauthenticated") {
            signIn(); // Redirect to login if not authenticated
        }
    }, [status]);

    const handleSubscriptionClick = (id: string) => {
        setSelectedSubscriptionId(selectedSubscriptionId === id ? null : id);
    };

    const renderSection = () => {
        switch (activeSection) {
            case "profile":
                return <ProfileSection {...{ session }} />;
            case "oneTimeDonations":
                return (
                    <OneTimeDonationsSection
                    //  donations={donations}
                    />
                );
            case "subscriptions":
                return (
                    <SubscriptionsSection
                        // donations={donations}
                        selectedSubscriptionId={selectedSubscriptionId}
                        onSubscriptionClick={handleSubscriptionClick}
                    />
                );
            default:
                return <ProfileSection {...{ session }} />;
        }
    };

    return (
        <div className="account-page">
            <h1>My Account</h1>
            {session && (
                <div className="account-details">
                    <p>
                        Logged in as <strong>{session.user?.name}</strong>
                    </p>
                    <p>Email: {session.user?.email}</p>
                </div>
            )}
            <div className="account-container">
                <nav className="account-menu">
                    <button onClick={() => setActiveSection("profile")}>
                        Profile
                    </button>
                    <div className="dropdown">
                        <button className="dropbtn">Donations</button>
                        <div className="dropdown-content">
                            <button
                                onClick={() =>
                                    setActiveSection("oneTimeDonations")
                                }
                            >
                                One-Time Donations
                            </button>
                            <button
                                onClick={() =>
                                    setActiveSection("subscriptions")
                                }
                            >
                                Subscriptions
                            </button>
                        </div>
                    </div>
                
                <button>Support</button>
                <button >
                    <Link href="/api/auth/signout">Logout</Link>
                </button>
                </nav>
                <div className="account-content">{renderSection()}</div>
            </div>
            {/* <div className="account-actions">
                <button className="action-button">
                    <Link href="/api/auth/signout">Logout</Link>
                </button>
            </div> */}
        </div>
    );
};

export default Account;
