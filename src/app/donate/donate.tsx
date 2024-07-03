import React from "react";
import "~/styles/donate.css";
import Layout from "~/app/pageLayout";
import { DonateHero } from "~/app/donate/hero";
import { DonateIntro } from "./info";
import { DonateForm } from "./form";

export const Donate: React.FC = () => {
    return (
        <div className="donate-page">
            <DonateIntro />
            <div className="donate-right">
                <DonateForm />
            </div>
        </div>
    );
};