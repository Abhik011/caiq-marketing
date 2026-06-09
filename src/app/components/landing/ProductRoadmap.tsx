
"use client";

import {
  Brain,
  Shield,
  Bot,
  Users,
  Workflow,
  BarChart3,
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
    <section id="vision" className="relative overflow-hidden bg-white py-32">

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-100 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium tracking-wide text-violet-700">
            PRODUCT ROADMAP
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
            Building The Future
            <span className="block text-zinc-500">
              Of CA Firms
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            We're not building another compliance tool.
            We're building the operating system for modern
            Chartered Accountant firms.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-24 max-w-5xl">

          <div className="absolute left-6 top-0 h-full w-px bg-zinc-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">

            {roadmap.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}

                  <div className="absolute left-6 top-10 h-4 w-4 rounded-full border-4 border-white bg-violet-600 shadow md:left-1/2 md:-translate-x-1/2" />

                  {/* Card */}

                  <div className="ml-16 w-full md:ml-0 md:w-[46%]">

                    <div className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl">

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-4">

                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50">
                            <Icon
                              size={22}
                              className="text-violet-600"
                            />
                          </div>

                          <div>
                            <p className="text-sm text-zinc-500">
                              {item.phase}
                            </p>

                            <h3 className="text-2xl font-semibold text-zinc-900">
                              {item.title}
                            </h3>
                          </div>

                        </div>

                        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
                          {item.status}
                        </span>

                      </div>

                      <p className="mt-6 text-zinc-600">
                        {item.description}
                      </p>

                      <div className="mt-8 grid gap-3">

                        {item.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-xl bg-zinc-50 px-4 py-3 text-sm text-zinc-700"
                          >
                            {feature}
                          </div>
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
