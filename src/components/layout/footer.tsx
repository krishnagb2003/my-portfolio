import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { RedditIcon } from '@/components/icons/reddit-icon';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t-2 border-border py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Krishnakumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/krishnagb2003"
            aria-label="GitHub"
            prefetch={false}
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/krishnakumar-bhadrashetti-b57538382"
            aria-label="LinkedIn"
            prefetch={false}
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/krishna.g.b"
            aria-label="Instagram"
            prefetch={false}
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.reddit.com/user/unEmployeee"
            aria-label="Reddit"
            prefetch={false}
            className="transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RedditIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
