import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Terminal from '@/components/interactive/Terminal';

export const metadata = {
  title: 'Terminal | Prajan',
  description: 'Interactive terminal portfolio interface',
};

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex flex-col">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-[var(--color-border-subtle)] glass-panel z-10 sticky top-0">
        <Link 
          href="/"
          className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[#00e5ff] transition-colors font-[family-name:var(--font-mono)] text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="font-[family-name:var(--font-heading)] font-bold text-xl tracking-tight gradient-text">
          &lt;PSK /&gt;
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col p-4 md:p-6 lg:p-8 h-[calc(100vh-4rem)]">
        <Terminal fullPage={true} />
      </main>
    </div>
  );
}
