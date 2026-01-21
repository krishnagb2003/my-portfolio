'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

class Scrambler {
    private el: HTMLElement;
    private chars: string;
    private resolve: () => void = () => {};
    private frameRequest: number = 0;
    private frame: number = 0;
    private queue: { from: string; to: string; start: number; end: number, char?: string }[] = [];
  
    constructor(el: HTMLElement, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890') {
      this.el = el;
      this.chars = chars;
      this.update = this.update.bind(this);
    }
  
    setText(newText: string) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise<void>((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  
    private update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="text-primary/50">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  
    private randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

interface DeparturesBoardAnimationProps {
  words: string[];
  className?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const DeparturesBoardAnimation: React.FC<DeparturesBoardAnimationProps> = ({
  words,
  className,
  as: Tag = 'h3',
  children,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const fx = useRef<Scrambler | null>(null);

  useEffect(() => {
    if (textRef.current) {
        fx.current = new Scrambler(textRef.current);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [words.length]);
  
  useEffect(() => {
    fx.current?.setText(words[wordIndex]);
  }, [wordIndex, words]);


  return (
    <Tag className={cn('flex items-center justify-center gap-4 font-mono', className)}>
      <span ref={textRef} />
      {children}
    </Tag>
  );
};
