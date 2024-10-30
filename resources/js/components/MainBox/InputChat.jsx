import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, IconButton, Slider, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import axios from "axios";

export default function InputChat({ setResponseMessage, setHistory, history }) {
    const [prompt, setPrompt] = useState("");
    const [maxLength, setMaxLength] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSend = async () => {
        if (prompt.trim() === "")
            return setErrorMessage("El campo de mensaje no puede estar vacío.");
        if (maxLength === 0)
            return setErrorMessage("Selecciona una longitud máxima.");
        if (temperature === 0)
            return setErrorMessage("Selecciona un nivel de creatividad.");

        try {
            setLoading(true);
            const response = await axios.post("/api/generate-text", {
                prompt,
                maxLength,
                temperature,
            });

            const newMessage = response.data;
            setResponseMessage(newMessage);
            setHistory([...history, newMessage]);
            setErrorMessage(null);
            setPrompt("");
        } catch (error) {
            setErrorMessage(
                error.response?.data?.messages ||
                    error.response?.data?.message ||
                    "Error al enviar el mensaje."
            );
            setResponseMessage(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    margin: 4,
                }}
            >
                <TextField
                    fullWidth
                    variant="filled"
                    placeholder="Escribe tu mensaje aquí..."
                    multiline
                    maxRows={4}
                    value={prompt}
                    onChange={handlePromptChange}
                    sx={{
                        "& .MuiFilledInput-root": {
                            borderRadius: 6,
                            padding: "15px",
                            "&:before, &:after": { display: "none" },
                        },
                    }}
                />
                <IconButton aria-label="send message" onClick={handleSend}>
                    <SendRoundedIcon color="primary" />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 1,
                    marginRight: 10,
                }}
            >
                <Typography variant="body2">
                    Longitud Máxima: {maxLength}
                </Typography>
                <Slider
                    value={maxLength}
                    onChange={(e, newValue) => setMaxLength(newValue)}
                    min={10}
                    max={1000}
                    sx={{ width: 100, margin: 1 }}
                />
                <Typography variant="body2">
                    Creatividad : {temperature}
                </Typography>
                <Slider
                    value={temperature}
                    onChange={(e, newValue) => setTemperature(newValue)}
                    step={0.1}
                    min={0.5}
                    max={1.0}
                    sx={{ width: 100, margin: 1 }}
                />
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </Box>
        </>
    );
}
