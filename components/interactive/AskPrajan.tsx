"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { queryKnowledgeBase, suggestedPrompts } from "@/lib/ask-prajan-kb";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function AskPrajan() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "assistant", content: "Hi! I'm Prajan's portfolio assistant. Ask me anything about his work, skills, or experience." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = queryKnowledgeBase(text);
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: response }
      ]);
      setIsTyping(false);
    }, 400); // 400ms delay for typing indicator
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)] hover:border-cyan-500/40 shadow-xl flex items-center justify-center text-cyan-400 transition-colors"
            title="Ask about my work"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="absolute bottom-0 right-0 w-[360px] h-[460px] bg-[var(--color-bg-alt)]/95 backdrop-blur-xl rounded-xl flex flex-col shadow-2xl overflow-hidden border border-[var(--color-border-subtle)]"
          >
            {/* Header */}
            <div className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border-subtle)] px-4 py-3 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-[var(--color-text-main)] text-sm">Ask Prajan</h3>
                <p className="text-[10px] text-[var(--color-text-muted)]">Portfolio Assistant</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[var(--color-text-muted)] hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl p-3 text-sm ${
                      msg.role === "user"
                        ? "bg-[#3b82f6] text-white rounded-br-sm"
                        : "bg-[var(--color-bg-alt)] text-[var(--color-text-main)] border border-[var(--color-border-subtle)] rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] rounded-xl rounded-bl-sm p-3 text-sm flex gap-1">
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>.</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>.</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>.</motion.span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length < 3 && (
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
                {suggestedPrompts.slice(0, 3).map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="text-xs bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] px-3 py-1.5 rounded-full text-[var(--color-text-subtle)] hover:text-[#00e5ff] hover:border-[#00e5ff] transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[var(--color-text-main)] px-2"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 rounded-lg bg-[var(--color-border-subtle)] text-[var(--color-text-main)] hover:bg-[#3b82f6] disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
