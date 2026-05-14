"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Spotlight from "@/components/custom/spotlight";
import MovingBorderButton from "@/components/custom/moving-border-button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from "@/components/custom/animate-on-scroll";
import {
  IconBolt,
  IconCode,
  IconRobot,
  IconApi,
  IconBrandReactNative,
  IconChartBar,
  IconMicrophone,
  IconArrowRight,
  IconDeviceMobile,
  IconCloud,
  IconTerminal2,
  IconBrain,
  IconSparkles,
  IconExternalLink,
} from "@tabler/icons-react";

// ─── Hero (dark — dramatic top) ─────────────────────────────────────────────
const Hero = () => {
  const words = [
    {
      text: "Custom",
      className:
        "font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
    },
    {
      text: "Built.",
      className:
        "font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
    },
    {
      text: "Not",
      className:
        "font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
    },
    {
      text: "Duct-Taped.",
      className: "font-bold text-[#02e8a3]",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(2,232,163,0.12)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      {/* Single subtle orb — hero only */}
      <motion.div
        className="absolute top-20 left-[20%] w-64 h-64 bg-[#02e8a3]/10 rounded-full blur-[120px]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Spotlight />

      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#02e8a3]/30 bg-[#02e8a3]/5 backdrop-blur-md mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-2 h-2 rounded-full bg-[#02e8a3] animate-pulse" />
          <span className="text-sm text-[#02e8a3] font-medium">
            AI &amp; Automation Engineer
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-400">
            I Build Systems That
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#02e8a3] via-emerald-400 to-sky-400">
            Work While You Sleep
          </span>
        </motion.h1>

        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <TypewriterEffectSmooth words={words} />
        </motion.div>

        <motion.p
          className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          No Make. No n8n. I engineer custom SaaS products and automation
          pipelines from scratch — API integrations, cron-driven workflows,
          mobile apps, and internal tools that actually scale.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <MovingBorderButton
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              btnText="See My Work"
            />
          </motion.div>
          <motion.a
            href="https://wa.me/+923314411708?text=Hi%20Naukhaiz,%20I%20need%20a%20custom%20automation%20built."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Let&apos;s Talk
            <IconArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-900" />
    </div>
  );
};

// ─── Stats ───────────────────────────────────────────────────────────────────
const Stats = () => {
  const stats = [
    { value: 3, suffix: "+", label: "Production Systems Live", icon: <IconBolt size={20} /> },
    { value: 10, suffix: "+", label: "APIs Integrated", icon: <IconApi size={20} /> },
    { value: 2, label: "Mobile Apps Shipped", icon: <IconDeviceMobile size={20} /> },
    { value: 0, label: "No-Code Tools Used", display: "Zero", icon: <IconCode size={20} /> },
  ];

  return (
    <section className="relative py-20 px-4 bg-neutral-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={i} animation="fadeUp" delay={i * 0.1}>
              <div className="relative group text-center p-6 md:p-8 rounded-2xl bg-neutral-800/60 border border-neutral-700/50 hover:border-[#02e8a3]/30 transition-all duration-500">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#02e8a3]/10 text-[#02e8a3] mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.display ? (
                      stat.display
                    ) : (
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix || ""}
                        prefix={stat.prefix || ""}
                        duration={1.5}
                      />
                    )}
                  </div>
                  <p className="text-neutral-400 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Project Card ────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const borderColors = [
    "hover:border-[#02e8a3]/40",
    "hover:border-sky-400/40",
    "hover:border-violet-400/40",
    "hover:border-amber-400/40",
  ];

  const accentColors = [
    "text-[#02e8a3]",
    "text-sky-400",
    "text-violet-400",
    "text-amber-400",
  ];

  const accentBgs = [
    "bg-[#02e8a3]/10",
    "bg-sky-400/10",
    "bg-violet-400/10",
    "bg-amber-400/10",
  ];

  const accent = accentColors[index % 4];
  const accentBg = accentBgs[index % 4];

  return (
    <AnimateOnScroll animation="fadeUp" delay={index * 0.15}>
      <div
        className={`group relative h-full rounded-3xl border border-neutral-600/40 bg-neutral-700/30 backdrop-blur-sm p-7 md:p-9 ${borderColors[index % 4]} transition-all duration-500 overflow-hidden`}
      >
        {/* Subtle top border glow */}
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent" />

        <div className="relative z-10">
          {/* Icon + Label */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`w-11 h-11 rounded-2xl ${accentBg} flex items-center justify-center`}
            >
              {project.icon(accent)}
            </div>
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${accentBg} ${accent} uppercase tracking-wider`}
            >
              {project.label}
            </span>
          </div>

          {/* Title + Link */}
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${accentBg} ${accent} hover:opacity-80 transition-opacity`}
              >
                Live <IconExternalLink size={12} />
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-neutral-300 text-sm md:text-[15px] leading-relaxed mb-7">
            {project.description}
          </p>

          {/* How it works */}
          <div className="mb-7">
            <h4
              className={`text-[11px] uppercase tracking-widest ${accent} mb-4 font-bold flex items-center gap-2`}
            >
              <IconSparkles size={14} />
              How It Works
            </h4>
            <div className="space-y-3">
              {project.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 w-6 h-6 rounded-lg ${accentBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className={`text-[11px] font-bold ${accent}`}>
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-neutral-200 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-neutral-200 border border-white/10 hover:bg-white/15 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

// ─── Projects Section ────────────────────────────────────────────────────────
const Projects = () => {
  const projects = [
    {
      title: "Voiceover & Script Pipeline",
      label: "Content Automation",
      icon: (accent) => <IconMicrophone size={20} className={accent} />,
      description:
        "End-to-end automated pipeline that turns a simple title into a fully produced voiceover — no human in the loop. Integrated with Trello boards and ElevenLabs for multi-channel content production.",
      steps: [
        "Detects a new card title in the source Trello list",
        "Runs a master prompt to generate a full script tailored to the channel's tone",
        "Passes the script to ElevenLabs with channel-specific voice configuration",
        "Uploads the finished voiceover file back to the same Trello card",
      ],
      tech: [
        "Trello API",
        "ElevenLabs API",
        "Custom Prompt Engine",
        "Node.js",
        "Webhooks",
      ],
    },
    {
      title: "Editor Pipeline Automation",
      label: "Production System",
      link: "https://editor-ops.vercel.app/marketing",
      icon: (accent) => <IconTerminal2 size={20} className={accent} />,
      description:
        "A full-scale editor workflow system managing the entire content production lifecycle — from assignment to delivery. Connects project management, voiceover, cloud storage, and automated scheduling into one unified pipeline.",
      steps: [
        "Tasks flow through Trello and ClickUp boards with automated status transitions",
        "ElevenLabs generates voiceovers, Google APIs handle cloud storage and docs",
        "Vercel Cron Jobs and GitHub Actions drive scheduled automation triggers",
        "Supabase + Google Sheets serve as the data layer for state and logging",
      ],
      tech: [
        "Trello API",
        "ClickUp API",
        "ElevenLabs",
        "Google API",
        "Service Accounts",
        "Vercel Cron",
        "GitHub Actions",
        "Supabase",
        "Google Sheets",
      ],
    },
    {
      title: "Finance Logger & Tracker",
      label: "Personal Product",
      icon: (accent) => <IconChartBar size={20} className={accent} />,
      description:
        "A personal finance tool that auto-ingests bank statement PDFs and scans email for transaction activity, then categorises everything with charts and visual breakdowns. Deployed as both a web app and a mobile app.",
      steps: [
        "Scans uploaded bank statement PDFs and parses transactions",
        "Monitors email inbox for transaction notifications and receipts",
        "Auto-categorises spending and income into custom categories",
        "Renders interactive charts and visual dashboards for insights",
      ],
      tech: [
        "React.js",
        "React Native",
        "PDF Parsing",
        "Email Scanning",
        "Charts & Viz",
        "Netlify",
      ],
    },
    {
      title: "Mobile Companion Apps",
      label: "React Native",
      icon: (accent) => <IconDeviceMobile size={20} className={accent} />,
      description:
        "Built React Native mobile apps for both the editor pipeline and the finance tracker — giving full operational control and visibility on the go.",
      steps: [
        "Cross-platform mobile apps for iOS and Android via React Native",
        "Real-time sync with the backend automation systems",
        "Push notifications for pipeline status updates and finance alerts",
      ],
      tech: ["React Native", "Expo", "REST APIs", "Push Notifications"],
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 bg-neutral-900">
      <div className="relative z-10 max-w-7xl mx-auto">
        <StaggerContainer staggerDelay={0.15}>
          <StaggerItem animation="fadeUp">
            <div className="text-center mb-20">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#02e8a3] mb-4">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                  What I&apos;ve Built
                </span>
              </h2>
              <p className="mt-5 text-neutral-400 max-w-lg mx-auto text-lg">
                Real systems running in production — not prototypes, not
                tutorials. Each one solves a real operational bottleneck.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Services / What I Can Build ─────────────────────────────────────────────
const Services = () => {
  const services = [
    {
      icon: <IconRobot size={24} />,
      title: "Workflow Automation",
      description:
        "Custom pipelines that connect your tools — Trello, ClickUp, Google Workspace, ElevenLabs, and more. No drag-and-drop builders, just clean, reliable code.",
      iconBg: "bg-emerald-500/10 text-emerald-400",
    },
    {
      icon: <IconCode size={24} />,
      title: "Custom SaaS Products",
      description:
        "Full-stack web applications tailored to your operations. From internal dashboards to client-facing platforms, built with React, Next.js, and modern infrastructure.",
      iconBg: "bg-sky-500/10 text-sky-400",
    },
    {
      icon: <IconDeviceMobile size={24} />,
      title: "Mobile Apps",
      description:
        "React Native apps that put your automation in your pocket. Cross-platform, real-time synced, and built to complement your backend systems.",
      iconBg: "bg-violet-500/10 text-violet-400",
    },
    {
      icon: <IconBrain size={24} />,
      title: "AI-Powered Pipelines",
      description:
        "LLM-driven content generation, voiceover synthesis, document parsing, and intelligent categorisation — integrated directly into your workflow.",
      iconBg: "bg-rose-500/10 text-rose-400",
    },
    {
      icon: <IconApi size={24} />,
      title: "API Integration",
      description:
        "I connect the APIs you already use into a unified system. Webhooks, cron jobs, service accounts — wired together with proper error handling and monitoring.",
      iconBg: "bg-amber-500/10 text-amber-400",
    },
    {
      icon: <IconChartBar size={24} />,
      title: "Data & Analytics Tools",
      description:
        "Custom dashboards, finance trackers, PDF parsers, and email scanners that give you actionable visibility into your operations and finances.",
      iconBg: "bg-cyan-500/10 text-cyan-400",
    },
  ];

  return (
    <section className="relative py-24 px-4" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#02e8a3] mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
                What I Can Build For You
              </span>
            </h2>
            <p className="mt-5 text-neutral-300 max-w-xl mx-auto text-lg">
              Every solution is engineered from scratch. No templates, no
              no-code platforms — just production-grade software.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} animation="scaleUp" delay={i * 0.08}>
              <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-7 hover:border-white/20 hover:bg-white/[0.1] transition-all duration-500 overflow-hidden">
                {/* Top edge highlight */}
                <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Tech Stack ──────────────────────────────────────────────────────────────
const TechStack = () => {
  const categories = [
    {
      title: "APIs & Integrations",
      icon: <IconApi size={20} />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      borderHover: "group-hover:border-emerald-400/30",
      items: [
        "Trello",
        "ClickUp",
        "ElevenLabs",
        "Google APIs",
        "Service Accounts",
      ],
    },
    {
      title: "Infrastructure",
      icon: <IconCloud size={20} />,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
      borderHover: "group-hover:border-sky-400/30",
      items: [
        "Vercel Cron Jobs",
        "GitHub Actions",
        "Supabase",
        "Netlify",
        "Google Sheets as DB",
      ],
    },
    {
      title: "Frontend & Mobile",
      icon: <IconBrandReactNative size={20} />,
      color: "text-violet-400",
      bg: "bg-violet-400/10",
      borderHover: "group-hover:border-violet-400/30",
      items: ["React.js", "Next.js", "React Native", "Expo"],
    },
    {
      title: "AI & Automation",
      icon: <IconBrain size={20} />,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      borderHover: "group-hover:border-amber-400/30",
      items: [
        "LLM Prompt Engineering",
        "Custom Script Engines",
        "PDF Parsing",
        "Email Scanning",
        "Webhook Orchestration",
      ],
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-neutral-900">
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#02e8a3] mb-4">
              Stack
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200">
                Tech I Work With
              </span>
            </h2>
            <p className="mt-5 text-neutral-300 max-w-lg mx-auto text-lg">
              I pick the right tool for the job — and when one doesn&apos;t
              exist, I build it.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <AnimateOnScroll key={i} animation="fadeUp" delay={i * 0.1}>
              <div
                className={`group rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-sm p-7 ${cat.borderHover} hover:bg-white/[0.12] transition-all duration-500`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center`}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-sm px-4 py-2 rounded-xl bg-white/[0.08] text-neutral-200 border border-white/10 hover:bg-white/[0.15] transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CTA ─────────────────────────────────────────────────────────────────────
const CTA = () => {
  return (
    <section className="relative py-32 px-4 bg-neutral-950">
      <AnimateOnScroll animation="fadeUp">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#02e8a3]/25 to-emerald-500/10 border border-[#02e8a3]/30 mb-10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconBolt size={36} className="text-[#02e8a3]" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200">
              Got a Process That
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#02e8a3] via-emerald-400 to-sky-400">
              Needs Automating?
            </span>
          </h2>

          <p className="text-neutral-200 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Tell me what you&apos;re doing manually and I&apos;ll show you how
            to make it run on autopilot — with custom-built software, not
            duct-taped no-code tools.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <MovingBorderButton
                onClick={() =>
                  window.open(
                    "https://wa.me/+923314411708?text=Hi%20Naukhaiz,%20I%20need%20a%20custom%20automation%20built.",
                    "_blank"
                  )
                }
                btnText="Start a Conversation"
              />
            </motion.div>
            <Link
              href="/automation-pricing"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-white/20 hover:border-white/25 transition-all text-sm font-medium"
            >
              View Pricing
              <IconArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────
export default function AutomationPage() {
  return (
    <main className="min-h-screen antialiased dark overflow-x-hidden">
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <TechStack />
      <CTA />
    </main>
  );
}
