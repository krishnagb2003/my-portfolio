import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Side: Mobile Menu Trigger and Desktop Menu Dropdown */}
        <div className="flex items-center">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 p-6 text-lg font-medium">
                  <SheetClose asChild>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <span>Portfolio</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#about"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#live"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Live
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#skills"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Skills
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#projects"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Projects
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
            <Menubar className="rounded-none border-none bg-transparent shadow-none">
              <MenubarMenu>
                <MenubarTrigger>
                  <Menu className="h-6 w-6" />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem asChild>
                    <Link href="#about">About</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="#live">Live</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="#skills">Skills</Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                    <Link href="#projects">Projects</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </nav>
        </div>

        {/* Centered Title */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-bold font-headline">Portfolio</span>
          </Link>
        </div>

        {/* Right Side: Contact Button */}
        <div className="flex items-center">
          <Button asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
