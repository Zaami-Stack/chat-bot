import "./ChatInput.css";
import { useState } from "react";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveMessage(event) {
    setInputText(event.target.value);
  }

  function handleEnterKey(event) {
    if (event.key === "Enter") {
      clickHandle();
    }
  }

  function clickHandle() {
    if (inputText === '' ) {
        return
    }
    setChatMessages([
      ...chatMessages,
      {
        id: crypto.randomUUID(),
        message: inputText,
        sender: "user",
      },
    ]);
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        onChange={saveMessage}
        onKeyDown={handleEnterKey}
        placeholder="Ask Chat Bot"
        value={inputText}
        type="text"
        className="chat-input"
      />
      <button onClick={clickHandle}>Send</button>
    </div>
  );
}

export default ChatInput;
