// components/Layout/Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"; // Importamos Outlet

export default function Layout() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                flexGrow: 1,
            }}
        >
            <Header />
            <Outlet />
            <Footer />
        </Box>
    );
}
