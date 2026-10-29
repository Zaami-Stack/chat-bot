import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
function App() {
  const chatMessages = [
    {
      id: crypto.randomUUID(),
      message: "hello",
      sender: "user",
    },
    {
      id: crypto.randomUUID(),
      message: "Hello! How can I help you?",
      sender: "robot",
    },
    {
      id: crypto.randomUUID(),
      message: "hehehehehe",
      sender: "user",
    }
  ];
  return (
    <div className="app">
      <ChatInput />
      <ChatMessage chatMessages={chatMessages} />
    </div>
  );
}

export default App;
