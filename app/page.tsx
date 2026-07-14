"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Language = "en" | "fr";
type ThemeMode = "dark" | "light";

type LocaleText = {
  en: string;
  fr: string;
};

const featuredProjects: Array<{
  title: LocaleText;
  summary: LocaleText;
  stack: string[];
}> = [
  {
    title: { en: "FinFlow Mobile", fr: "FinFlow Mobile" },
    summary: {
      en: "A high-performance finance app for instant budgeting, card insights, and multilingual onboarding.",
      fr: "Une application financière à haute performance pour le budgetage instantané, les indicateurs de carte et l’onboarding multilingue.",
    },
    stack: ["Flutter", "Riverpod", "Firebase"],
  },
  {
    title: { en: "CommerceOS", fr: "CommerceOS" },
    summary: {
      en: "A retail command center for omnichannel inventory workflows and live analytics dashboards.",
      fr: "Un centre de commande retail pour les flux d’inventaire omnicanal et les tableaux de bord analytiques en temps réel.",
    },
    stack: ["React Native", "TypeScript", "Node.js"],
  },
  {
    title: { en: "Atlas CMS", fr: "Atlas CMS" },
    summary: {
      en: "A resilient content platform with custom APIs, role-based access, and rapid deployment pipelines.",
      fr: "Une plateforme de contenu robuste avec des API sur mesure, un accès basé sur les rôles et des pipelines de déploiement rapides.",
    },
    stack: ["PHP", "MySQL", "Laravel"],
  },
];

const techStack = [
  "Flutter",
  "React Native",
  "Next.js",
  "TypeScript",
  "PHP",
  "MySQL",
  "Framer Motion",
  "Tailwind CSS",
];

