import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-image');

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-20 pt-32 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.1),transparent)]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--secondary)/0.1),transparent)]" />
      </div>

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left column - Text content */}
        <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Krishnakumar
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
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

        {/* Right column - Image */}
        <div className="relative hidden items-center justify-center lg:flex">
          {heroImage && (
            <div className="relative h-[400px] w-[400px] xl:h-[500px] xl:w-[500px]">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="rounded-full border-4 border-primary/20 object-cover shadow-2xl shadow-primary/20"
              />
              <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
              <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#projects" aria-label="Scroll to projects">
          <div className="animate-bounce rounded-full border-2 border-border bg-card/50 p-2 backdrop-blur-sm">
            <ArrowDown className="h-6 w-6 text-foreground" />
          </div>
        </Link>
      </div>
    </section>
  );
}
