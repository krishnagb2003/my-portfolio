'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function TypewriterAnimation({
  text,
  className,
  as: Tag = 'h1',
  speed = 100,
  cursorClassName,
  continuous = false,
  delay = 3000,
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  speed?: number;
  cursorClassName?: string;
  continuous?: boolean;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let typingIntervalId: number;
    let restartTimeoutId: number;

    const startAnimation = () => {
      setDisplayedText('');
      setIsTypingComplete(false);
      let i = 0;
      typingIntervalId = window.setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          window.clearInterval(typingIntervalId);
          setIsTypingComplete(true);
          if (continuous) {
            restartTimeoutId = window.setTimeout(startAnimation, delay);
          }
        }
      }, speed);
    };

    startAnimation();

    return () => {
      window.clearInterval(typingIntervalId);
      window.clearTimeout(restartTimeoutId);
    };
  }, [text, speed, continuous, delay]);

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
