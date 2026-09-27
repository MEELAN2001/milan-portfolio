'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { site } from '@/data/site';
import { GREETING, getBotReply } from '@/lib/chatbot';

let nextId = 1;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;

    setMessages((prev) => [...prev, { id: nextId++, role: 'user', text }]);
    setInput('');
    setTyping(true);

    // Small delay makes the reply feel conversational rather than instant.
    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages((prev) => [...prev, { id: nextId++, role: 'assistant', text: reply }]);
      setTyping(false);
    }, 450);
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label={`Chat with ${site.shortName}'s assistant`}>
          <div className="chat-panel-header">
            <span>{site.shortName}&apos;s Assistant</span>
            <button
              type="button"
              className="chat-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages" ref={listRef}>
            <div className="chat-bubble chat-bubble-assistant">{GREETING}</div>

            {messages.map((message) => (
              <div key={message.id} className={`chat-bubble chat-bubble-${message.role}`}>
                {message.text}
              </div>
            ))}

            {typing && (
              <div className="chat-bubble chat-bubble-assistant chat-bubble-loading">
                <Loader2 size={14} className="chat-spin" />
              </div>
            )}
          </div>

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Milan's work..."
              className="chat-input"
              disabled={typing}
            />
            <button type="submit" className="chat-send-btn" disabled={typing || !input.trim()} aria-label="Send message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-toggle-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat with assistant'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
