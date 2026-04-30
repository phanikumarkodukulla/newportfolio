import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Register service worker for PWA support
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((reg) => {
      console.log("Service Worker registered:", reg);
    })
    .catch((err) => {
      console.log("Service Worker registration failed:", err);
    });
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
