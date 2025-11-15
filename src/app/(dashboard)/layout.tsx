'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    setSidebarOpen(media.matches);
  }, []);

  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] bg-background text-foreground">
      <header className="flex items-center gap-3 border-b px-4 py-3">
        <button
          aria-label="Toggle sidebar"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border"
          onClick={() => setSidebarOpen((v) => !v)}
        >
          ☰
        </button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          <input
            aria-label="Search"
            placeholder="Search..."
            className="hidden sm:block h-9 rounded border bg-transparent px-3 text-sm"
          />
          <button
            aria-label="Account"
            className="inline-flex h-9 w-9 items-center justify-center rounded border"
          >
            👤
          </button>
          <SettingsMenu />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
        <aside
          className={
            'border-r p-3 md:block ' + (sidebarOpen ? 'block' : 'hidden')
          }
        >
          <nav className="space-y-1">
            <Link href="/" className="block rounded px-2 py-1 hover:bg-accent">
              Home
            </Link>
            <button
              className="w-full text-left rounded px-2 py-1 hover:bg-accent"
              onClick={() => setSidebarOpen(false)}
            >
              Close
            </button>
          </nav>
        </aside>

        <main className="p-4">{children}</main>
      </div>

      <footer className="border-t px-4 py-3 text-xs text-muted-foreground">
        <div className="hidden sm:flex items-center justify-between">
          <span>© {new Date().getFullYear()} Learning Code</span>
          <nav className="flex gap-3">
            <Link href="/">Home</Link>
            <a href="#" aria-disabled>
              Docs
            </a>
          </nav>
        </div>
        <div className="sm:hidden text-center">
          © {new Date().getFullYear()} Learning Code
        </div>
      </footer>
    </div>
  );
}

function SettingsMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center justify-center rounded border px-2 text-sm"
      >
        Settings ⚙
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-40 rounded border bg-background p-1 shadow"
        >
          <ThemeToggle />
        </div>
      )}
    </div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      role="menuitemcheckbox"
      aria-checked={isDark}
      className="flex w-full items-center justify-between rounded px-2 py-1 text-sm hover:bg-accent"
      onClick={() => setIsDark((v) => !v)}
    >
      Dark mode
      <span aria-hidden>{isDark ? '🌙' : '☀️'}</span>
    </button>
  );
}
