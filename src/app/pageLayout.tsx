"use client";
// Layout.js
import React, { use } from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { SessionProvider } from "next-auth/react";

const Layout = ({
    hero,
    children,
}: {
    hero: React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <SessionProvider>
            <div className="charity-landing-page">
                <div className="main-content">
                    <Header>{hero}</Header>
                    <div className="content">{children}</div>
                    <Footer />
                </div>
            </div>
        </SessionProvider>
    );
};

export default Layout;
