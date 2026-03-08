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
    { name: "// about", href: "#about" },
    { name: "// experience", href: "#experience" },
    { name: "// projects", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-mono font-bold text-xl tracking-tight flex items-center gap-2 group">
            <span className="text-primary group-hover:animate-pulse">~</span>
            <span>Jaiden.W</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <ThemeToggle />
            <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-none border border-transparent hover:border-border">
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <Button asChild variant="default" size="sm" className="rounded-none font-mono font-medium">
              <a href="mailto:jaiden.wilson156@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact()
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-none">
                <Menu className="w-4 h-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border rounded-none bg-background">
            <nav className="flex flex-col gap-6 mt-12 font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-muted-foreground hover:text-primary transition-colors border-b border-border pb-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 mt-8">
                <Button asChild variant="outline" className="w-full justify-start rounded-none">
                   <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="default" className="w-full justify-start rounded-none">
                  <a href="mailto:jaiden.wilson156@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
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