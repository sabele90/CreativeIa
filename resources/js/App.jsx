import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox";
import { Box } from "@mui/material";
import axios from "axios";

function App() {
    const [history, setHistory] = useState([]); // Historial de respuestas
    const [responseMessage, setResponseMessage] = useState(null); // Respuesta actual

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

    return (
        <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Sidebar history={history} />
            <MainBox
                responseMessage={responseMessage}
                setResponseMessage={setResponseMessage}
            />
        </Box>
    );
}

export default App;
