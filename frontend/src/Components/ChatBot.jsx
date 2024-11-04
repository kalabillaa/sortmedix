import React, { useState } from 'react';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; 

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); 

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Add user's message
    const newUserMessage = { text: input, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');

    try {
      // Make a request to OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant. Always respond in normal Hindi, and only respond to medical-related questions. If the question is not medical, reply with "Ask medical-related questions only". Keep responses under 40 words.',
            },
            ...messages.map((msg) => ({
              role: msg.isUser ? 'user' : 'assistant',
              content: msg.text,
            })),
            { role: 'user', content: input },
          ],
        }),
      });

      const data = await response.json();

      // Add chatbot's response
      const botResponse = data.choices[0].message.content.trim();

      const newBotMessage = {
        text: botResponse,
        isUser: false,
      };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    } catch (error) {
      console.error('Error fetching response from OpenAI', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, something went wrong.', isUser: false },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-20">
      <button
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)} // Toggle chat window
      >
        {isOpen ? '✖️' : '💬'}
      </button>

      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg p-4 mt-4">
          <div className="flex flex-col h-96">
            {/* Messages Display Area */}
            <div className="overflow-y-auto flex-grow mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`my-2 ${message.isUser ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input and Send Button */}
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border rounded-l-lg p-2 flex-grow focus:outline-none"
                placeholder="Type your message..."
                autoFocus
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-r-lg transition-colors hover:bg-blue-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
