import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import "../../css/text.css";

export default function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1, mt: 2 }}>
                <Toolbar>
                    <Typography variant="h3" noWrap className="gradient-text">
                        Creative Ia
                    </Typography>
                </Toolbar>
            </Box>
        </>
    );
}
