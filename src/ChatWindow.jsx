import { useState } from 'react';
import PropTypes from 'prop-types';

const ChatWindow = ({ user, MessagesArray, onSendMessage }) => {
  const [newMessageText, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessageText.trim() !== '') {
      onSendMessage(user, newMessageText);
      setNewMessage('');}};


  return (
    <div className="bg-gray-100 h-96 rounded flex flex-col max-w-lg mx-auto m-9">

      <div className="bg-blue-500 rounded p-4 text-white flex justify-between items-center">
        <button id="login" className="hover:bg-blue-400 rounded-md p-1">
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="4" stroke="#ffffff" strokeWidth="1.5"></circle>
            <path d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
          </svg>
        </button>
        <span> <small>{user}</small> Chat App</span>
      </div>
      <div id="messageList" 
      className="flex-grow overflow-y-auto p-4" 
      style={{  backgroundImage: `url(${user === 'Amy' ? 'https://images.pexels.com/photos/20818845/pexels-photo-20818845/free-photo-of-creased-black-paper.jpeg?auto=compress&cs=tinysrgb&w=600' : 'https://images.pexels.com/photos/20818857/pexels-photo-20818857/free-photo-of-crumpled-checkered-sheet-of-paper.jpeg?auto=compress&cs=tinysrgb&w=600'})` }}>
        {MessagesArray.map((message, index) => (
           <div key={index} className={`flex ${message.user === user ? 'justify-start' : 'justify-end'}`}>
             <div className={`message-container my-1 p-2 rounded-md ${message.user === user ? 'bg-blue-300 self-end' : 'bg-gray-300 self-start'}`}>
              <small className='text-xs font-thin'>{message.user}</small>
              <div>{message.text}</div>
         </div>
      </div>
      ))}
      </div>


      <div id="messageInput" className="bg-gray-200 rounded p-4 flex items-center">
        <input
          id="message"
          type="text"
          className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Type a message"
          value={newMessageText}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <button
          id="send"
          className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

ChatWindow.propTypes = {
  user: PropTypes.string.isRequired,
  MessagesArray: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired
};

export default ChatWindow;
