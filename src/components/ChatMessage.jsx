export function RobotMessage({msg}){
    return (
        <div className="chat-message-container-robot">
            <img src="./public/robot.png" alt="robot.png" className="chat-message-profile"/>
            <p className="chat-message-contents">{msg}</p>
        </div>
    )
}
export function UserMessage({msg}){
    return (
        <div className="chat-message-container-robot">
            <img src="./public/user.png" alt="user.png" className="chat-message-profile"/>
            <p className="chat-message-contents">{msg}</p>
        </div>
    )
}