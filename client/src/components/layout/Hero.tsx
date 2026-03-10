import { ArrowRight, Download, FileText, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshot from "@assets/headshot_Jaiden-Wilson_sq_1772998906594.jpg";

export function Hero() {
  return (
    <section 
      aria-label="Introduction" 
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-border"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_350px] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          <div className="space-y-8">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-card text-sm font-mono font-medium hard-shadow-sm"
              role="status"
              aria-label="Currently available for hire"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Hire
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
                Jaiden Wilson
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-mono">
                Full-Stack Developer & <br className="hidden md:block" />
                Electrical Engineering Student
              </h2>
            </div>
            
            <p className="text-lg text-foreground max-w-2xl leading-relaxed border-l-4 border-primary pl-4">
              Bridging the gap between physical hardware systems and elegant web experiences. A CompTIA A+ certified technician combining IT problem-solving with modern MERN-stack development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 font-mono">
              <Button size="lg" className="rounded-none h-12 px-8 hard-shadow bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#projects" data-testid="link-view-projects">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none h-12 px-8 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors" asChild>
                <a href="mailto:jaiden.wilson156@gmail.com" data-testid="link-contact-me">
                  <FileText className="mr-2 w-4 h-4" aria-hidden="true" />
                  Contact Me
                </a>
              </Button>
            </div>
            
            {/* Quick Stats for Recruiters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border mt-8" aria-label="Quick professional statistics">
               <div>
                  <div className="text-2xl font-bold font-mono text-primary" data-testid="text-stat-years">2+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Years IT Exp</div>
               </div>
               <div>
                  <div className="text-2xl font-bold font-mono text-primary" data-testid="text-stat-projects">4</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Total Projects</div>
               </div>
               <div className="col-span-2 sm:col-span-2 flex items-center gap-3 border-l border-border pl-4">
                  <div className="flex flex-col gap-2">
                     <span className="flex items-center gap-1 text-xs font-mono font-bold"><Code2 className="w-3 h-3" aria-hidden="true"/> MERN Stack</span>
                     <span className="flex items-center gap-1 text-xs font-mono font-bold"><Cpu className="w-3 h-3" aria-hidden="true"/> CompTIA A+</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-[400px] relative order-first lg:order-last group">
            <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 border border-border transition-transform group-hover:translate-x-4 group-hover:translate-y-4" aria-hidden="true"></div>
            <div className="absolute inset-0 border-2 border-foreground bg-background overflow-hidden p-2 z-10">
               <div className="w-full h-full relative overflow-hidden bg-muted">
                  <img 
                    src={headshot} 
                    alt="Portrait of Jaiden Wilson" 
                    className="w-full h-full object-cover object-top filter dark:grayscale dark:contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100"
                    data-testid="img-headshot"
                  />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}