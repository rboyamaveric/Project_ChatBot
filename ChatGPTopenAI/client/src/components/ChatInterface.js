import React, { useState } from 'react';
import axios from 'axios';

function ChatInterface() {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    // Adding user message to conversation
    const newConversation = [...conversation, { sender: 'User', message: userInput }];
    setConversation(newConversation);

    try {
      // Sending the user input to the backend
      const response = await axios.post('http://localhost:3000/api/chat', { message: userInput });
      // Adding AI response to conversation
      setConversation(conversation => [...conversation, { sender: 'AI', message: response.data.message }]);
    } catch (error) {
      console.error('Error while fetching response from AI:', error);
    }

    // Clearing the input field
    setUserInput('');
  };

  return (
    <div>
      <div>
        {conversation.map((chat, index) => (
          <p key={index}><strong>{chat.sender}:</strong> {chat.message}</p>
        ))}
      </div>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default ChatInterface;
