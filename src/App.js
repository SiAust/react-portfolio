// import React, { useEffect, useState } from "react";
import Router from "./ReactRouterSetup";
function App() {
    return (
        <div className="container">
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                className="wave-border"
            >
                <path d="M0.00,49.98 C141.92,57.72 299.38,21.20 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"></path>
            </svg>
            <Router />
        </div>
    );
}

export default App;
