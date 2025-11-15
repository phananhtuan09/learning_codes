import '../styles/globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/shared/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Learning Code App',
  description: 'Base Next.js + TS + Tailwind + Supabase',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
