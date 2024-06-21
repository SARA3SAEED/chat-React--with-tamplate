import  { useState } from 'react';
import ChatWindow from './ChatWindow';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (user, text) => {
    const newMessage = { user, text };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="chat-app flex">
      <ChatWindow user="Amy" messages={messages} onSendMessage={handleSendMessage} />
      <ChatWindow user="John" messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
