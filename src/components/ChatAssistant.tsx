import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Riya's AI assistant. I can help you learn more about her education, skills, projects, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const knowledgeBase = {
    education: {
      keywords: ['education', 'study', 'degree', 'college', 'school', 'university'],
      response: "Riya completed her 12th grade from St. Francis Sr. Sec. School in 2022 and is currently pursuing B.Tech in Computer Science & AI from JECRC Foundation (2023-2027)."
    },
    skills: {
      keywords: ['skills', 'programming', 'devops', 'languages', 'technology', 'tools'],
      response: "Riya's technical skills include Programming (C, C++, Python), DevOps (Docker, Kubernetes, Jenkins, AWS), AI & ML (Machine Learning, Agentic AI), and Database (SQL)."
    },
    projects: {
      keywords: ['projects', 'work', 'portfolio', 'built', 'created'],
      response: "Riya has worked on several innovative projects including an AI Tutor System, DevOps Pipeline Automation, and Data Analytics Dashboard. You can see more details in the Projects section!"
    },
    experience: {
      keywords: ['experience', 'internship', 'work', 'job', 'linux world', 'zarurat'],
      response: "Riya is currently an intern at Linux World Informatics Pvt. Ltd. working on AI, ML, and DevOps. She also volunteers as an educator at Zarurat, teaching underprivileged children since 2023."
    },
    research: {
      keywords: ['research', 'papers', 'publications', 'publications'],
      response: "Riya has published research papers on optimizing ML workflows with DevOps, Agentic AI systems, and educational technology. Check the Research section for more details!"
    },
    about: {
      keywords: ['about', 'who', 'background', 'story'],
      response: "Riya is a passionate B.Tech CSE (AI) student driven by innovation and education. She believes in AI's transformative power and loves sharing knowledge to create a smarter, more compassionate world."
    },
    contact: {
      keywords: ['contact', 'reach', 'email', 'message', 'connect'],
      response: "You can reach Riya through the Contact section below, or connect with her on GitHub, LinkedIn, or WhatsApp. She's always open to discussing new opportunities and collaborations!"
    }
  };

  const generateResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerInput.includes(keyword))) {
        return data.response;
      }
    }
    
    return "I'm here to help you learn about Riya's education, skills, projects, and experience. You can also ask me about her research work or how to contact her. If you need more detailed information, feel free to check out the Contact section to reach her directly!";
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    const assistantResponse: Message = {
      id: messages.length + 2,
      text: generateResponse(inputText),
      isUser: false,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, assistantResponse]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 p-4 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-all duration-300 z-40 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat interface */}
      <div
        className={`fixed bottom-6 left-6 w-80 h-96 bg-white rounded-2xl shadow-2xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ transformOrigin: 'bottom left' }}
      >
        {/* Header */}
        <div className="bg-slate-800 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Riya's Assistant</h3>
            <p className="text-xs text-slate-300">Ask me anything!</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-slate-700 rounded transition-colors duration-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.isUser
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Riya's skills, projects..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm transition-colors duration-300"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;