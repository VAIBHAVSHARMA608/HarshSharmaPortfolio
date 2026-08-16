import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  Cloud,
  Download,
  Github,
  GraduationCap,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import resume1 from "@/assets/resume-1.pdf.asset.json";
import resume2 from "@/assets/resume-2.pdf.asset.json";
import { Reveal } from "@/components/portfolio/Reveal";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { ContactForm } from "@/components/portfolio/ContactForm";

const TITLE = "Harsh Sharma — Data Analytics, AI/ML & Cloud Operations";
const DESCRIPTION =
  "Computer Science Engineering graduate with enterprise experience in invoice automation, data validation and analytics. Projects in computer vision, machine learning and business intelligence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Harsh Sharma",
          jobTitle: "Apprentice Engineer — PDF Mapping",
          worksFor: { "@type": "Organization", name: "Basware" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Chandigarh University" },
          knowsAbout: [
            "Data Analytics",
            "Machine Learning",
            "Computer Vision",
            "Cloud Operations",
            "Business Intelligence",
          ],
          sameAs: ["https://www.linkedin.com/in/harsh-sharma", "https://github.com/harshsharma"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "harshsharma.work01@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/harsh-sharma";
const GITHUB = "https://github.com/harshsharma";

const projects = [
  {
    title: "Facial Expression Recognition",
    highlight: "99.01% Validation Accuracy",
    description:
      "Deep learning based facial expression recognition system built with Python, PyTorch and OpenCV. Trained on a large facial-image dataset with a carefully tuned training pipeline.",
    tags: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
      "Image Processing",
    ],
    details: {
      objective:
        "Build a robust deep-learning model that classifies human facial expressions into emotion categories from static images.",
      approach:
        "Designed and trained a convolutional neural network in PyTorch on the FER2013 dataset. Applied data augmentation, learning-rate scheduling and early stopping to improve generalisation.",
      outcome:
        "Reached 99.01% validation accuracy with a lightweight model that can run real-time inference through an OpenCV capture loop.",
    },
  },
  {
    title: "Automatic Number Plate Recognition",
    highlight: "88% Recognition Accuracy",
    description:
      "OCR-based number plate detection and recognition pipeline using Python and OpenCV, handling varied lighting, angles and plate formats.",
    tags: ["Python", "OpenCV", "OCR", "Computer Vision", "Image Processing"],
    details: {
      objective:
        "Create an end-to-end pipeline that detects and reads vehicle number plates from images under real-world conditions.",
      approach:
        "Combined OpenCV pre-processing (grayscale, thresholding, contour detection) with OCR to extract plate text. Added heuristics to filter false positives and handle skewed or low-contrast plates.",
      outcome:
        "Achieved 88% recognition accuracy across varied lighting, angles and plate formats, demonstrating a practical computer-vision workflow.",
    },
  },
  {
    title: "Sales Analytics Dashboard",
    highlight: "Decision-ready Reporting",
    description:
      "Interactive Power BI dashboard turning raw sales data into actionable insight — DAX measures, SQL-backed models and clear visual hierarchy for revenue, region and product trends.",
    tags: ["Power BI", "DAX", "SQL", "Data Visualization", "Data Analysis"],
    details: {
      objective:
        "Transform raw sales records into an interactive, decision-ready reporting layer for revenue, region and product performance.",
      approach:
        "Modelled the data in SQL, built DAX measures for KPIs, and designed a Power BI dashboard with clear visual hierarchy and drill-through filters.",
      outcome:
        "Produced a dashboard that lets stakeholders quickly spot trends, compare regions and identify top-performing products without writing queries.",
    },
  },
];

const skillGroups = [
  {
    name: "Data & Analytics",
    items: [
      "Python",
      "SQL",
      "Power BI",
      "Tableau",
      "Pandas",
      "NumPy",
      "DAX",
      "Data Analysis",
      "Data Visualization",
      "Data Processing",
    ],
  },
  {
    name: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "Computer Vision",
      "OpenCV",
      "Image Processing",
      "Facial Recognition",
      "OCR",
    ],
  },
  { name: "Databases", items: ["MySQL", "MongoDB", "DBMS", "Database Management"] },
  {
    name: "Cloud & Systems",
    items: [
      "Cloud Computing",
      "Cloud Operations",
      "Cloud Support",
      "Computer Networking",
      "Operating Systems",
    ],
  },
  { name: "Programming", items: ["Python", "Java", "C++", "JavaScript"] },
  { name: "Tools", items: ["Git", "JupyterLab", "VS Code"] },
];

