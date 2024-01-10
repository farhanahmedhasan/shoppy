import { Head } from "@inertiajs/react";
import React from "react";

export default function BaseLayout(props) {
    return (
        <>
            <Head title={props.title} />
            <main>{props.children}</main>
            {/* Future toaster */}
        </>
    );
}
