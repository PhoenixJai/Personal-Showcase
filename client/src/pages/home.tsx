import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { ExternalLink, Github, Terminal, Bot, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      
      {/* Main Content Grid */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        
        {/* SKILLS SECTION (Moved up for recruiters) */}
        <section id="skills" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold font-mono tracking-tight uppercase">Technical Skills</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border p-6 bg-card hard-shadow-sm">
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Frontend & Languages</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> JavaScript & TypeScript</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> React.js & Next.js</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> HTML5 & CSS3</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Python</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> C++</li>
              </ul>
            </div>
            
            <div className="border border-border p-6 bg-card hard-shadow-sm">
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Backend & Databases</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Node.js</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Express.js</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> MongoDB (Mongoose)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> RESTful APIs</li>
              </ul>
            </div>

            <div className="border border-border p-6 bg-card hard-shadow-sm">
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Tools & Hardware</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Git & GitHub</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> CompTIA A+ Certified</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> PC Hardware Repair</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Bash & PowerShell</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold font-mono tracking-tight uppercase">Professional Experience</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="space-y-8">
            {/* Exp 1 */}
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group">
              <div className="text-sm font-mono text-muted-foreground md:text-right pt-1">
                Dec 2025 - Mar 2026<br/>
                <span className="text-xs uppercase bg-muted px-2 py-0.5 mt-1 inline-block">Contract</span>
              </div>
              <div className="border-l-2 border-border pl-6 group-hover:border-primary transition-colors pb-8">
                <h3 className="font-bold text-xl">Digital Marketing & Enrollment Coordinator</h3>
                <div className="text-primary font-mono text-sm mb-3">All Aspire Academy · Newark, DE</div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                  <li>Redesigned the corporate website utilizing Wix and custom JavaScript to improve UX/UI, optimize SEO, and increase overall visitor engagement.</li>
                  <li>Managed the center's online presence through targeted content creation and Google Business Profile optimization.</li>
                  <li>Launched and monitored data-driven Google Ads campaigns to boost program visibility and drive enrollment traffic.</li>
                </ul>
              </div>
            </div>

            {/* Exp 2 */}
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group">
              <div className="text-sm font-mono text-muted-foreground md:text-right pt-1">
                May 2025 - Jun 2025<br/>
                <span className="text-xs uppercase bg-muted px-2 py-0.5 mt-1 inline-block">Internship</span>
              </div>
              <div className="border-l-2 border-border pl-6 group-hover:border-primary transition-colors pb-8">
                <h3 className="font-bold text-xl">IT Intern</h3>
                <div className="text-primary font-mono text-sm mb-3">Wilmington University · New Castle, DE</div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                  <li>Diagnosed and repaired Dell laptops, working alongside certified professionals to resolve complex hardware and software issues.</li>
                  <li>Assisted Tier 2 and Tier 3 technicians with high-volume device imaging, desktop upgrades, ticketing systems, and event setups.</li>
                  <li>Participated in hands-on Microsoft SCCM and Power Automate workshops.</li>
                </ul>
              </div>
            </div>

            {/* Exp 3 */}
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group">
              <div className="text-sm font-mono text-muted-foreground md:text-right pt-1">
                Oct 2024 - Jul 2025
              </div>
              <div className="border-l-2 border-border pl-6 group-hover:border-primary transition-colors pb-8">
                <h3 className="font-bold text-xl">Sales Technician</h3>
                <div className="text-primary font-mono text-sm mb-3">uBreakiFix · Exton, PA</div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                  <li>Diagnosed, repaired, and QA-tested a wide range of electronic devices under tight deadlines.</li>
                  <li>Managed service tickets, provided client-facing customer support, and handled POS transactions.</li>
                  <li>Recognized as one of the top-performing sales technicians on the East Coast.</li>
                </ul>
              </div>
            </div>
            
            {/* Exp 4 */}
            <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group">
              <div className="text-sm font-mono text-muted-foreground md:text-right pt-1">
                2022
              </div>
              <div className="border-l-2 border-border pl-6 group-hover:border-primary transition-colors">
                <h3 className="font-bold text-xl">Coding Instructor</h3>
                <div className="text-primary font-mono text-sm mb-3">TechCore2 / Code Ninjas / Athletes Global Corp</div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                  <li>Taught programming fundamentals and acted as an assistant instructor for Python, Web Development, and Game Design.</li>
                  <li>Created and instructed structured Scratch game development workshops.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold font-mono tracking-tight uppercase">Featured Projects</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Proj 1 */}
            <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors hard-shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Politicked</h3>
                <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                Currently redesigning a civic engagement web app focusing on improved UX/UI. Building a proprietary analytics dashboard to provide users and administrators with engagement insights.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">React</span>
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">TypeScript</span>
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">MongoDB Atlas</span>
              </div>
            </div>

            {/* Proj 2 */}
            <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors hard-shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">All Aspire Academy</h3>
                <a href="https://www.allaspirede.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                Redesigned the website to improve UX/UI, optimize SEO, and increase visitor engagement for an early learning center. Integrated Google Ads for analytics tracking.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">JavaScript</span>
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">Wix Velo</span>
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">SEO/Analytics</span>
              </div>
            </div>

            {/* Proj 3 */}
            <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors hard-shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors leading-tight">Simply Butterfly Solutions</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                Delivered a live website for a staffing company. Managed the project from concept to deployment, aligning the design with brand and business goals using AI generation tools.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">HTML/CSS</span>
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">JavaScript</span>
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">AI Tooling</span>
              </div>
            </div>

            {/* Proj 4 */}
            <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors hard-shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Lavenzen</h3>
                <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                Currently developing a dating app designed to help individuals form platonic relationships through complex interest-based matching algorithms.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">React</span>
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">TypeScript</span>
                <span className="text-[10px] font-mono bg-muted text-muted-foreground px-2 py-1 uppercase font-bold">Full Stack</span>
              </div>
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="mb-12 scroll-mt-24">
           <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold font-mono tracking-tight uppercase">Education & Training</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border p-6 bg-muted/30">
              <h3 className="font-bold text-lg">B.S. Electrical & Computer Engineering</h3>
              <div className="text-primary font-mono text-sm mb-2">University of Delaware</div>
              <p className="text-sm text-muted-foreground">Expected May 2029</p>
            </div>
            
            <div className="border border-border p-6 bg-muted/30">
              <h3 className="font-bold text-lg">Full Stack Developer Bootcamp</h3>
              <div className="text-primary font-mono text-sm mb-2">CodeSquad</div>
              <p className="text-sm text-muted-foreground mb-2">Jan 2026 – June 2026 (275 hours)</p>
              <p className="text-sm text-muted-foreground">Hands-on training in full-stack JavaScript. Building web apps using React, Node.js, Express, and MongoDB.</p>
            </div>

            <div className="border border-border p-6 bg-muted/30 md:col-span-2">
              <h3 className="font-bold text-lg">IT Support Specialist</h3>
              <div className="text-primary font-mono text-sm mb-2">Tech Impact ITWORKS</div>
              <p className="text-sm text-muted-foreground mb-2">Feb 2025 – June 2025 (480 hours)</p>
              <p className="text-sm text-muted-foreground">Hands-on training in PC troubleshooting, networking, cybersecurity essentials, and scripting (JavaScript, Python, Bash, PowerShell).</p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer/Contact */}
      <footer id="contact" className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8">
            <Terminal className="w-12 h-12 text-muted-foreground" />
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Open to Opportunities</h2>
              <p className="font-mono text-sm text-muted-foreground">
                Seeking roles where I can leverage my hardware background and full-stack development skills. Let's build something great.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-none font-mono font-bold hard-shadow border border-foreground bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="mailto:jaiden.wilson156@gmail.com">Contact Me</a>
              </Button>
            </div>
            
            <div className="w-full pt-16 mt-8 border-t border-border flex flex-col gap-6 font-mono text-xs">
              {/* AI Transparency Block */}
              <div className="border border-border bg-card p-4 text-left flex gap-4 max-w-xl mx-auto">
                <Bot className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <strong className="text-foreground">Transparency Note:</strong> This portfolio was rapidly prototyped in collaboration with an AI assistant to demonstrate proficiency in prompt engineering, technical communication, and modern tooling workflows.
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