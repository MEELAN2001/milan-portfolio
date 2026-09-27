'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { site } from '@/data/site';

const GREETING = `Hi! I'm ${site.shortName}'s site assistant — ask me about his experience, projects, or availability for freelance work.`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  const { messages, sendMessage, status } = useChat();

  const busy = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    sendMessage({ text });
    setInput('');
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
              <div
                key={message.id}
                className={`chat-bubble chat-bubble-${message.role}`}
              >
                {message.parts
                  .filter((part) => part.type === 'text')
                  .map((part, i) => (
                    <span key={i}>{part.text}</span>
                  ))}
              </div>
            ))}

            {busy && (
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
              disabled={busy}
            />
            <button type="submit" className="chat-send-btn" disabled={busy || !input.trim()} aria-label="Send message">
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
