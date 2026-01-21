'use client';
import { cn } from '@/lib/utils';
import React from 'react';

export function NegativeMaskEffect({
  children,
  className,
  as: Tag = 'span',
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        'animate-text-mask bg-gradient-to-r from-primary to-primary/60 bg-[length:200%_auto] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </Tag>
  );
}