const focusAreas = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    text: "Turning messy operational data into reliable, decision-ready analysis.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    text: "Dashboards and reporting that teams actually use day to day.",
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    text: "Applied models for vision, classification and automation.",
  },
  {
    icon: Cloud,
    title: "Cloud Operations",
    text: "Supporting and improving dependable cloud-based workflows.",
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <main>
        {/* Hero */}
        <section id="home" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <Reveal>
              <p className="eyebrow">Computer Science Engineering Graduate</p>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                HARSH SHARMA
              </h1>
              <p className="mt-5 text-lg font-medium text-muted-foreground sm:text-xl">
                Data Analytics <span className="text-border">|</span> AI/ML{" "}
                <span className="text-border">|</span> Cloud Operations
              </p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Computer Science Engineering graduate with 10 months of experience at Basware in
                enterprise invoice automation, PDF mapping, data validation and quality assurance.
                Passionate about turning data into reliable insights and building practical
                technology solutions.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" variant="outline">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <a href={resume1.url} download="Harsh_Sharma_Resume.pdf">
                      Resume — Version 1
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href={resume2.url} download="Harsh_Sharma_Resume_2.pdf">
                      Resume — Version 2
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild size="lg" variant="ghost">
                <a href="#contact">Contact Me</a>
              </Button>
            </Reveal>

            <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> India
              </span>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading eyebrow="About" title="Engineering clarity out of complex data" />
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
              <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm a Computer Science Engineering graduate working at the intersection of data
                  and automation. At Basware I work on enterprise invoice automation and PDF
                  mapping — configuring extraction logic, validating data against business rules
                  and making sure what reaches production is accurate and repeatable.
                </p>
                <p>
                  Alongside that, my academic and personal work covers data analysis, machine
                  learning, computer vision, cloud operations and business intelligence — from
                  training deep learning models to building dashboards that make numbers useful.
                </p>
                <p>
                  I like problems that need patience: tracing an inconsistency to its root, learning
                  a new tool quickly, documenting things properly, and working with teams to keep
                  automation workflows dependable.
                </p>
              </Reveal>
              <Reveal delay={120} className="grid grid-cols-2 gap-4 self-start">
                {[
                  { k: "2,800+", v: "Invoice mappings delivered" },
                  { k: "10 mo", v: "Enterprise experience" },
                  { k: "99.01%", v: "Model validation accuracy" },
                  { k: "7.53", v: "B.Tech CGPA" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl border border-border bg-card p-5 shadow-(--shadow-card)"
                  >
                    <p className="text-2xl font-semibold tracking-tight">{s.k}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading eyebrow="Experience" title="Where I've been building" />
            <Reveal className="relative rounded-2xl border border-border bg-card p-7 shadow-(--shadow-card) transition-shadow duration-300 hover:shadow-(--shadow-lift) sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Apprentice Engineer — PDF Mapping
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">Basware</p>
                </div>
                <p className="text-sm text-muted-foreground">Sep 2025 – Present</p>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
                <div className="rounded-xl border border-border bg-accent px-6 py-5 text-center">
                  <p className="text-4xl font-semibold tracking-tight text-accent-foreground">
                    2,800+
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    production-ready invoice mappings
                  </p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Configured and maintained invoice extraction and mapping solutions for diverse PDF invoice formats.",
                    "Performed data validation, quality assurance and business-rule verification before release.",
                    "Investigated and resolved mapping inconsistencies across customer-specific formats.",
                    "Maintained clear, current mapping documentation for internal reuse.",
                    "Collaborated with internal teams to troubleshoot enterprise automation workflows.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading eyebrow="Projects" title="Selected work" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Dialog key={p.title}>
                  <Reveal
                    delay={i * 90}
                    as="article"
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-lift)"
                  >
                    <p className="eyebrow">{p.highlight}</p>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="pill">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex gap-2">
                      <DialogTrigger asChild>
                        <Button size="sm" variant="ghost">
                          Details <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                    </div>
                  </Reveal>

                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <p className="eyebrow">{p.highlight}</p>
                      <DialogTitle className="mt-2 text-xl font-semibold tracking-tight">
                        {p.title}
                      </DialogTitle>
                      <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-5 text-sm leading-relaxed text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground">Objective</h4>
                        <p className="mt-1">{p.details.objective}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Approach</h4>
                        <p className="mt-1">{p.details.approach}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Outcome</h4>
                        <p className="mt-1">{p.details.outcome}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <li key={t} className="pill">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading eyebrow="Skills" title="What I work with" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g, i) => (
                <Reveal key={g.name} delay={i * 70}>
                  <h3 className="text-sm font-semibold tracking-tight">{g.name}</h3>
                  <div className="mt-2 h-px w-10 bg-primary" />
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="pill">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education + Focus */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeading eyebrow="Education" title="Academic background" />
              <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card)">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  Bachelor of Technology — Computer Science Engineering
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">Chandigarh University</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>2021 – 2025</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="font-medium text-foreground">CGPA 7.53</span>
                </div>
              </Reveal>
            </div>

            <div>
              <SectionHeading eyebrow="Career Focus" title="What I'm Looking For" />
              <div className="grid gap-4 sm:grid-cols-2">
                {focusAreas.map((f, i) => (
                  <Reveal
                    key={f.title}
                    delay={i * 80}
                    className="rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/40"
                  >
                    <f.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-sm font-semibold tracking-tight">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <SectionHeading eyebrow="Contact" title="Let's Build Something Meaningful" />
                <Reveal className="max-w-md space-y-6">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Interested in working together, discussing technology, or exploring an
                    opportunity? I'd be happy to connect.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Mail className="h-4 w-4" /> {EMAIL}
                      </a>
                    </li>
                    <li>
                      <a
                        href={LINKEDIN}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href={GITHUB}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    </li>
                  </ul>
                </Reveal>
              </div>

              <Reveal
                delay={120}
                className="rounded-2xl border border-border bg-card p-6 shadow-(--shadow-card) sm:p-8"
              >
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-semibold tracking-tight">Harsh Sharma</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Data Analytics · AI/ML · Cloud Operations
            </p>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Harsh Sharma</p>
        </div>
      </footer>
    </div>
  );
}
