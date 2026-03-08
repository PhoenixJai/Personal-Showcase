import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshot from "@assets/headshot_Jaiden-Wilson_sq_1772998906594.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          
          <div className="space-y-8">
            <div className="terminal-block hard-shadow">
              <div className="terminal-header">
                <Terminal className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-mono">bash - user@portfolio:~</span>
              </div>
              <div className="terminal-body space-y-4">
                <div className="flex gap-2">
                  <span className="text-primary">❯</span>
                  <span className="text-foreground">whoami</span>
                </div>
                <div className="text-muted-foreground pl-4">
                  Jaiden Wilson
                  <br />
                  Electrical Engineering Student & Full Stack Developer
                </div>
                
                <div className="flex gap-2 mt-4">
                  <span className="text-primary">❯</span>
                  <span className="text-foreground">cat profile.txt</span>
                </div>
                <div className="text-muted-foreground pl-4">
                  Bridging the gap between physical hardware systems and 
                  elegant web experiences. CompTIA A+ certified technician 
                  with a passion for continuous learning.
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
              HARDWARE <br />
              <span className="text-primary font-serif italic font-light tracking-normal px-2">meets</span> <br />
              SOFTWARE.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 font-mono">
              <Button size="lg" className="rounded-none h-12 px-8 hard-shadow bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#projects">
                  View.Projects()
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none h-12 px-8 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors" asChild>
                <a href="mailto:jaiden.wilson156@gmail.com">
                  Contact.Init()
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-[450px] relative order-first lg:order-last">
            {/* Brutalist image frame */}
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 border border-foreground"></div>
            <div className="absolute inset-0 border-2 border-foreground bg-background overflow-hidden p-2 z-10">
               <div className="w-full h-full relative overflow-hidden bg-muted filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500">
                  <img 
                    src={headshot} 
                    alt="Jaiden Wilson" 
                    className="w-full h-full object-cover object-top"
                  />
               </div>
            </div>
            
            {/* Tech decorative elements */}
            <div className="absolute -left-6 top-10 z-20 bg-background border border-foreground px-3 py-1 font-mono text-xs hard-shadow rotate-[-5deg]">
              CompTIA A+
            </div>
            <div className="absolute -right-4 bottom-20 z-20 bg-background border border-foreground px-3 py-1 font-mono text-xs hard-shadow rotate-[3deg] text-primary">
              <span className="animate-pulse">●</span> MERN_Stack
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}