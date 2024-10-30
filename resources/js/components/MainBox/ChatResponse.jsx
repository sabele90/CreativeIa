import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import loadingGif from "../../assets/images/loadingGif.gif";

export default function ChatResponse({ responseMessage }) {
    const loading = !responseMessage;

    return (
        <>
            <Box sx={{ flexGrow: 1, m: 5 }}>
                {responseMessage ? (
                    <Typography>{responseMessage.generated_text}</Typography>
                ) : (
                    <Typography className="gradient-text">
                        Bienvenido a la IA de Creative Mind Labs, ¿en qué te
                        puedo ayudar?
                    </Typography>
                )}
            </Box>
            {loading && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={loadingGif} alt="gif Creative Ia" width={80} />
                </Box>
            )}
        </>
    );
}
