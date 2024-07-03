import React from "react";
import "~/styles/donate.css";
import "~/styles/globals.css"
import "~/styles/styleguide.css";;
import Layout from "~/app/pageLayout";
import { DonateHero } from "~/app/donate/hero";
import { Donate } from "~/app/donate/donate";
import { Hero } from "../_components/hero";

// export const runtime = "edge"

const WrappedFrame = (): JSX.Element => {
    const title = "Donate"
    const subheading = "Together, We Can Create a Brighter Future for Communities in Need"
    return (
        <Layout hero={<Hero title={title} subheading={subheading} />}>
            <Donate />
        </Layout>
    );
};


export default WrappedFrame;