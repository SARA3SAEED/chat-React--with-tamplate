import  { useState } from 'react';
import ChatWindow from './ChatWindow';

const ChatApp = () => {
  const [prevMessagesArray, setMessages] = useState([]);

  const handleSendMessageToArray = (user, text) => {
    const newMessageArray = { user, text };
    setMessages((prevMessagesArray) => [...prevMessagesArray, newMessageArray]);
  };

  return (
    <div className="chat-app flex rounded">
      <ChatWindow user="Amy" MessagesArray={prevMessagesArray} onSendMessage={handleSendMessageToArray} />
      <ChatWindow user="John" MessagesArray={prevMessagesArray} onSendMessage={handleSendMessageToArray} />
    </div>
  );
};

export default ChatApp;
