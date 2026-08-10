"use client";

import React, { useState, useRef, useEffect } from "react";
import { executeCommand, TerminalResponse } from "@/lib/terminal-commands";
import { Maximize2, Minus, X, Terminal as TerminalIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OutputLine {
  id: string;
  text: string;
  isError?: boolean;
  isCommand?: boolean;
}

interface TerminalProps {
  fullPage?: boolean;
}

export default function Terminal({ fullPage = false }: TerminalProps) {
  const [isOpen, setIsOpen] = useState(fullPage);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<OutputLine[]>([
    { id: "init-1", text: "Welcome to Prajan's terminal. Type \"help\" for commands." },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
      inputRef.current?.focus();
    }
  }, [output, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    
    if (trimmed) {
      setHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
    }

    const newOutputs: OutputLine[] = [
      ...output,
      { id: Date.now().toString(), text: `$ ${cmd}`, isCommand: true },
    ];

    if (trimmed.toLowerCase() === "clear") {
      setOutput([]);
      setInput("");
      return;
    }

    const response: TerminalResponse = executeCommand(trimmed);
    
    response.output.forEach((line, i) => {
      newOutputs.push({
        id: `${Date.now()}-${i}`,
        text: line,
        isError: response.isError,
      });
    });

    setOutput(newOutputs);
    setInput("");
  };

  return (
    <section id="terminal" className={fullPage ? "w-full h-full flex flex-col" : "container-main py-12"}>
      {!isOpen ? (
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass-panel-hover flex items-center gap-3 px-6 py-4 rounded-xl mx-auto"
        >
          <TerminalIcon className="w-5 h-5 text-[#00e5ff]" />
          <span className="font-[family-name:var(--font-mono)] text-sm">Open Interactive Terminal</span>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mx-auto rounded-xl overflow-hidden border border-[var(--color-border-subtle)] shadow-2xl bg-[#0a0a0c] ${fullPage ? 'w-full max-w-5xl flex-grow flex flex-col' : 'max-w-3xl'}`}
        >
          {/* Header */}
          <div className="bg-[#1a1b23] px-4 py-2 flex items-center justify-between border-b border-[#2a2b33]">
            <div className="flex gap-2">
              <div className={`w-3 h-3 rounded-full bg-red-500 ${fullPage ? '' : 'cursor-pointer'}`} onClick={() => !fullPage && setIsOpen(false)} />
              <div className={`w-3 h-3 rounded-full bg-yellow-500 ${fullPage ? '' : 'cursor-pointer'}`} onClick={() => !fullPage && setIsOpen(false)} />
              <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" />
            </div>
            <div className="text-xs text-[#94a3b8] font-[family-name:var(--font-mono)] font-semibold">
              PSK Terminal
            </div>
            <div className="flex gap-2">
              {!fullPage && (
                <button onClick={() => setIsOpen(false)} className="text-[#94a3b8] hover:text-white transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Body */}
          <div ref={containerRef} className={`p-4 ${fullPage ? 'flex-grow h-[calc(100vh-10rem)]' : 'h-[400px]'} overflow-y-auto font-[family-name:var(--font-mono)] text-sm`} onClick={() => inputRef.current?.focus()}>
            {output.map((line) => (
              <div
                key={line.id}
                className={`mb-1 ${line.isCommand ? 'text-[#00e5ff]' : line.isError ? 'text-red-400' : 'text-[#f8fafc]'}`}
              >
                {line.text === "" ? "\u00A0" : line.text}
              </div>
            ))}
            <div className="flex items-center mt-2 text-[#00e5ff]">
              <span className="mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none flex-grow text-[#f8fafc]"
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
