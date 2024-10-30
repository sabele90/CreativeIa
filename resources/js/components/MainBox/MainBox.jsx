import React from "react";
import ChatResponse from "./ChatResponse";
import InputChat from "./InputChat";

export default function MainBox({
    responseMessage,
    setResponseMessage,
    history,
    setHistory,
}) {
    return (
        <>
            <ChatResponse responseMessage={responseMessage} />
            <InputChat
                setResponseMessage={setResponseMessage}
                setHistory={setHistory}
                history={history}
            />
        </>
    );
}
