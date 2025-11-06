export const metadata = {
  title: 'Learning Code App',
  description: 'Base Next.js + TS + Tailwind + Supabase'
};

import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

