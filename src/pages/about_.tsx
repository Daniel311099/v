import React from "react";
import Layout from "~/app/pageLayout";
import { ComingSoonHero } from "~/app/comingSoon";
import { ComingSoon } from "~/app/comingSoon";
import "../styles/globals.css";
import "~/styles/styleguide.css";

const WrappedComingSoon = (): JSX.Element => {
    return (
        <Layout hero={<ComingSoonHero />}>
            <h1>Coming Soon</h1>
            <h1>About Us!</h1>
            <ComingSoon />
        </Layout>
    );
};

export default WrappedComingSoon;