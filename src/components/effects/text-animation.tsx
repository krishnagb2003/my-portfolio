'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function TextAnimation({
  words,
  className,
  as: Tag = 'h1',
  duration = 3000,
  children,
}: {
  words: string[];
  className?: string;
  as?: React.ElementType;
  duration?: number;
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState('in');

  useEffect(() => {
    if (!words || words.length < 2) return;
    const interval = setInterval(() => {
      setFade('out');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade('in');
      }, 500); // fade out duration
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  if (!words || words.length === 0) return null;

  return (
    <Tag
      className={cn(
        className,
        'flex items-center justify-center gap-4',
        'transition-opacity duration-500 ease-in-out',
        fade === 'in' ? 'opacity-100' : 'opacity-0'
      )}
    >
      <span>{words[index] || words[0]}</span>
      {children}
    </Tag>
  );
}
