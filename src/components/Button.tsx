import type { ButtonHTMLAttributes, ReactNode } from 'react';

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => (
  <button className="rounded bg-blue-600 px-4 py-2 text-white" {...props}>
    {children}
  </button>
);
