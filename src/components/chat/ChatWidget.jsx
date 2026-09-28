'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { site } from '@/data/site';
import { GREETING, getBotReply } from '@/lib/chatbot';
import TiltCard from '@/components/motion/TiltCard';

let nextId = 1;
const THINK_DELAY_MS = 600;
const WORD_DELAY_MS = 60;

const panelVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.9, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 28,
      mass: 0.8,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 14,
    scale: 0.94,
    filter: 'blur(4px)',
    transition: { duration: 0.16, ease: [0.4, 0, 1, 1] },
  },
};

const panelChildVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } },
};

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
            style={{ transformOrigin: 'bottom right' }}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="chat-panel-header" variants={panelChildVariants}>
              <div className="chat-header-info">
                <span className={`chat-orb ${input.trim() ? 'chat-orb-active' : ''}`} aria-hidden="true" />
                <div>
                  <div className="chat-header-name">{site.shortName}&apos;s Assistant</div>
                  <div className="chat-header-sub">
                    {input.trim() ? 'Listening…' : 'Ask about work, projects, or availability'}
                  </div>
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
            </motion.div>

            <motion.div className="chat-messages" ref={listRef} variants={panelChildVariants}>
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
            </motion.div>

            <motion.form className="chat-input-row" onSubmit={handleSubmit} variants={panelChildVariants}>
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
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="chat-toggle-shell">
        {!open && <span className="chat-toggle-glow" aria-hidden="true" />}
        <TiltCard className="chat-toggle-wrap" max={14} glare>
          <motion.button
            type="button"
            className="chat-toggle-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close chat' : 'Open chat with assistant'}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.86, rotate: -8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                transition={{ duration: 0.16 }}
                style={{ display: 'inline-flex' }}
              >
                {open ? <X size={22} /> : <MessageCircle size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </TiltCard>
      </div>
    </div>
  );
}
