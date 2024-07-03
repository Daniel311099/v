import React from "react";
import Layout from "~/app/pageLayout";
import { ComingSoonHero } from "~/app/comingSoon";
import  Account  from "~/app/myAccount/account";
import "~/styles/globals.css";
import "~/styles/styleguide.css";
import { DonateHero } from "~/app/donate/hero";
import { Hero } from "../_components/hero";

// // export const runtime = "edge"

const WrappedComingSoon = (): JSX.Element => {
    const title = "My Account"
    const subheading = "Manage your account"
    return (
        <Layout hero={<Hero title={title} subheading={subheading} />}>
        {/* <h1>Coming Soon</h1>
        <h1>Partners!</h1> */}
            <Account />
        </Layout>
    );
};

export default WrappedComingSoon;