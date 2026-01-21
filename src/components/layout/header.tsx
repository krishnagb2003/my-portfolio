import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-bold font-headline">DevSpace</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#about"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            About
          </Link>
        </nav>
        <Button asChild className="border-2 border-foreground/80 shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-none transition-shadow duration-200">
          <Link href="#contact">Contact</Link>
        </Button>
      </div>
    </header>
  );
}
