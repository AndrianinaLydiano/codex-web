import type { ButtonHTMLAttributes } from 'react';
import { Button } from './Button';

export const CopyButton = ({
  text,
  ...props
}: { text: string } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
  };
  return (
    <Button onClick={handleCopy} {...props}>
      Copier
    </Button>
  );
};
