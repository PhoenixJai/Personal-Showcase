import { Link } from "wouter";
import { Github, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Content", href: "#marketing" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-xl tracking-tight flex items-center gap-2 group" aria-label="Home" data-testid="link-home">
            <span className="text-primary font-mono group-hover:animate-pulse" aria-hidden="true">~</span>
            <span>Jaiden.W</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <div className="flex gap-6 font-mono text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <ThemeToggle />
            <a 
              href="https://github.com/PhoenixJai" 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-none border border-transparent hover:border-border focus:ring-2 focus:ring-primary outline-none"
              aria-label="GitHub Profile"
              data-testid="link-github-nav"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <Button asChild variant="default" size="sm" className="rounded-none font-mono font-medium">
              <a href="mailto:jaiden.wilson156@gmail.com" data-testid="link-contact-nav">
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                Contact
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-none" aria-label="Open mobile menu" data-testid="btn-mobile-menu">
                <Menu className="w-4 h-4" aria-hidden="true" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border rounded-none bg-background">
            <nav className="flex flex-col gap-6 mt-12 font-mono" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors border-b border-border pb-2 focus:text-primary outline-none"
                  data-testid={`nav-link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 mt-8">
                <Button asChild variant="outline" className="w-full justify-start rounded-none">
                   <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" data-testid="link-github-mobile">
                    <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="default" className="w-full justify-start rounded-none">
                  <a href="mailto:jaiden.wilson156@gmail.com" data-testid="link-contact-mobile">
                    <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                    Email
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}