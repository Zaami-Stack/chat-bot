import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import { useState } from "react";
function App() {

  const [chatMessages, setChatMessages] = useState([{
    id : crypto.randomUUID(),
    message : "Hello, how can i assist you today ?",
    sender:'robot'
  }]);
  return (
    <div className="app">
      <ChatInput 
        chatMessages={chatMessages} 
        setChatMessages={setChatMessages} 
      />

      <ChatMessage
        chatMessages={chatMessages}
        setChatMessage={setChatMessages}
      />
    </div>
  );
}

export default App;
