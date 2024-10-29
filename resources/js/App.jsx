// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox/MainBox";
import axios from "axios";
import { Box } from "@mui/material";

function App() {
    const [history, setHistory] = useState([]);
    const [responseMessage, setResponseMessage] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get("/api/history");
                setHistory(response.data);
            } catch (error) {
                console.error("Error al obtener el historial:", error);
            }
        };

        fetchHistory();
    }, []);

    useEffect(() => {
        if (responseMessage) {
            setHistory((prevHistory) => {
                const exists = prevHistory.find(
                    (item) => item.id === responseMessage.id
                );
                return exists ? prevHistory : [...prevHistory, responseMessage];
            });
        }
    }, [responseMessage]);

    const handleSelectHistory = (selectedMessage) => {
        setResponseMessage(selectedMessage);
    };

    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <Sidebar
                    history={history}
                    selectHistory={handleSelectHistory}
                />

                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route
                            index
                            element={
                                <MainBox
                                    responseMessage={responseMessage}
                                    setResponseMessage={setResponseMessage}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
