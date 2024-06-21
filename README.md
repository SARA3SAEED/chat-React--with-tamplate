# Demo Live: [here](https://chat-react33.netlify.app/)

# Chat Application

## Overview
This React application displays two chat windows for two users, Amy and John. Messages sent between them will appear in both chat windows. The color scheme will differentiate their messages: Amy's messages will appear in green on her screen and in gray on John's screen, while John's messages will appear in green on his screen and in gray on Amy's screen.

## Features
- **Two Chat Windows:** Separate chat windows for Amy and John.
- **Message Color Differentiation:** Different colors for sent and received messages.
- **Responsiveness:** The application is responsive and adapts to different screen sizes.
- **State Management:** Uses `useState` for state management.
- **Prop Types:** Ensures proper prop types usage.

## Instructions
1. Clone the repository and navigate to the project directory.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm start`.

## Components

### `ChatApp.jsx`
- Contains the main structure of the application.
- Renders two `ChatWindow` components for Amy and John.

### `ChatWindow.jsx`
- Displays messages and an input box for sending new messages.
- Differentiates message colors based on the user.
- **Props:**
  - `user`: The name of the user (Amy or John).
  - `messages`: The list of messages.
  - `sendMessage`: Function to send a new message.


<img src="https://drive.google.com/uc?export=view&id=1i0kNAVNWQbvGPLOW6H2HbcuR9NWIPLh1" alt="Google Drive Image">


