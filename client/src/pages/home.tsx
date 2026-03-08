import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { ExternalLink, Github, Terminal, Bot, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        
        {/* Main Content Grid */}
        <div className="container mx-auto px-4 max-w-6xl py-16">
          
          {/* SKILLS SECTION (Moved up for recruiters) */}
          <section id="skills" className="mb-24 scroll-mt-24" aria-labelledby="skills-heading">
            <div className="flex items-center gap-4 mb-8">
              <h2 id="skills-heading" className="text-2xl font-bold font-mono tracking-tight uppercase">Technical Skills</h2>
              <div className="h-px bg-border flex-1" aria-hidden="true"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border p-6 bg-card hard-shadow-sm focus-within:ring-2 focus-within:ring-primary rounded-sm transition-all" tabIndex={0}>
                <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Frontend & Languages</h3>
                <ul className="space-y-2 font-mono text-sm text-muted-foreground" aria-label="Frontend and Languages">
                  <li className="flex items-center gap-2" data-testid="skill-frontend-js"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> JavaScript & TypeScript</li>
                  <li className="flex items-center gap-2" data-testid="skill-frontend-react"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> React.js & Next.js</li>
                  <li className="flex items-center gap-2" data-testid="skill-frontend-html"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> HTML5 & CSS3</li>
                  <li className="flex items-center gap-2" data-testid="skill-frontend-python"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> Python</li>
                  <li className="flex items-center gap-2" data-testid="skill-frontend-cpp"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> C++</li>
                </ul>
              </div>
              
              <div className="border border-border p-6 bg-card hard-shadow-sm focus-within:ring-2 focus-within:ring-primary rounded-sm transition-all" tabIndex={0}>
                <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Backend & Databases</h3>
                <ul className="space-y-2 font-mono text-sm text-muted-foreground" aria-label="Backend and Databases">
                  <li className="flex items-center gap-2" data-testid="skill-backend-node"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> Node.js</li>
                  <li className="flex items-center gap-2" data-testid="skill-backend-express"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> Express.js</li>
                  <li className="flex items-center gap-2" data-testid="skill-backend-mongo"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> MongoDB (Mongoose)</li>
                  <li className="flex items-center gap-2" data-testid="skill-backend-api"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> RESTful APIs</li>
                </ul>
              </div>

              <div className="border border-border p-6 bg-card hard-shadow-sm focus-within:ring-2 focus-within:ring-primary rounded-sm transition-all" tabIndex={0}>
                <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Tools & Hardware</h3>
                <ul className="space-y-2 font-mono text-sm text-muted-foreground" aria-label="Tools and Hardware">
                  <li className="flex items-center gap-2" data-testid="skill-tools-git"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> Git & GitHub</li>
                  <li className="flex items-center gap-2" data-testid="skill-tools-comptia"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> CompTIA A+ Certified</li>
                  <li className="flex items-center gap-2" data-testid="skill-tools-hardware"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> PC Hardware Repair</li>
                  <li className="flex items-center gap-2" data-testid="skill-tools-scripting"><CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" /> Bash & PowerShell</li>
                </ul>
              </div>
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="mb-24 scroll-mt-24" aria-labelledby="experience-heading">
            <div className="flex items-center gap-4 mb-8">
              <h2 id="experience-heading" className="text-2xl font-bold font-mono tracking-tight uppercase">Professional Experience</h2>
              <div className="h-px bg-border flex-1" aria-hidden="true"></div>
            </div>

            <div className="space-y-12">
              {/* Exp 1 */}
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group">
                <div className="text-sm font-mono text-muted-foreground md:text-right pt-1" aria-label="Date">
                  Dec 2025 - Mar 2026<br/>
                  <span className="text-[10px] uppercase bg-muted text-foreground px-2 py-0.5 mt-1 inline-block font-bold tracking-wider" aria-label="Employment type: Contract">Contract</span>
                </div>
                <div className="border-l-2 border-border pl-6 group-hover:border-primary transition-colors pb-4">
                  <h3 className="font-bold text-xl text-foreground" data-testid="exp-title-1">Digital Marketing & Enrollment Coordinator</h3>
                  <div className="text-primary font-mono text-sm mb-4" data-testid="exp-company-1">All Aspire Academy · Newark, DE</div>
                  <ul className="list-disc list-outside ml-4 space-y-3 text-muted-foreground">
                    <li><strong>Spearheaded a comprehensive website redesign</strong> utilizing Wix and custom JavaScript, directly improving UX/UI, optimizing SEO, and significantly increasing visitor engagement.</li>
                    <li><strong>Orchestrated and enhanced the center’s online presence</strong> through strategic social media management, targeted content creation, and meticulous Google Business Profile optimization.</li>
                    <li><strong>Engineered and deployed data-driven Google Ads campaigns</strong>, rigorously monitoring metrics to boost program visibility and successfully drive enrollment traffic.</li>
                  </ul>
                </div>
              </div>

              {/* Exp 2 */}
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group">
                <div className="text-sm font-mono text-muted-foreground md:text-right pt-1" aria-label="Date">
                  May 2025 - Jun 2025<br/>
                  <span className="text-[10px] uppercase bg-muted text-foreground px-2 py-0.5 mt-1 inline-block font-bold tracking-wider" aria-label="Employment type: Internship">Internship</span>
                </div>
                <div className="border-l-2 border-border pl-6 group-hover:border-primary transition-colors pb-4">
                  <h3 className="font-bold text-xl text-foreground" data-testid="exp-title-2">IT Intern</h3>
                  <div className="text-primary font-mono text-sm mb-4" data-testid="exp-company-2">Wilmington University · New Castle, DE</div>
                  <ul className="list-disc list-outside ml-4 space-y-3 text-muted-foreground">
                    <li><strong>Diagnosed and repaired technical failures</strong> on Dell laptops, collaborating seamlessly with Dell-certified professionals to resolve complex hardware and software issues.</li>
                    <li><strong>Accelerated IT operations</strong> by assisting Tier 2 and Tier 3 technicians with high-volume device imaging, desktop hardware upgrades, and enterprise ticketing systems.</li>
                    <li><strong>Expanded technical proficiency</strong> by participating in intensive Microsoft SCCM and Power Automate workshops.</li>
                  </ul>
                </div>
              </div>

              {/* Exp 3 */}
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group">
                <div className="text-sm font-mono text-muted-foreground md:text-right pt-1" aria-label="Date">
                  Oct 2024 - Jul 2025
                </div>
                <div className="border-l-2 border-border pl-6 group-hover:border-primary transition-colors pb-4">
                  <h3 className="font-bold text-xl text-foreground" data-testid="exp-title-3">Sales Technician</h3>
                  <div className="text-primary font-mono text-sm mb-4" data-testid="exp-company-3">uBreakiFix · Exton, PA</div>
                  <ul className="list-disc list-outside ml-4 space-y-3 text-muted-foreground">
                    <li><strong>Executed diagnostic and repair operations</strong> for a diverse range of electronic devices under tight, customer-facing deadlines.</li>
                    <li><strong>Delivered exceptional technical support</strong>, comprehensively managed service tickets, and securely handled POS transactions.</li>
                    <li><strong>Achieved elite performance metrics</strong>, earning recognition as one of the top-performing sales technicians on the East Coast.</li>
                  </ul>
                </div>
              </div>
              
              {/* Exp 4 */}
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 group">
                <div className="text-sm font-mono text-muted-foreground md:text-right pt-1" aria-label="Date">
                  2022
                </div>
                <div className="border-l-2 border-border pl-6 group-hover:border-primary transition-colors">
                  <h3 className="font-bold text-xl text-foreground" data-testid="exp-title-4">Coding Instructor</h3>
                  <div className="text-primary font-mono text-sm mb-4" data-testid="exp-company-4">TechCore2 / Code Ninjas / Athletes Global Corp</div>
                  <ul className="list-disc list-outside ml-4 space-y-3 text-muted-foreground">
                    <li><strong>Educated students on programming fundamentals</strong>, serving as a lead and assistant instructor for advanced Python, Web Development, and Game Design camps.</li>
                    <li><strong>Designed and facilitated interactive curriculum</strong>, including specialized 5-hour Scratch game development workshops.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="mb-24 scroll-mt-24" aria-labelledby="projects-heading">
            <div className="flex items-center gap-4 mb-8">
              <h2 id="projects-heading" className="text-2xl font-bold font-mono tracking-tight uppercase">Featured Projects</h2>
              <div className="h-px bg-border flex-1" aria-hidden="true"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Proj 1 */}
              <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors hard-shadow-sm focus-within:ring-2 focus-within:ring-primary outline-none">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors text-foreground" data-testid="project-title-1">Politicked</h3>
                  <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground focus:text-primary outline-none" aria-label="View Politicked on GitHub" data-testid="link-project-1">
                    <Github className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  Currently redesigning a civic engagement web app focusing on improved UX/UI. Architecting a proprietary analytics dashboard to provide users and administrators with deep engagement insights.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50" aria-label="Technologies used">
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">React</span>
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">TypeScript</span>
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">MongoDB Atlas</span>
                </div>
              </div>

              {/* Proj 2 */}
              <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors hard-shadow-sm focus-within:ring-2 focus-within:ring-primary outline-none">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors text-foreground" data-testid="project-title-2">All Aspire Academy</h3>
                  <a href="https://www.allaspirede.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground focus:text-primary outline-none" aria-label="View All Aspire Academy Live Site" data-testid="link-project-2">
                    <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  Redesigned the corporate website to elevate UX/UI, optimize SEO parameters, and demonstrably increase visitor engagement for an early learning center. Integrated Google Ads for robust analytics tracking.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50" aria-label="Technologies used">
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">JavaScript</span>
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">Wix Velo</span>
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">SEO/Analytics</span>
                </div>
              </div>

              {/* Proj 3 */}
              <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors hard-shadow-sm focus-within:ring-2 focus-within:ring-primary outline-none">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors leading-tight text-foreground" data-testid="project-title-3">Simply Butterfly Solutions</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  Delivered a high-conversion live website for a staffing company. Managed the full project lifecycle from conceptualization to deployment, strictly aligning the technical design with brand and business directives.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50" aria-label="Technologies used">
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">HTML/CSS</span>
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">JavaScript</span>
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">AI Tooling</span>
                </div>
              </div>

              {/* Proj 4 */}
              <div className="border border-border bg-card p-6 flex flex-col group hover:border-primary transition-colors hard-shadow-sm focus-within:ring-2 focus-within:ring-primary outline-none">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors text-foreground" data-testid="project-title-4">Lavenzen</h3>
                  <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground focus:text-primary outline-none" aria-label="View Lavenzen on GitHub" data-testid="link-project-4">
                    <Github className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  Currently engineering a responsive dating application designed to help individuals form platonic relationships through complex, interest-based matching algorithms.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50" aria-label="Technologies used">
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">React</span>
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">TypeScript</span>
                  <span className="text-[10px] font-mono bg-muted text-foreground px-2 py-1 uppercase font-bold">Full Stack</span>
                </div>
              </div>

            </div>
          </section>

          {/* EDUCATION SECTION */}
          <section id="education" className="mb-12 scroll-mt-24" aria-labelledby="education-heading">
             <div className="flex items-center gap-4 mb-8">
              <h2 id="education-heading" className="text-2xl font-bold font-mono tracking-tight uppercase">Education & Training</h2>
              <div className="h-px bg-border flex-1" aria-hidden="true"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border p-6 bg-muted/30 focus-within:ring-2 focus-within:ring-primary rounded-sm transition-all" tabIndex={0}>
                <h3 className="font-bold text-lg text-foreground" data-testid="edu-degree-1">B.S. Electrical & Computer Engineering</h3>
                <div className="text-primary font-mono text-sm mb-2" data-testid="edu-school-1">University of Delaware</div>
                <p className="text-sm text-muted-foreground">Expected May 2029</p>
              </div>
              
              <div className="border border-border p-6 bg-muted/30 focus-within:ring-2 focus-within:ring-primary rounded-sm transition-all" tabIndex={0}>
                <h3 className="font-bold text-lg text-foreground" data-testid="edu-degree-2">Full Stack Developer Bootcamp</h3>
                <div className="text-primary font-mono text-sm mb-2" data-testid="edu-school-2">CodeSquad</div>
                <p className="text-sm text-muted-foreground mb-2">Jan 2026 – June 2026 (275 hours)</p>
                <p className="text-sm text-muted-foreground">Hands-on training in full-stack JavaScript. Building web apps using React, Node.js, Express, and MongoDB.</p>
              </div>

              <div className="border border-border p-6 bg-muted/30 md:col-span-2 focus-within:ring-2 focus-within:ring-primary rounded-sm transition-all" tabIndex={0}>
                <h3 className="font-bold text-lg text-foreground" data-testid="edu-degree-3">IT Support Specialist</h3>
                <div className="text-primary font-mono text-sm mb-2" data-testid="edu-school-3">Tech Impact ITWORKS</div>
                <p className="text-sm text-muted-foreground mb-2">Feb 2025 – June 2025 (480 hours)</p>
                <p className="text-sm text-muted-foreground">Hands-on training in PC troubleshooting, networking, cybersecurity essentials, and scripting (JavaScript, Python, Bash, PowerShell).</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer/Contact */}
      <footer id="contact" className="border-t border-border bg-muted/20" aria-label="Site Footer">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8">
            <Terminal className="w-12 h-12 text-muted-foreground" aria-hidden="true" />
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Open to Opportunities</h2>
              <p className="font-mono text-sm text-muted-foreground">
                Seeking roles where I can leverage my hardware background and full-stack development skills. Let's build something great.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-none font-mono font-bold hard-shadow border border-foreground bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-offset-2 focus:ring-primary outline-none" asChild>
                <a href="mailto:jaiden.wilson156@gmail.com" data-testid="btn-footer-contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="w-full pt-16 mt-8 border-t border-border flex flex-col gap-6 font-mono text-xs">
              {/* AI Transparency Block */}
              <div className="border border-border bg-card p-4 text-left flex gap-4 max-w-xl mx-auto" role="note" aria-label="AI Transparency Note">
                <Bot className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-muted-foreground">
                  <strong className="text-foreground">Transparency Note:</strong> This portfolio was rapidly prototyped in collaboration with an AI assistant to demonstrate proficiency in prompt engineering, technical communication, and modern tooling workflows.
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
                <p>Copyright © {new Date().getFullYear()} Jaiden Wilson</p>
                <div className="flex gap-4">
                  <a href="https://github.com/PhoenixJai" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors focus:text-primary outline-none" aria-label="GitHub Profile" data-testid="link-footer-github">GitHub</a>
                  <a href="mailto:jaiden.wilson156@gmail.com" className="hover:text-primary transition-colors focus:text-primary outline-none" aria-label="Email Me" data-testid="link-footer-email">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}