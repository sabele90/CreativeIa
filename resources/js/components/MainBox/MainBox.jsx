import React, { useState } from "react";
import ChatResponse from "./ChatResponse";
import InputChat from "./InputChat";

export default function MainBox({ responseMessage, setResponseMessage }) {
    return (
        <>
            <ChatResponse responseMessage={responseMessage} />
            <InputChat setResponseMessage={setResponseMessage} />
        </>
    );
}