const content = {
  en: {
    header: {
      role: "Software Engineer",
      tagline: "Mobile • Web • Product Systems",
      cta: "Let’s build",
    },
    hero: {
      badge: "Building polished products for ambitious teams",
      title:
        "I create elegant mobile and web experiences that feel as refined as they are reliable.",
      description:
        "Fullstack developer specializing in cross-platform apps with Flutter, React Native, and modern web platforms. I craft scalable, high-performance solutions using Flutter, React Native, PHP, and MySQL—with a sharp focus on clean architecture, exceptional performance, and measurable product impact.",
      primaryCta: "Explore projects",
      secondaryCta: "Learn more",
      portraitAlt: "Professional portrait",
    },
    sections: {
      projects: {
        eyebrow: "Featured work",
        title: "Selected launches with measurable product impact.",
        description:
          "Each build blends strong engineering discipline with thoughtful interaction design and fast iteration.",
        badge: "Case study",
      },
      about: {
        eyebrow: "About",
        title: "I blend product thinking with systems-level execution.",
        description:
          "I'm a fullstack developer passionate about building impactful digital products. With years of experience, I've engineered intuitive interfaces and robust APIs for fast-moving startups and established teams. My approach prioritizes clean architecture, performance optimization, and seamless user experiences.",
      },
      stack: {
        eyebrow: "Tech stack",
      },
      contact: {
        eyebrow: "Contact",
        title: "Ready to turn a bold idea into a high-quality product?",
        description:
          "Let’s discuss mobile app launches, modern web platforms, and product experiences that stand out.",
      },
    },
  },
  fr: {
    header: {
      role: "Ingénieur logiciel",
      tagline: "Mobile • Web • Systèmes produit",
      cta: "Construisons",
    },
    hero: {
      badge: "Création de produits soignés pour des équipes ambitieuses",
      title:
        "Je conçois des expériences mobiles et web élégantes, à la fois raffinées et fiables.",
      description:
        "Développeur fullstack spécialisé dans les applications cross-platform avec Flutter, React Native et les plateformes web modernes. Je crée des solutions évolutives et performantes en Flutter, React Native, PHP et MySQL, avec une attention particulière à la performance, à l'architecture propre et à l'impact produit mesurable.",
      primaryCta: "Explorer les projets",
      secondaryCta: "En savoir plus",
      portraitAlt: "Portrait professionnel",
    },
    sections: {
      projects: {
        eyebrow: "Travaux phares",
        title: "Des réalisations sélectionnées avec un impact produit mesurable.",
        description:
          "Chaque création allie une forte discipline technique à un design d’interaction réfléchi et à une itération rapide.",
        badge: "Étude de cas",
      },
      about: {
        eyebrow: "À propos",
        title: "Je fusionne la pensée produit avec une exécution orientée systèmes.",
        description:
          "J’ai construit des interfaces et des API pour des startups en croissance rapide et des équipes établies, en équilibrant toujours une forte architecture avec une expérience utilisateur fluide.",
      },
      stack: {
        eyebrow: "Stack technique",
      },
      contact: {
        eyebrow: "Contact",
        title: "Prêt à transformer une idée audacieuse en produit de haute qualité ?",
        description:
          "Discutons des lancements d’applications mobiles, des plateformes web modernes et des expériences produit qui se distinguent.",
      },
    },
  },
};

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const copy = content[language];
  const isDark = theme === "dark";
  const portraitImage = process.env.NEXT_PUBLIC_PORTRAIT_IMAGE ?? "/2.jpeg";

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${isDark ? "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_28%),linear-gradient(135deg,#030711_0%,#050816_38%,#020617_100%)] text-slate-100" : "bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_24%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_40%,#f8fafc_100%)] text-slate-900"}`}>
      <motion.div
        animate={{ x: cursorPosition.x - 180, y: cursorPosition.y - 180 }}
        transition={{ type: "spring", stiffness: 140, damping: 24, mass: 0.4 }}
        className={`pointer-events-none fixed left-0 top-0 z-0 h-90 w-90 rounded-full blur-3xl ${isDark ? "bg-cyan-400/15" : "bg-cyan-500/10"}`}
      />
      <main className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`mb-8 flex items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-colors duration-500 ${isDark ? "border-white/10 bg-white/5" : "border-slate-300/70 bg-white/70"}`}
        >
          <div>
            <p className={`text-[0.65rem] uppercase tracking-[0.35em] ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>
              {copy.header.role}
            </p>
            <p className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{copy.header.tagline}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`rounded-full border px-3 py-2 text-sm font-medium transition ${isDark ? "border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/40 hover:text-cyan-200" : "border-slate-300/70 bg-white/80 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-700"}`}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className={`rounded-full border px-3 py-2 text-sm font-medium transition ${isDark ? "border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/40 hover:text-cyan-200" : "border-slate-300/70 bg-white/80 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-700"}`}
            >
              {language === "en" ? "FR" : "EN"}
            </button>
            <a
              href="#contact"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${isDark ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20" : "border-cyan-500/40 bg-cyan-500/10 text-cyan-700 hover:bg-cyan-500/20"}`}
            >
              {copy.header.cta}
            </a>
          </div>
        </motion.header>

        <section className={`grid items-center gap-8 rounded-4xl border p-8 shadow-[0_0_80px_rgba(8,145,178,0.18)] backdrop-blur-2xl transition-colors duration-500 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12 ${isDark ? "border-white/10 bg-slate-950/70" : "border-slate-300/70 bg-white/80"}`}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="max-w-2xl"
          >
            <p className={`mb-4 inline-flex rounded-full border px-3 py-1 text-sm font-medium ${isDark ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300" : "border-cyan-500/30 bg-cyan-500/10 text-cyan-700"}`}>
              {copy.hero.badge}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>
            <p className={`mt-5 max-w-xl text-lg leading-8 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              {copy.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className={`rounded-full px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${isDark ? "bg-white text-slate-950" : "bg-slate-900 text-white"}`}
              >
                {copy.hero.primaryCta}
              </a>
              <a
                href="#about"
                className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${isDark ? "border-white/15 text-slate-200 hover:border-cyan-300/50 hover:text-cyan-200" : "border-slate-300/70 text-slate-700 hover:border-cyan-400/40 hover:text-cyan-700"}`}
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className={`absolute inset-0 -translate-x-4 -translate-y-4 rounded-4xl border blur-3xl ${isDark ? "border-cyan-400/30 bg-cyan-400/10" : "border-cyan-500/20 bg-cyan-500/10"}`} />
            <div className={`relative overflow-hidden rounded-4xl border p-3 shadow-2xl transition-colors duration-500 ${isDark ? "border-white/10 bg-slate-900/80" : "border-slate-300/70 bg-white/90"}`}>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className={`relative overflow-hidden rounded-[1.4rem] border ${isDark ? "border-white/10 bg-slate-950/80" : "border-slate-300/70 bg-slate-100"}`}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={portraitImage}
                    alt={copy.hero.portraitAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className={`rounded-[1.8rem] border p-8 backdrop-blur-xl transition-colors duration-500 ${isDark ? "border-white/10 bg-white/5" : "border-slate-300/70 bg-white/70"}`}
          >
            <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>{copy.sections.projects.eyebrow}</p>
            <h2 className={`mt-3 text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{copy.sections.projects.title}</h2>
            <p className={`mt-4 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{copy.sections.projects.description}</p>
          </motion.div>

          <div className="grid gap-4">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title.en}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`rounded-3xl border p-6 transition hover:-translate-y-1 ${isDark ? "border-white/10 bg-slate-900/80 hover:border-cyan-400/30" : "border-slate-300/70 bg-white/90 hover:border-cyan-400/40"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{project.title[language]}</h3>
                  <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.25em] ${isDark ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" : "border-emerald-500/30 bg-emerald-500/10 text-emerald-700"}`}>
                    {copy.sections.projects.badge}
                  </span>
                </div>
                <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{project.summary[language]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className={`rounded-full px-3 py-1 text-sm ${isDark ? "bg-white/8 text-slate-200" : "bg-slate-100 text-slate-700"}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`rounded-[1.8rem] border p-8 transition-colors duration-500 ${isDark ? "border-white/10 bg-linear-to-br from-cyan-400/10 to-fuchsia-400/10" : "border-slate-300/70 bg-linear-to-br from-cyan-500/10 to-fuchsia-500/10"}`}
          >
            <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>{copy.sections.about.eyebrow}</p>
            <h2 className={`mt-3 text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{copy.sections.about.title}</h2>
            <p className={`mt-4 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{copy.sections.about.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className={`rounded-[1.8rem] border p-8 transition-colors duration-500 ${isDark ? "border-white/10 bg-slate-900/80" : "border-slate-300/70 bg-white/90"}`}
          >
            <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>{copy.sections.stack.eyebrow}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className={`rounded-full border px-3 py-2 text-sm ${isDark ? "border-white/10 bg-white/5 text-slate-200" : "border-slate-300/70 bg-white/80 text-slate-700"}`}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`mt-8 rounded-4xl border p-8 text-center backdrop-blur-2xl transition-colors duration-500 ${isDark ? "border-cyan-400/20 bg-slate-950/70" : "border-cyan-500/20 bg-white/80"}`}
        >
          <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>{copy.sections.contact.eyebrow}</p>
          <h2 className={`mt-3 text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{copy.sections.contact.title}</h2>
          <p className={`mx-auto mt-4 max-w-2xl ${isDark ? "text-slate-300" : "text-slate-700"}`}>{copy.sections.contact.description}</p>
          <a
            href="mailto:hello@yourdomain.com"
            className={`mt-6 inline-flex rounded-full px-5 py-3 font-semibold transition hover:scale-[1.02] ${isDark ? "bg-cyan-400 text-slate-950" : "bg-cyan-600 text-white"}`}
          >
            nicolasdavidella@gmail.com
          </a>
        </motion.section>
      </main>
    </div>
  );
}
