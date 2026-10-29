import './ChatInput.css'

function ChatInput () {
    return (
        <div className='chat-input-container'>
            <input placeholder='Ask Chat Bot' type="text" className='chat-input' />
            <button>Send</button>
        </div>
    );
}

export default ChatInput