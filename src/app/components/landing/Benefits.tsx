"use client";

import {
  TrendingUp,
  Clock3,
  ShieldCheck,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Clock3,
    metric: "15+ hrs",
    title: "Save Time Every Week",
    description:
      "Automate follow-ups, document requests, reminders and recurring operational workflows.",
  },
  {
    icon: ShieldCheck,
    metric: "24/7",
    title: "Continuous Compliance Monitoring",
    description:
      "AI monitors deadlines, filings and statutory obligations across all clients.",
  },
  {
    icon: Users,
    metric: "100%",
    title: "Complete Team Visibility",
    description:
      "Know exactly who is working on what and eliminate operational bottlenecks.",
  },
  {
    icon: TrendingUp,
    metric: "2x",
    title: "Scale Without More Hiring",
    description:
      "Standardized workflows help firms serve more clients with existing teams.",
  },
];

export default function Benefits() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative overflow-hidden bg-white py-32"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-100 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Hero */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">

              <Sparkles
                size={14}
                className="text-violet-600"
              />

              <span className="text-xs font-medium tracking-wide text-violet-700">
                BUSINESS IMPACT
              </span>

            </div>

            <h2 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
              More Revenue.
              <span className="block text-violet-600">
                Less Operations.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600">
              CA-IQ helps firms reduce administrative work,
              improve compliance visibility and scale
              operations without increasing headcount.
            </p>

          </div>

          {/* Metrics */}

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-[32px] border border-zinc-200 bg-white/90 p-8 shadow-sm backdrop-blur-xl">

              <div className="text-5xl font-semibold text-zinc-900">
                15+
              </div>

              <p className="mt-3 text-zinc-500">
                Hours saved per employee every week
              </p>

            </div>

            <div className="rounded-[32px] border border-zinc-200 bg-white/90 p-8 shadow-sm backdrop-blur-xl">

              <div className="text-5xl font-semibold text-zinc-900">
                24/7
              </div>

              <p className="mt-3 text-zinc-500">
                AI-powered compliance monitoring
              </p>

            </div>

            <div className="rounded-[32px] border border-zinc-200 bg-white/90 p-8 shadow-sm backdrop-blur-xl">

              <div className="text-5xl font-semibold text-zinc-900">
                100%
              </div>

              <p className="mt-3 text-zinc-500">
                Firm-wide operational visibility
              </p>

            </div>

            <div className="rounded-[32px] border border-zinc-200 bg-white/90 p-8 shadow-sm backdrop-blur-xl">

              <div className="text-5xl font-semibold text-zinc-900">
                2x
              </div>

              <p className="mt-3 text-zinc-500">
                More clients without more hiring
              </p>

            </div>

          </div>

        </div>


        {/* Closing CTA */}

        <div className="mt-24 overflow-hidden rounded-[40px] border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-white p-12 md:p-16">

          <div className="mx-auto max-w-4xl text-center">

            <h3 className="text-4xl font-semibold text-zinc-900">
              Built For The Next Generation
              <span className="block text-violet-600">
                Of CA Firms
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Stop managing your practice through spreadsheets,
              emails and disconnected tools. Run audits,
              compliance, workflows and client collaboration
              from one AI-powered platform.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">

              <span className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
                Audit Management
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
                Compliance Automation
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
                Client Portal
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
                AI Intelligence
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
                Workflow Automation
              </span>

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}
