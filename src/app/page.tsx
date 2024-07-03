import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
// import styles from "./index.module.css";
// import "~/styles/styles.css";
import { Home as HomePage } from "~/app/_components/home/home";
import { Footer } from "./_components/footer";
import { FAQ } from "./_components/home/faqs";
import { Pricing } from "./_components/home/pricing";
import { Review } from "./_components/home/review";
import { Impact } from "./_components/home/impact";
import { Stats } from "./_components/home/stats";
import { AboutUs } from "./_components/home/about";
import { Partners } from "./_components/home/partners";
import { Header } from "./_components/header";
import { Hero as HomeHero } from "./_components/home/hero";
// import { Frame } from "./donate/page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Layout  from "./pageLayout";
import "~/styles/styleguide.css";

// export const runtime = "edge"

// const Layout = ({
//     hero,
//     children,
// }: {
//     hero: React.ReactNode;
//     children: React.ReactNode;
// }) => {
//     return (
//         <div className="charity-landing-page">
//             <div className="main-content">
//                 <Header>{hero}</Header>
//                 <div className="content">{children}</div>
//                 <Footer />
//             </div>
//         </div>
//     );
// };
export default async function Home() {
    // const hello = await api.post.hello({ text: "from tRPC" });
    // const session = await getServerAuthSession();

    return (
        // <CharityLandingPage />
        <Layout hero={<HomeHero />}>
            <HomePage />
        </Layout>
    );
}

