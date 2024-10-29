import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import loadingGif from "../assets/images/loadingGif.gif";
import "../../css/text.css";

export default function ChatResponse({ responseMessage }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (responseMessage) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [responseMessage]);

    return (
        <>
            <Box sx={{ flexGrow: 1, m: 4 }}>
                {responseMessage && !loading ? (
                    <Typography>{responseMessage.generated_text}</Typography>
                ) : (
                    <Typography className="gradient-text">
                        Bienvenido a la IA Crearive Mind Lab, ¿en qué te puedo
                        ayudar?
                    </Typography>
                )}
            </Box>
            {loading && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={loadingGif}
                        alt="gif Creative Ia"
                        width={80}
                        margin={10}
                    />
                </Box>
            )}
        </>
    );
}
