import { ArrowRight } from 'lucide-react';

export function ScrollingBanner() {
  const content = (
    <div className="flex items-center gap-8 px-4">
      <span className="font-headline text-2xl font-bold md:text-3xl">
        Let&apos;s Work Together
      </span>
      <ArrowRight className="h-8 w-8 text-primary" />
      <span className="font-headline text-2xl font-bold md:text-3xl">
        krishnagbhadrashetti@gmail.com
      </span>
      <ArrowRight className="h-8 w-8 text-primary" />
    </div>
  );

  return (
    <section className="w-full border-y-2 border-border bg-background py-8">
      <div className="relative flex overflow-x-hidden whitespace-nowrap">
        <div className="animate-marquee flex">
          {content}
          {content}
          {content}
          {content}
          {content}
        </div>
        <div className="animate-marquee2 absolute top-0 flex">
          {content}
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    </section>
  );
}
