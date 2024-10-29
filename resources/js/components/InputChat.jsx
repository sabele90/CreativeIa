import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, IconButton, Slider, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import axios from "axios";
export default function InputChat({ setResponseMessage }) {
    const [prompt, setPrompt] = useState("");
    const [maxLength, setMaxLength] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [errorMessage, setErrorMessage] = React.useState(null);

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
            const response = await axios.post("/api/generate-text", {
                prompt,
                maxLength,
                temperature,
            });

            setResponseMessage(response.data);
            setErrorMessage(null);
            setPrompt("");
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(
                    error.response.data.messages ||
                        error.response.data.message ||
                        "Error desconocido."
                );
            } else {
                setErrorMessage("Error al enviar el mensaje.");
            }
            setResponseMessage(null);
        }
    };
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                            "&:before, &:after": {
                                display: "none",
                            },
                        },
                    }}
                />

                <IconButton aria-label="send message" onClick={handleSend}>
                    <SendRoundedIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 1,
                    marginRight: 4,
                }}
            >
                <Typography variant="body2">
                    Longitud Máxima: {maxLength === 0 ? " " : maxLength}
                </Typography>
                <Slider
                    value={maxLength}
                    onChange={(e, newValue) => setMaxLength(newValue)}
                    min={10}
                    max={1000}
                    sx={{ width: 100, margin: 2 }}
                />

                <Typography variant="body2">
                    Creatividad : {temperature === 0 ? " " : temperature}
                </Typography>
                <Slider
                    value={temperature}
                    onChange={(e, newValue) => setTemperature(newValue)}
                    step={0.1}
                    min={0.5}
                    max={1.0}
                    sx={{ width: 100, margin: 2 }}
                />

                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </Box>
        </>
    );
}
