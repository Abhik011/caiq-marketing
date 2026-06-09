"use client";

import {
  Brain,
  Shield,
  Bot,
  Users,
  Workflow,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Q3 2026",
    status: "Early Access",
    title: "Core Firm Operations",
    description:
      "Launch the foundation for modern CA firms.",
    icon: Shield,
    features: [
      "Audit Hub",
      "Compliance Center",
      "AI Compliance Engine",
      "AI Audit Assistant",
    ],
  },
  {
    phase: "Q4 2026",
    status: "Coming Next",
    title: "Collaboration Layer",
    description:
      "Connect teams, clients and workflows.",
    icon: Users,
    features: [
      "Client Portal",
      "Document Vault",
      "Knowledge Base",
      "Task Automation",
    ],
  },
  {
    phase: "Q1 2027",
    status: "Planned",
    title: "Workflow Automation",
    description:
      "Automate repetitive operational work.",
    icon: Workflow,
    features: [
      "Recurring Compliance Flows",
      "Approval Workflows",
      "Document Requests",
      "Reminder Automation",
    ],
  },
  {
    phase: "Q2 2027",
    status: "Future Vision",
    title: "AI Powered Firm",
    description:
      "AI becomes a true team member inside your practice.",
    icon: Brain,
    features: [
      "AI Client Manager",
      "AI Audit Reviewer",
      "AI Compliance Analyst",
      "AI Knowledge Assistant",
    ],
  },
  {
    phase: "Q3 2027",
    status: "Future Vision",
    title: "Firm Intelligence",
    description:
      "Run your practice using real-time business intelligence.",
    icon: BarChart3,
    features: [
      "Profitability Insights",
      "Resource Planning",
      "Revenue Analytics",
      "Growth Forecasting",
    ],
  },
];

export default function ProductRoadmap() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-100 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">

            <Sparkles
              size={14}
              className="text-violet-600"
            />

            <span className="text-xs font-medium tracking-wide text-violet-700">
              PRODUCT ROADMAP
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Building The Future
            <span className="block text-zinc-500">
              Of CA Firms
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg md:leading-8">
            We're not building another compliance tool.
            We're building the operating system for modern
            Chartered Accountant firms.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-16 max-w-6xl md:mt-24">

          {/* Timeline Line */}

          <div
            className="
              absolute
              left-4
              top-0
              h-full
              w-px
              -translate-x-1/2
              bg-zinc-200
              md:left-1/2
            "
          />

          <div className="space-y-8 md:space-y-12">

            {roadmap.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.phase}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Dot */}

                  <div
                    className="
                      absolute
                      left-4
                      top-8
                      z-20
                      h-4
                      w-4
                      -translate-x-1/2
                      rounded-full
                      border-4
                      border-white
                      bg-violet-600
                      shadow
                      md:left-1/2
                    "
                  />

                  {/* Card */}

                  <div
                    className="
                      ml-10
                      w-full
                      md:ml-0
                      md:w-[44%]
                      lg:w-[42%]
                    "
                  >
                    <div
                      className="
                        rounded-3xl
                        border
                        border-zinc-200
                        bg-white/90
                        p-5
                        md:p-7
                        backdrop-blur-xl
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                      "
                    >
                      {/* Top */}

                      <div className="flex items-start justify-between gap-3">

                        <div className="flex items-start gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 md:h-12 md:w-12 md:rounded-2xl">

                            <Icon
                              size={20}
                              className="text-violet-600"
                            />

                          </div>

                          <div>

                            <p className="text-xs text-zinc-500 md:text-sm">
                              {item.phase}
                            </p>

                            <h3 className="mt-1 text-lg font-semibold text-zinc-900 md:text-2xl">
                              {item.title}
                            </h3>

                          </div>

                        </div>

                        <span
                          className="
                            hidden
                            rounded-full
                            bg-violet-50
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-violet-700
                            sm:inline-flex
                          "
                        >
                          {item.status}
                        </span>

                      </div>

                      {/* Mobile Badge */}

                      <span
                        className="
                          mt-4
                          inline-flex
                          rounded-full
                          bg-violet-50
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-violet-700
                          sm:hidden
                        "
                      >
                        {item.status}
                      </span>

                      {/* Description */}

                      <p className="mt-4 text-sm leading-6 text-zinc-600 md:text-base md:leading-7">
                        {item.description}
                      </p>

                      {/* Features */}

                      <div className="mt-5 flex flex-wrap gap-2">

                        {item.features.map((feature) => (
                          <span
                            key={feature}
                            className="
                              rounded-full
                              bg-zinc-100
                              px-3
                              py-1.5
                              text-xs
                              text-zinc-700
                              md:text-sm
                            "
                          >
                            {feature}
                          </span>
                        ))}

                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}