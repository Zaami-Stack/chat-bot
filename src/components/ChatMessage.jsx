import userImg from "../../public/user.png";
import robotImg from "../../public/robot.png";
import './ChatMessage.css'

function ChatMessage({ chatMessages }) {
  return (
    <>
      {chatMessages.map((message) => {
        return (
          <div className={message.sender === 'user' ? 'chat-message-user' : 'chat-message-robot'} key={message.id}>
            {message.sender === "robot" && (
              <img src={robotImg} className="sender-picture" />
            )}
            <p >{message.message}</p>
            {message.sender === "user" && (
              <img src={userImg} className='sender-picture'/>
            )}
          </div>
        );
      })}
    </>
  );
}

export default ChatMessage;
