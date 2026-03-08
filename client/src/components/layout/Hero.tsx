import { ArrowRight, ChevronDown, Code2, Cpu, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshot from "@assets/headshot_Jaiden-Wilson_sq_1772998906594.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Jaiden</span><br />
              <span className="text-3xl lg:text-5xl text-foreground/80 mt-2 block">Hardware Meets Software.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Electrical Engineering student & Full Stack Developer bridging the gap between physical systems and elegant web experiences. A CompTIA A+ certified technician and continuous learner building real-world solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="rounded-full w-full sm:w-auto text-base h-12 px-8" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto text-base h-12 px-8" asChild>
                <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer">
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] rotate-6 opacity-20 blur-lg"></div>
              <img 
                src={headshot} 
                alt="Jaiden Wilson" 
                className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl border border-white/10"
              />
              
              {/* Floating badges */}
              <div className="absolute -right-6 top-10 z-20 glass-panel p-3 rounded-2xl animate-float">
                <Code2 className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="absolute -left-6 bottom-20 z-20 glass-panel p-3 rounded-2xl animate-float animation-delay-2000">
                <Cpu className="w-6 h-6 text-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}