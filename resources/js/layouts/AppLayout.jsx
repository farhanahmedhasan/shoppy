import React from "react";

import AppNavbar from "./partials/AppNavbar";
import Footer from "../components/ui/Footer";
import BaseLayout from "./BaseLayout";

export default function AppLayout(props) {
    return (
        <BaseLayout title={props.title}>
            <AppNavbar />
            <main>{props.children}</main>
            <Footer />
        </BaseLayout>
    );
}
