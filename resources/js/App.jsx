import React from "react";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox";
import { Box } from "@mui/material";

function App() {
    return (
        <>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
                <Sidebar />
                <MainBox />
            </Box>
        </>
    );
}

export default App;
