import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Router/Router.jsx";
import AuthProvider from "./providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <React.StrictMode>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} />
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
    </React.StrictMode>
  </div>
);
