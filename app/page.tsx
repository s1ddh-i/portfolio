"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "La La Land",
    subtitle: "Web Experience",
    description: "A visually styled web page inspired by the dreamy aesthetic of La La Land. Immersive UI with smooth layouts and cinematic design elements.",
    link: "https://s1ddh-i.github.io/lalaland/",
    color: "from-amber-500/20 to-rose-500/20"
  },
  {
    title: "MyPay",
    subtitle: "UI Frontend",
    description: "A modern fintech UI prototype with smooth interactions, scroll-based storytelling, and clean visual hierarchy.",
    link: "https://s1ddh-i.github.io/my-pay-ui-frontend/",
    color: "from-emerald-500/20 to-cyan-500/20"
  },
  {
    title: "Birthday Love Letter",
    subtitle: "Web Experience",
    description: "A heartfelt birthday website built with pure HTML, CSS, and JavaScript. No frameworks. Just vibes, animation, and feelings.",
    link: "https://s1ddh-i.github.io/",
    color: "from-pink-500/20 to-purple-500/20"
  }
]

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Design",
    skills: ["Figma", "Adobe Photoshop", "Canva", "UI/UX Principles", "Typography", "Color Theory"]
  },
  {
    title: "Creative",
    skills: ["Motion Design", "Web Animation", "Visual Storytelling", "Creative Coding", "Digital Branding"]
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "API Integration", "Design Systems", "CMS / WordPress", "Performance Optimization"]
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6"
      >
        <Link href="/" className="text-foreground font-medium tracking-wide">
          SK.
        </Link>
        <div className="flex items-center gap-8">
          <Link href="#work" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Work
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            About
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Contact
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-accent text-sm md:text-base tracking-widest uppercase mb-8"
          >
            Creative Developer
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight"
          >
            <span className="text-accent text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]">S</span>iddhi
            <br />
            <span className="text-muted-foreground">Kothari</span>
            <span className="text-accent">.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 md:mt-12 text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Crafting digital experiences where visuals, motion, and emotion dance together with purpose.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 text-foreground/60 text-base md:text-lg"
          >
            Basically, I make websites.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-12 left-6 md:left-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-2xl" />
              <Image
                src="/images/siddhi.png"
                alt="Siddhi Kothari"
                width={500}
                height={600}
                className="relative rounded-2xl object-cover w-full aspect-[4/5]"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              About<span className="text-accent">.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a creative developer, I design bespoke web experiences, blending technical precision with emotion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I craft digital experiences that feel alive — where visuals, motion, and emotion work together with purpose. I&apos;m Siddhi, a creative mind drawn to building immersive spaces on the web, always exploring the balance between aesthetics, storytelling, and human connection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Selected Work<span className="text-accent">.</span>
            </h2>
            <p className="text-muted-foreground">
              Each project is an opportunity to learn, experiment, and push my limits.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block relative overflow-hidden rounded-2xl bg-secondary/50 p-8 md:p-12 hover:bg-secondary transition-colors duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-accent text-sm tracking-widest uppercase mb-2">{project.subtitle}</p>
                    <h3 className="font-serif text-3xl md:text-4xl mb-3">{project.title}</h3>
                    <p className="text-muted-foreground max-w-lg">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-foreground group-hover:text-accent transition-colors">
                    <span className="text-sm">View Project</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Skills<span className="text-accent">.</span>
            </h2>
            <p className="text-muted-foreground">
              Creative developer with a passion for design and development.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-accent text-sm tracking-widest uppercase">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              Let&apos;s Create Together<span className="text-accent">.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Available for freelance projects and collaborations worldwide. Let&apos;s bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="mailto:siddhikothari.gg@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>siddhikothari.gg@gmail.com</span>
            </a>
            <a
              href="https://github.com/s1ddh-i"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/siddhi-kothari29"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Siddhi Kothari
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Built with ♥
          </p>
        </div>
      </footer>
    </main>
  )
}
