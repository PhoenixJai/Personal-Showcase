import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { ExternalLink, Github, Terminal, Bot, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      
      {/* Main Content Grid */}
      <div className="container mx-auto px-4 max-w-7xl pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: About & Skills */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* About Section */}
            <section id="about" className="scroll-mt-24">
              <div className="flex items-baseline gap-4 mb-6">
                <h2 className="text-3xl font-bold uppercase tracking-tight">System_Profile</h2>
                <div className="h-px bg-border flex-1"></div>
              </div>
              
              <div className="prose prose-neutral dark:prose-invert font-mono text-sm leading-relaxed text-muted-foreground">
                <p className="mb-4">
                  <strong className="text-foreground">STATUS:</strong> Aspiring Full Stack Developer & Electrical Engineering Student.
                </p>
                <p className="mb-4">
                  <strong className="text-foreground">BACKGROUND:</strong> Hands-on experience spanning front-end technologies, IT scripting, and hardware diagnostics. Proven track record in fast-paced environments, from repairing electronics at uBreakiFix to managing digital marketing for educational centers.
                </p>
                <p>
                  <strong className="text-foreground">OBJECTIVE:</strong> Leveraging a deep understanding of physical computing alongside modern web frameworks to architect robust, scalable solutions. Currently enrolled in a MERN stack bootcamp while pursuing a B.S. at the University of Delaware.
                </p>
              </div>
            </section>

            {/* Education Block */}
            <section className="terminal-block">
              <div className="terminal-header justify-between">
                <span className="text-xs font-mono">education.json</span>
                <span className="text-xs text-primary">Read-Only</span>
              </div>
              <div className="p-4 space-y-4 font-mono text-sm">
                <div className="border-l-2 border-primary pl-3">
                  <div className="text-foreground font-bold">B.S. Electrical & Computer Engineering</div>
                  <div className="text-muted-foreground text-xs mt-1">University of Delaware // Exp. May 2029</div>
                </div>
                <div className="border-l-2 border-primary pl-3">
                  <div className="text-foreground font-bold">Full Stack Developer Bootcamp</div>
                  <div className="text-muted-foreground text-xs mt-1">CodeSquad // Jan 2026 - Jun 2026</div>
                  <div className="text-xs mt-1 opacity-70">275 hours MERN stack training</div>
                </div>
                <div className="border-l-2 border-muted-foreground pl-3">
                  <div className="text-foreground font-bold">IT Support Specialist</div>
                  <div className="text-muted-foreground text-xs mt-1">Tech Impact ITWORKS // Feb - Jun 2025</div>
                </div>
              </div>
            </section>

            {/* Tech Stack Matrix */}
            <section id="skills" className="scroll-mt-24">
               <div className="flex items-baseline gap-4 mb-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight">Dependencies</h2>
                <div className="h-px bg-border flex-1"></div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-border border border-border">
                {[
                  { name: "JavaScript/TS", cat: "lang" },
                  { name: "Python", cat: "lang" },
                  { name: "C++", cat: "lang" },
                  { name: "HTML/CSS", cat: "lang" },
                  { name: "React", cat: "frame" },
                  { name: "Next.js", cat: "frame" },
                  { name: "Node.js", cat: "frame" },
                  { name: "MongoDB", cat: "data" },
                  { name: "Git/GitHub", cat: "tool" },
                  { name: "CompTIA A+", cat: "cert" },
                ].map((skill) => (
                  <div key={skill.name} className="bg-background p-3 flex flex-col justify-center group hover:bg-muted transition-colors cursor-default">
                    <span className="text-xs text-primary/70 mb-1">[{skill.cat}]</span>
                    <span className="font-mono text-sm font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: Experience & Projects */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Experience Data Table */}
            <section id="experience" className="scroll-mt-24">
              <div className="flex items-baseline gap-4 mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight">Execution_Log</h2>
                <div className="h-px bg-border flex-1"></div>
              </div>

              <div className="space-y-6">
                {/* Exp 1 */}
                <div className="group border-b border-border pb-6 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg font-mono">All Aspire Academy</h3>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1">Dec 2025 - Mar 2026</span>
                  </div>
                  <div className="text-sm font-bold mb-3 uppercase tracking-wide text-muted-foreground">Digital Marketing & Enrollment Coordinator</div>
                  <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                    <li className="flex gap-2"><span className="text-primary">→</span> Redesigned website to improve UX/UI, optimize SEO, and increase visitor engagement.</li>
                    <li className="flex gap-2"><span className="text-primary">→</span> Launched and monitored targeted Google Ads campaigns to drive enrollment.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div className="group border-b border-border pb-6 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg font-mono">Wilmington University</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1">May 2025 - Jun 2025</span>
                  </div>
                  <div className="text-sm font-bold mb-3 uppercase tracking-wide text-muted-foreground">IT Intern</div>
                  <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                    <li className="flex gap-2"><span className="text-primary">→</span> Diagnosed and repaired Dell laptops, resolving hardware and software issues.</li>
                    <li className="flex gap-2"><span className="text-primary">→</span> Assisted Tier 2/3 technicians with device imaging, desktop upgrades, and event setups.</li>
                  </ul>
                </div>

                {/* Exp 3 */}
                <div className="group border-b border-border pb-6 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg font-mono">uBreakiFix</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1">Oct 2024 - Jul 2025</span>
                  </div>
                  <div className="text-sm font-bold mb-3 uppercase tracking-wide text-muted-foreground">Sales Technician</div>
                  <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                    <li className="flex gap-2"><span className="text-primary">→</span> Diagnosed and repaired electronic devices under tight deadlines.</li>
                    <li className="flex gap-2"><span className="text-primary">→</span> Recognized as one of the top-performing sales technicians on the East Coast.</li>
                  </ul>
                </div>
                
                 {/* Exp 4 */}
                 <div className="group border-b border-border pb-6 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg font-mono">Various Organizations</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1">2022</span>
                  </div>
                  <div className="text-sm font-bold mb-3 uppercase tracking-wide text-muted-foreground">Coding Instructor</div>
                  <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                    <li className="flex gap-2"><span className="text-primary">→</span> Taught programming fundamentals at TechCore2, Athletes Global Corp, and Code Ninjas.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Registry */}
            <section id="projects" className="scroll-mt-24">
              <div className="flex items-baseline gap-4 mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight">Project_Registry</h2>
                <div className="h-px bg-border flex-1"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Proj 1 */}
                <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold font-mono text-lg group-hover:text-primary transition-colors">All Aspire Academy</h3>
                    <a href="https://www.allaspirede.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-6 flex-1">
                    Redesigned early learning center website improving UX/UI and SEO. Managed Google Ads campaigns to boost enrollment visibility.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">JavaScript</span>
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">Wix</span>
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">SEO</span>
                  </div>
                </div>

                {/* Proj 2 */}
                <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-wider font-mono">Building</div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold font-mono text-lg group-hover:text-primary transition-colors">Politicked</h3>
                    <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-6 flex-1">
                    Civic engagement app redesign focusing on UX. Building a proprietary analytics dashboard for user engagement insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">React</span>
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">TypeScript</span>
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">MongoDB</span>
                  </div>
                </div>

                {/* Proj 3 */}
                <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold font-mono text-lg group-hover:text-primary transition-colors leading-tight">Simply Butterfly</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-6 flex-1">
                    Delivered a live website for a staffing company utilizing AI generation tools. Managed project from concept to deployment.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">HTML/CSS</span>
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">AI Tools</span>
                  </div>
                </div>

                {/* Proj 4 */}
                <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-muted text-muted-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-wider font-mono">Building</div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold font-mono text-lg group-hover:text-primary transition-colors">Lavenzen</h3>
                    <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-6 flex-1">
                    Developing a dating app designed to help individuals form platonic relationships through interest-based matching.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">React</span>
                    <span className="text-[10px] font-mono border border-border px-2 py-1 uppercase">TypeScript</span>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer/Contact */}
      <footer id="contact" className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8">
            <Terminal className="w-12 h-12 text-muted-foreground" />
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-mono tracking-tighter">System.exit(0)</h2>
              <p className="font-mono text-sm text-muted-foreground">
                Seeking new opportunities to bridge hardware concepts with scalable software solutions. Let's execute some code together.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-none font-mono font-bold hard-shadow border border-foreground bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="mailto:jaiden.wilson156@gmail.com">Initialize_Contact()</a>
              </Button>
            </div>
            
            <div className="w-full pt-16 mt-8 border-t border-border flex flex-col gap-6 font-mono text-xs">
              {/* AI Transparency Block */}
              <div className="border border-border bg-card p-4 text-left flex gap-4 max-w-xl mx-auto">
                <Bot className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <strong className="text-foreground">META_DATA:</strong> This portfolio architecture was scaffolded in collaboration with an AI assistant, demonstrating proficiency in prompt engineering and rapid integration of modern development tooling.
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
                <p>Copyright © {new Date().getFullYear()} Jaiden Wilson</p>
                <div className="flex gap-4">
                  <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                  <a href="mailto:jaiden.wilson156@gmail.com" className="hover:text-primary transition-colors">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}