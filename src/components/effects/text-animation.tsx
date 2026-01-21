'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const typingDelay = 150;
const erasingDelay = 100;
const newWordDelay = 2000;

export function TextAnimation({
  words,
  className,
  as: Tag = 'h1',
}: {
  words: string[];
  className?: string;
  as?: React.ElementType;
}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Erase character
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        // Type character
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          // Pause at the end of the word
          setTimeout(() => setIsDeleting(true), newWordDelay);
        }
      }
    };

    const typingSpeed = isDeleting ? erasingDelay : typingDelay;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <Tag className={cn(className)}>
      {text}
      <span className="animate-pulse font-light text-primary">|</span>
    </Tag>
  );
}
