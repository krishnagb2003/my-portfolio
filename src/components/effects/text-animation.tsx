'use client';

import { useState, useEffect } from 'react';

const words = ['KRISHNAKUMAR', 'DEVELOPER PORTFOLIO'];
const typingDelay = 150;
const erasingDelay = 100;
const newWordDelay = 2000;

export function TextAnimation() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [text, isDeleting, wordIndex]);

  return (
    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
      {text}
      <span className="animate-pulse font-light text-primary">|</span>
    </h1>
  );
}
