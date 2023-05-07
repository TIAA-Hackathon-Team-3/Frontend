import React, { useState } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    setMessages([...messages, { text: inputValue }]);
    setInputValue('');
  };

  return (
    <div className="chat-app">
      <div className="message-list">
        {messages.map((message, i) => (
          <div key={i} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
