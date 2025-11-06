import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../../lib/utils/cn';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'secondary' }
>;

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  const base = 'inline-flex items-center rounded-md px-4 py-2 text-sm font-medium';
  const variants = {
    default: 'bg-black text-white hover:bg-neutral-800',
    secondary: 'bg-neutral-200 text-black hover:bg-neutral-300'
  } as const;
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

