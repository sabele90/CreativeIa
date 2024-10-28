import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/logo.gif";

import "../../css/text.css";

export default function ChatResponse({ responseMessage }) {
    return (
        <>
            <Box sx={{ flexGrow: 1, mt: 1 }}>
                <Typography className="gradient-text">
                    {responseMessage
                        ? responseMessage
                        : "Bienvenido a la IA Crearive Mind Lab , en que te puedo ayudar?"}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",

                    justifyContent: "center",
                }}
            >
                <img src={logo} alt="logo Creative Ia" width={80} margin={10} />
            </Box>
        </>
    );
}
