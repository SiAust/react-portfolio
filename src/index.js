import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Context
import { BirthdayContextProvider } from "./Birthday/BirthdayContextProvider";

ReactDOM.render(
    <BirthdayContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BirthdayContextProvider>,
    document.getElementById("root")
);
