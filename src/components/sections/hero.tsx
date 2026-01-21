import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Code } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative mb-4">
            <div className="absolute -inset-2 animate-pulse rounded-full bg-primary/20 blur-2xl"></div>
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 md:h-32 md:w-32">
              <Code className="h-12 w-12 text-primary md:h-16 md:w-16" />
            </div>
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Alex Doe
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Final Year Engineering Student & Web Developer specializing in
            React, TypeScript, and Java. Transforming ideas into modern,
            scalable web applications.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#projects" aria-label="Scroll to projects">
          <div className="animate-bounce rounded-full bg-card/50 p-2 backdrop-blur-sm ring-1 ring-border">
            <ArrowDown className="h-6 w-6 text-foreground" />
          </div>
        </Link>
      </div>
    </section>
  );
}
