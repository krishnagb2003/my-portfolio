import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-bold font-headline">DevSpace</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          <Link
            href="#about"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Projects
          </Link>
        </nav>
        <Button asChild>
          <Link href="#contact">Contact</Link>
        </Button>
      </div>
    </header>
  );
}
