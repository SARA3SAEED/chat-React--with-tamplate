import { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatWindow.css';

const ChatWindow = ({ user, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      onSendMessage(user, newMessage);
      setNewMessage('');
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <button id="login" className="hover:bg-blue-400 rounded-md p-1">
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="4" stroke="#ffffff" strokeWidth="1.5"></circle>
            <path d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
          </svg>
        </button>
        <span> <strong>{user}</strong> Chat App</span>
        <div className="relative inline-block text-left">
          <button id="setting" className="hover:bg-blue-400 rounded-md p-1" onClick={toggleDropdown}>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.1395 12.0002C14.1395 13.1048 13.2664 14.0002 12.1895 14.0002C11.1125 14.0002 10.2395 13.1048 10.2395 12.0002C10.2395 10.8957 11.1125 10.0002 12.1895 10.0002C13.2664 10.0002 14.1395 10.8957 14.1395 12.0002Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.57381 18.1003L5.12169 12.8133C4.79277 12.2907 4.79277 11.6189 5.12169 11.0963L7.55821 5.89229C7.93118 5.32445 8.55898 4.98876 9.22644 5.00029H12.1895H15.1525C15.8199 4.98876 16.4477 5.32445 16.8207 5.89229L19.2524 11.0923C19.5813 11.6149 19.5813 12.2867 19.2524 12.8093L16.8051 18.1003C16.4324 18.674 15.8002 19.0133 15.1281 19.0003H9.24984C8.5781 19.013 7.94636 18.6737 7.57381 18.1003Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div id="dropdown-content" className={`${dropdownOpen ? '' : 'hidden'} absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg p-2`}>
            <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H12M15 21H12M12 21V18M12 18H19C20.1046 18 21 17.1046 21 16V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V16C3 17.1046 3.89543 18 5 18H12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>Appearance
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">
              <svg width="20px" height="20px" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18403 20.2495 6.93774 20.3915 6.76039 20.3615C6.60632 20.3354 6.4733 20.2388 6.40084 20.1002C6.31744 19.9408 6.37647 19.6627 6.49444 19.1064L7.43423 14.6757C7.46916 14.5112 7.48663 14.429 7.47828 14.3503C7.47099 14.2807 7.44908 14.2134 7.41407 14.1527C7.37457 14.0842 7.31208 14.0279 7.18733 13.9154L3.8226 10.8832C3.4002 10.5025 3.18899 10.3122 3.16277 10.1342C3.13998 9.97956 3.19075 9.82316 3.30002 9.71147C3.42592 9.58288 3.70867 9.55304 4.27421 9.49336L8.77853 9.01795C8.94579 9.00031 9.02941 8.99149 9.10169 8.95929C9.16556 8.93081 9.22287 8.8892 9.26965 8.83718C9.32266 8.77839 9.35683 8.70162 9.42533 8.54808L11.2691 4.41115Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>Notifications
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16.5L10.5 13L7 9.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M13 16.5L16.5 13L13 9.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>Keyboard shortcuts
            </a>
          </div>
        </div>
      </div>

      <div id="messageList" className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`my-2 p-2 rounded-md ${message.user === user ? 'bg-blue-300 self-end' : 'bg-gray-300 self-start'}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div id="messageInput" className="bg-gray-200 p-4 flex items-center">
        <input
          id="message"
          type="text"
          className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Type a message"
          value={newMessage}
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
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired
};

export default ChatWindow;
