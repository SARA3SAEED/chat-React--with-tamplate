import { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatWindow.css';

const ChatWindow = ({ user, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(user, newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-window">
      <h2>{user} Chat Window</h2>
      <div className="messages">
        {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user === user ? 'own' : 'other'}`}>
            <span>{msg.text}</span></div> ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

ChatWindow.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

export default ChatWindow;





