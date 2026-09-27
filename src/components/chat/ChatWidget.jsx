'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { site } from '@/data/site';
import { GREETING, getBotReply } from '@/lib/chatbot';

let nextId = 1;
const THINK_DELAY_MS = 600;
const WORD_DELAY_MS = 60;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | thinking | typing
  const [typingId, setTypingId] = useState(null);
  const listRef = useRef(null);
  const timerRef = useRef(null);

  const busy = status !== 'idle';

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, status, open]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function revealWords(id, words, i) {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, text: words.slice(0, i).join(' ') } : m)));

    if (i >= words.length) {
      setStatus('idle');
      setTypingId(null);
      return;
    }
    timerRef.current = setTimeout(() => revealWords(id, words, i + 1), WORD_DELAY_MS);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;

    setMessages((prev) => [...prev, { id: nextId++, role: 'user', text }]);
    setInput('');
    setStatus('thinking');

    timerRef.current = setTimeout(() => {
      const words = getBotReply(text).split(' ');
      const id = nextId++;
      setMessages((prev) => [...prev, { id, role: 'assistant', text: '' }]);
      setStatus('typing');
      setTypingId(id);
      revealWords(id, words, 0);
    }, THINK_DELAY_MS);
  }

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-panel"
            role="dialog"
            aria-label={`Chat with ${site.shortName}'s assistant`}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="chat-panel-header">
              <div className="chat-header-info">
                <span className="chat-status-dot" aria-hidden="true" />
                <div>
                  <div className="chat-header-name">{site.shortName}&apos;s Assistant</div>
                  <div className="chat-header-sub">Ask about work, projects, or availability</div>
                </div>
              </div>
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
                <motion.div
                  key={message.id}
                  className={`chat-bubble chat-bubble-${message.role}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {message.text}
                  {status === 'typing' && message.id === typingId && (
                    <span className="chat-caret" aria-hidden="true" />
                  )}
                </motion.div>
              ))}

              {status === 'thinking' && (
                <div className="chat-bubble chat-bubble-assistant chat-bubble-thinking">
                  <span className="chat-dot" />
                  <span className="chat-dot" />
                  <span className="chat-dot" />
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
          </motion.div>
        )}
      </AnimatePresence>

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
