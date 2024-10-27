import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ChatResponse({ responseMessage }) {
    return (
        <>
            <Box sx={{ flexGrow: 1, mt: 1 }}>
                <Typography>
                    {responseMessage
                        ? responseMessage
                        : "Bienvenido a la IA Crearive Mind Lab , en que te puedo ayudar?"}
                </Typography>
            </Box>
        </>
    );
}
