import React from 'react';
import ChatInterface from './components/ChatInterface';
import PDFUploader from './components/PDFUploader';


function App() {
  return (
    <div>
      <h1>AI Chatbot</h1>
      <PDFUploader />
      <ChatInterface />
    </div>
  );
}

export default App;
