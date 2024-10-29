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
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <Typography
                        variant="h7"
                        sx={{
                            fontWeight: "bold",
                            padding: "20px",
                        }}
                    >
                        History
                    </Typography>
                </Toolbar>

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
