import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TextAnimation } from '@/components/effects/text-animation';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-image');

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-20 text-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="animate-blob-move absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.2),transparent)]" />
        <div className="animate-blob-move absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.15),transparent)] [animation-delay:-2s]" />
      </div>

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left column - Text content */}
        <div className="flex flex-col items-center space-y-6 text-center lg:col-span-2">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <TextAnimation />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <p className="text-lg font-medium text-muted-foreground md:text-xl">
              Java | Data Systems | Web Apps | Cloud Computing
            </p>
          </div>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            A software engineering student focused on enterprise-level
            scalability. By leveraging Big Data and AWS Cloud environments, I
            create systems designed for high-stakes performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="relative hidden items-center justify-center lg:flex animate-in fade-in zoom-in-95 duration-500 delay-500">
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
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <Link
          href="#about"
          aria-label="Scroll to next section"
          className="transition-colors hover:text-primary"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
