import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I’m an aspiring developer with a growing passion for building clean, functional, and user-friendly web experiences. I enjoy learning how systems work under the hood and turning ideas into real, interactive projects. Currently focused on strengthening my fundamentals in web development while building a professional portfolio.
            </p>
            <p className="text-lg font-medium">Always learning. Always building.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Technologies & Tools</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "HTML5", color: "hover:text-orange-500" },
                { name: "CSS3", color: "hover:text-blue-500" },
                { name: "JavaScript", color: "hover:text-yellow-400" },
                { name: "Git", color: "hover:text-red-500" },
                { name: "GitHub", color: "hover:text-gray-300" },
                { name: "React", color: "hover:text-cyan-400" },
                { name: "Tailwind", color: "hover:text-teal-400" },
                { name: "UI/UX Design", color: "hover:text-pink-400" }
              ].map((skill) => (
                <div key={skill.name} className="glass-panel rounded-2xl p-6 text-center group transition-all duration-300 hover:scale-105 hover:bg-secondary/50 cursor-default">
                  <span className={`text-lg font-medium font-display transition-colors ${skill.color}`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 bg-muted relative overflow-hidden">
                  {/* Placeholder for project image - using a stylized background for now */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                     <span className="text-4xl font-display font-bold text-foreground/20">All Aspire Academy</span>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                      All Aspire Academy
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Redesigned site to improve UX/UI and SEO to support enrollment growth for an early learning center. Modernized the visual identity and improved the user journey for prospective parents.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">UI/UX</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">Web Design</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">SEO</span>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <Button asChild variant="outline" className="rounded-full">
                      <a href="https://www.allaspirede.com/" target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Site
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                     <span className="text-4xl font-display font-bold text-foreground/20">Politicked</span>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all">
                      Politicked
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A web-based debate platform focused on structured discussions, user engagement, and real-time interaction. Built to foster meaningful dialogue on complex topics.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">Full Stack</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">Real-time</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">UX</span>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <Button asChild variant="outline" className="rounded-full">
                      <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Contact */}
      <footer id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex justify-center gap-6 pt-8">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
                <a href="mailto:jaiden.wilson156@email.com">Say Hello</a>
              </Button>
            </div>
            
            <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Jaiden Wilson. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                <a href="mailto:jaiden.wilson156@email.com" className="hover:text-foreground transition-colors">Email</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
