import React from 'react';
import { cn } from '@/lib/utils';

type HeaderTextProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: 'h1' | 'h2' | 'h3';
};

export function HeaderText({
  variant = 'h1',
  className,
  ...props
}: HeaderTextProps) {
  const Tag = variant;
  const baseClasses = {
    h1: 'text-6xl font-medium leading-tight',
    h2: 'text-4xl font-medium leading-tight',
    h3: 'text-2xl font-medium leading-tight',
  };
  const base = baseClasses[variant] || '';

  return (
    <Tag className={cn(base, 'font-geist text-center', className)} {...props} />
  );
}
