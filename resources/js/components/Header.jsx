import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import "../../css/text.css";

export default function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Toolbar>
                    <Typography
                        variant="h3"
                        noWrap
                        className="gradient-text"
                        sx={{
                            m: 2,
                        }}
                    >
                        Creative Ia
                    </Typography>
                    <img src={logo} alt="logo Creative Ia" width={30} />
                </Toolbar>
            </Box>
        </>
    );
}
