import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { ExternalLink, Github, Terminal, Cpu, Award, GraduationCap, Briefcase, Code, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* About & Education Section */}
      <section id="about" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-display font-bold flex items-center gap-3">
                  <Terminal className="text-primary w-8 h-8" />
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m an aspiring Full Stack Developer and Electrical Engineering student. I have hands-on experience in front-end technologies, scripting, and client-facing IT support. My background spans from diagnosing electronic devices to launching targeted Google Ads campaigns and building full-stack web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive at the intersection of hardware and software—learning how physical systems work under the hood and leveraging that knowledge to write robust, efficient code. Currently completing an evening bootcamp focused on the MERN stack while pursuing my B.S. in Electrical & Computer Engineering.
              </p>
              <div className="flex items-center gap-3 text-lg font-medium text-foreground">
                <Award className="w-6 h-6 text-yellow-500" />
                CompTIA A+ Certified Technician
              </div>
            </div>

            <div className="space-y-8">
               <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-display font-bold flex items-center gap-3">
                  <GraduationCap className="text-primary w-8 h-8" />
                  Education
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <h3 className="font-bold text-xl">B.S. in Electrical & Computer Engineering</h3>
                  <p className="text-muted-foreground">University of Delaware (Expected May 2029)</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  <h3 className="font-bold text-xl">Full Stack Developer Bootcamp</h3>
                  <p className="text-muted-foreground">CodeSquad (Jan 2026 - June 2026)</p>
                  <p className="text-sm mt-2 text-muted-foreground">275 hours of MERN stack training.</p>
                </div>

                <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                  <h3 className="font-bold text-xl">IT Support Specialist</h3>
                  <p className="text-muted-foreground">Tech Impact ITWORKS (Feb 2025 - June 2025)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold flex items-center justify-center gap-3">
                <Code className="text-primary w-8 h-8" />
                Technical Arsenal
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { name: "JavaScript", type: "Language" },
                { name: "TypeScript", type: "Language" },
                { name: "Python", type: "Language" },
                { name: "C++", type: "Language" },
                { name: "HTML/CSS", type: "Language" },
                { name: "React", type: "Framework" },
                { name: "Next.js", type: "Framework" },
                { name: "Node.js", type: "Framework" },
                { name: "MongoDB", type: "Database" },
                { name: "Git & GitHub", type: "Tool" },
              ].map((skill) => (
                <div key={skill.name} className="glass-panel border border-white/5 rounded-xl p-4 text-center group hover:-translate-y-1 transition-transform">
                  <span className="text-sm text-muted-foreground block mb-1">{skill.type}</span>
                  <span className="text-base font-semibold font-display">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold flex items-center justify-center gap-3">
                <Briefcase className="text-primary w-8 h-8" />
                Professional Experience
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {/* Experience Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground">All Aspire Academy</h3>
                    <span className="text-sm text-muted-foreground">Dec 2025 – Mar 2026</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-4">Digital Marketing & Enrollment Coordinator</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Redesigned the website to improve UX/UI, optimize SEO, and increase visitor engagement.</li>
                    <li>Launched and monitored targeted Google Ads campaigns.</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground">Wilmington University</h3>
                    <span className="text-sm text-muted-foreground">May 2025 – June 2025</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-4">IT Intern</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Diagnosed and repaired Dell laptops resolving hardware/software issues.</li>
                    <li>Assisted Tier 2/3 technicians with device imaging and desktop upgrades.</li>
                  </ul>
                </div>
              </div>
              
              {/* Experience Item 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground">uBreakiFix</h3>
                    <span className="text-sm text-muted-foreground">Oct 2024 – July 2025</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-4">Sales Technician</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Diagnosed and repaired electronic devices.</li>
                    <li>Recognized as one of the top-performing sales technicians on the East Coast.</li>
                  </ul>
                </div>
              </div>

               {/* Experience Item 4 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground">Various Organizations</h3>
                    <span className="text-sm text-muted-foreground">2022</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-4">Coding Instructor</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Taught programming fundamentals at TechCore2, Athletes Global Corp, and Code Ninjas.</li>
                    <li>Led Scratch game dev workshops and Python/Web Dev camps.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="h-48 bg-muted relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                     <span className="text-3xl font-display font-bold text-foreground/20">All Aspire Academy</span>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-display font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                      All Aspire Academy
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Redesigned website to improve UX/UI, optimize SEO, and increase visitor engagement for an early learning center. Modernized the visual identity and improved the user journey for prospective parents.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">Wix</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">Google Ads</span>
                  </div>
                  <div className="pt-4 flex gap-4 mt-auto">
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
              <div className="group rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="h-48 bg-muted relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                     <span className="text-3xl font-display font-bold text-foreground/20">Politicked</span>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-display font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all">
                        Politicked
                      </h3>
                      <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">In Progress</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      A civic engagement app redesign focusing on improved UX/UI. Building a proprietary analytics dashboard to provide users and admins with engagement insights.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">MongoDB</span>
                  </div>
                  <div className="pt-4 flex gap-4 mt-auto">
                    <Button asChild variant="outline" className="rounded-full">
                      <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="group rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="h-48 bg-muted relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-600/20 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                     <span className="text-3xl font-display font-bold text-foreground/20">Simply Butterfly Solutions</span>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-display font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all">
                      Simply Butterfly Solutions
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Delivered a live website for a staffing company using AI generation tools. Managed the project from concept to deployment, aligning design with brand goals.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">HTML/CSS</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">JS</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">AI Tools</span>
                  </div>
                </div>
              </div>

               {/* Project 4 */}
               <div className="group rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className="h-48 bg-muted relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-600/20 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                     <span className="text-3xl font-display font-bold text-foreground/20">Lavenzen</span>
                  </div>
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-display font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-rose-400 transition-all">
                        Lavenzen
                      </h3>
                      <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">In Progress</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Developing a dating app designed to help individuals form platonic relationships through interest-based matching.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">React</span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">TypeScript</span>
                  </div>
                  <div className="pt-4 flex gap-4 mt-auto">
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
            
            <div className="mt-24 pt-8 border-t border-border flex flex-col gap-6">
              {/* AI Transparency Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-secondary/50 py-3 px-6 rounded-full w-fit mx-auto border border-white/5">
                <Bot className="w-4 h-4 text-primary" />
                <span>
                  <strong>Transparency Note:</strong> This portfolio was built collaboratively with an AI assistant to rapidly prototype and deploy the design, reflecting my ability to integrate modern AI tools into the development workflow.
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Jaiden Wilson. All rights reserved.</p>
                <div className="flex gap-4">
                  <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                  <a href="mailto:jaiden.wilson156@email.com" className="hover:text-foreground transition-colors">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}