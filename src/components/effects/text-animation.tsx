'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function TextAnimation({
  words,
  className,
  as: Tag = 'h1',
  duration = 3000,
}: {
  words: string[];
  className?: string;
  as?: React.ElementType;
  duration?: number;
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
        'transition-opacity duration-500 ease-in-out',
        fade === 'in' ? 'opacity-100' : 'opacity-0'
      )}
    >
      {words[index] || words[0]}
    </Tag>
  );
}
