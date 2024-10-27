import React, { useState } from "react";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import ChatResponse from "./ChatResponse";
import InputChat from "./InputChat";
import Header from "./Header";

export default function MainBox() {
    const [responseMessage, setResponseMessage] = useState(null);
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    flexGrow: 1,
                    p: 3,
                }}
            >
                <Header />
                <ChatResponse responseMessage={responseMessage} />
                <InputChat setResponseMessage={setResponseMessage} />
                <Footer />
            </Box>
        </>
    );
}
