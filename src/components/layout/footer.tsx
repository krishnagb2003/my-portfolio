import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border/50 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Alex Doe. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="GitHub" prefetch={false} className="transition-colors hover:text-primary">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" prefetch={false} className="transition-colors hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter" prefetch={false} className="transition-colors hover:text-primary">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
