import React from "react";

import AppLayout from "../layouts/AppLayout";

export function Banner() {
    return (
        <AppLayout title="Shoppy">
            <div>
                <h1>Welcome to Shoppy!</h1>
                <p>Discover the best deals on your favorite products.</p>
            </div>
        </AppLayout>
    );
}

export default Banner;
