'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function TypewriterAnimation({
  text,
  className,
  as: Tag = 'h1',
  speed = 100,
  cursorClassName,
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  speed?: number;
  cursorClassName?: string;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTypingComplete(false);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <Tag className={cn('relative', className)}>
      {/* Invisible placeholder to reserve space */}
      <span className="invisible">{text}</span>
      <span className="absolute inset-0">
        {displayedText}
        <span
          className={cn(
            'ml-1',
            isTypingComplete ? 'animate-[pulse_1s_ease-in-out_infinite]' : 'animate-pulse',
            cursorClassName
          )}
        >
          |
        </span>
      </span>
    </Tag>
  );
}
