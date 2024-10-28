import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox";
import { Box } from "@mui/material";
import axios from "axios";
import "../css/app.css";
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
            setHistory((prevHistory) => [
                ...prevHistory,
                { generated_text: responseMessage },
            ]);
        }
    }, [responseMessage]);

    const handleSelectHistory = (selectedMessage) => {
        setResponseMessage(selectedMessage);
    };

    return (
        <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Sidebar history={history} selectHistory={handleSelectHistory} />

            <MainBox
                responseMessage={responseMessage}
                setResponseMessage={setResponseMessage}
            />
        </Box>
    );
}

export default App;
