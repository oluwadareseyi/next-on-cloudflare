import React from 'react';
import { cn } from '@/lib/utils';

type ParagraphTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: 'primary' | 'secondary' | 'link';
};

export function ParagraphText({
  variant = 'primary',
  className,
  ...props
}: ParagraphTextProps) {
  const colorClasses = {
    primary: 'text-[var(--color-text-primary)]',
    secondary: 'text-[var(--color-text-secondary)]',
    link: 'text-[var(--color-text-link)] font-medium hover:underline',
  };

  const colorClass = colorClasses[variant] || '';

  return (
    <p
      className={cn('font-geist text-base', colorClass, className)}
      {...props}
    />
  );
}
