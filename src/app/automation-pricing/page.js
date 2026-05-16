"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconCheck,
  IconBolt,
  IconRocket,
  IconBuilding,
  IconArrowRight,
  IconArrowLeft,
} from "@tabler/icons-react";

const plans = [
  {
    name: "Starter",
    tagline: "One-off automation or integration",
    price: "500",
    priceNote: "starting from",
    icon: <IconBolt size={24} />,
    color: "emerald",
    accent: "text-[#02e8a3]",
    accentBg: "bg-[#02e8a3]/10",
    borderHover: "hover:border-[#02e8a3]/40",
    features: [
      "Single workflow automation",
      "Up to 2 API integrations",
      "Basic error handling & logging",
      "1 round of revisions",
      "Deployment & handover docs",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    tagline: "Multi-step systems & dashboards",
    price: "1,500",
    priceNote: "starting from",
    icon: <IconRocket size={24} />,
    color: "sky",
    accent: "text-sky-400",
    accentBg: "bg-sky-400/10",
    borderHover: "hover:border-sky-400/40",
    popular: true,
    features: [
      "Multi-step automation pipeline",
      "Up to 5 API integrations",
      "Admin dashboard or internal tool",
      "Cron jobs & scheduled triggers",
      "Database setup (Supabase / Sheets)",
      "3 rounds of revisions",
      "30 days post-launch support",
    ],
    cta: "Let's Build",
  },
  {
    name: "Enterprise",
    tagline: "Full-scale custom SaaS or platform",
    price: "Custom",
    priceNote: "scoped to your needs",
    icon: <IconBuilding size={24} />,
    color: "violet",
    accent: "text-violet-400",
    accentBg: "bg-violet-400/10",
    borderHover: "hover:border-violet-400/40",
    features: [
      "End-to-end SaaS product build",
      "Unlimited API integrations",
      "React Native mobile companion app",
      "AI/LLM-powered features",
      "Full CI/CD & hosting setup",
      "Unlimited revisions during build",
      "60 days post-launch support",
      "Priority WhatsApp access",
    ],
    cta: "Book a Call",
  },
];

export default function AutomationPricingPage() {
  return (
    <main className="min-h-screen antialiased dark overflow-x-hidden bg-neutral-950">
      <Head>
        <title>Pricing — Naukhaiz Anjum · AI &amp; Automation</title>
        <meta name="description" content="Transparent pricing for custom automation, SaaS, and AI projects. Starter from $500, Growth from $1,500, or Enterprise custom-scoped to your needs." />
        <meta property="og:title" content="Pricing — Naukhaiz Anjum · AI & Automation" />
        <meta property="og:description" content="Transparent pricing for custom-coded automations. No platform fees, no surprises." />
        <meta property="og:type" content="website" />
      </Head>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(2,232,163,0.08)_0%,_transparent_50%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Link
            href="/automation"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-10"
          >
            <IconArrowLeft size={16} />
            Back to Automation
          </Link>

          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
              Transparent Pricing,
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#02e8a3] via-emerald-400 to-sky-400">
              No Surprises
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every project is scoped individually. These tiers give you a
            starting point — we&apos;ll nail down the exact scope and cost
            before any work begins.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`relative group rounded-3xl border ${
                  plan.popular
                    ? "border-[#02e8a3]/30 bg-[#02e8a3]/[0.03]"
                    : "border-neutral-700/50 bg-neutral-800/40"
                } backdrop-blur-sm p-8 ${plan.borderHover} transition-all duration-500 flex flex-col`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-[#02e8a3] text-neutral-950 text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-11 h-11 rounded-2xl ${plan.accentBg} ${plan.accent} flex items-center justify-center`}
                  >
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && (
                      <span className="text-neutral-400 text-lg">$</span>
                    )}
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-neutral-500 text-sm mt-1">{plan.priceNote}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <IconCheck size={16} className={`${plan.accent} mt-0.5 flex-shrink-0`} />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/+923314411708?text=Hi%20Naukhaiz,%20I%27m%20interested%20in%20the%20${plan.name}%20automation%20plan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#02e8a3] text-neutral-950 hover:shadow-[0_0_30px_rgba(2,232,163,0.3)] hover:scale-[1.02]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.cta}
                  <IconArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Note */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What if my project doesn't fit these tiers?",
                a: "No problem — these are starting points. Message me with what you need and I'll scope it properly with a fixed quote before any work starts.",
              },
              {
                q: "Do you use Make, Zapier, or n8n?",
                a: "No. Everything I build is custom-coded from scratch. That means no platform limits, no per-task pricing, and full ownership of your system.",
              },
              {
                q: "How long does a typical project take?",
                a: "Starter projects usually ship in 1-2 weeks. Growth-tier systems take 3-5 weeks. Enterprise projects are scoped individually with milestone-based timelines.",
              },
              {
                q: "Do you offer ongoing maintenance?",
                a: "Yes. After the included support period, I offer monthly maintenance retainers to keep your systems running, updated, and evolving.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 border-t border-neutral-800">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-neutral-400 mb-6">
            Ready to automate? Let&apos;s talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+923314411708?text=Hi%20Naukhaiz,%20I%20need%20a%20custom%20automation%20built."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#02e8a3] text-neutral-950 font-semibold text-sm hover:shadow-[0_0_30px_rgba(2,232,163,0.3)] transition-all"
            >
              Start a Conversation
              <IconArrowRight size={16} />
            </a>
            <Link
              href="/automation"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              <IconArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
