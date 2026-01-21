import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GlassMorphismIcon } from '../icons/glass-morphism-icon';

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen w-full items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative mb-4">
            <div className="absolute -inset-2 animate-pulse rounded-full bg-primary/10 blur-2xl"></div>
            <GlassMorphismIcon className="h-24 w-24 md:h-32 md:w-32" />
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
            <Button
              asChild
              size="lg"
              className="border-2 border-primary/50 shadow-[4px_4px_0px_0px_hsl(var(--primary))] transition-shadow duration-200 hover:shadow-none"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
