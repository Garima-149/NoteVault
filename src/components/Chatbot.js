// src/components/Chatbot.js
import React, { useState } from 'react';
import './Rating.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(false);

  const faqData = {
    "What is your return policy?": "Our return policy is 30 days with a receipt.",
    "What are your hours of operation?": "We are open from 9am to 9pm, Monday to Saturday.",
    // Add more FAQs here
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      const botResponse = faqData[input.trim()] || "Hello,How can I help you?";

      setMessages([...messages, userMessage, { text: botResponse, sender: 'bot' }]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div>
      <div className="chatbot-icon" onClick={() => setVisible(!visible)}>
        💬
      </div>
      {visible && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h4>FAQ Chatbot</h4>
            <button onClick={() => setVisible(false)}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
