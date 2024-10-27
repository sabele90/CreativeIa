import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";

const drawerWidth = 240;

export default function Sidebar({ history }) {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        overflowY: "auto",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <List>
                    {history.length > 0 ? (
                        history.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemText
                                        primary={item.generated_text}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{ padding: 2 }}>
                            No hay respuestas aún.
                        </Typography>
                    )}
                </List>
            </Drawer>
        </Box>
    );
}
