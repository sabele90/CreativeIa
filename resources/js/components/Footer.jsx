import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{ py: 2, textAlign: "center", bgcolor: "background.paper" }}
        >
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} CreativeAI Chat Application
            </Typography>
        </Box>
    );
}
