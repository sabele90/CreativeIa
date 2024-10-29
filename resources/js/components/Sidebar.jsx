import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

const drawerWidth = 240;

export default function Sidebar({ history, selectHistory }) {
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
                        borderRadius: "12px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        margin: "16px",
                        padding: "16px",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box>
                    <Toolbar>
                        <Typography
                            variant="h7"
                            sx={{
                                fontWeight: "bold",
                            }}
                        >
                            <HistoryIcon color="primary" />
                        </Typography>
                    </Toolbar>
                </Box>
                <List>
                    {history.length > 0 ? (
                        history.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    onClick={() => selectHistory(item)}
                                    sx={{
                                        "&:hover": {
                                            borderRadius: "8px",
                                        },
                                        margin: "5px",
                                    }}
                                >
                                    <ListItemText
                                        primary={item.generated_text}
                                        sx={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                        }}
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
