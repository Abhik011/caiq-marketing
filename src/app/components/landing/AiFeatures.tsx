"use client";

import Link from "next/link";
import {
  Brain,
  ShieldCheck,
  Search,
  FileSearch,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Compliance Analyst",
    slug: "ai-compliance-analyst",
    desc: "Monitors GST, TDS, ROC and Income Tax obligations across all clients automatically.",
    badge: "Compliance",
  },
  {
    icon: FileSearch,
    title: "AI Audit Assistant",
    slug: "ai-audit-assistant",
    desc: "Reviews documents, identifies anomalies and recommends audit procedures.",
    badge: "Audit",
  },
  {
    icon: Search,
    title: "AI Document Reader",
    slug: "ai-document-reader",
    desc: "Extracts and organizes data from financial documents in seconds.",
    badge: "Documents",
  },
  {
    icon: ShieldCheck,
    title: "AI Risk Engine",
    slug: "ai-risk-engine",
    desc: "Flags missing filings, inconsistencies and operational risks before they become issues.",
    badge: "Risk",
  },
];

export default function AiFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">

      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-100 blur-[160px]" />
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
              AI POWERED
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Your AI Team Member
            <span className="block text-zinc-500">
              Working 24/7
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg md:leading-8">
            CA-IQ continuously analyzes documents,
            compliance obligations and operational workflows
            so your team can focus on delivering value.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="h-full"
              >
                <Link
                  href={`/features/${feature.slug}`}
                  className="group block h-full"
                >
                  <div
                    className="
                      flex
                      h-full
                      min-h-[290px]
                      flex-col
                      rounded-[32px]
                      border
                      border-zinc-200
                      bg-white
                      p-6
                      md:p-8
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-violet-200
                      hover:shadow-xl
                    "
                  >

                    <div className="flex items-start justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">

                        <Icon
                          size={24}
                          className="text-violet-600"
                        />

                      </div>

                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                        {feature.badge}
                      </span>

                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-zinc-900 md:text-2xl">
                      {feature.title}
                    </h3>

                    <p className="mt-4 flex-1 leading-7 text-zinc-600">
                      {feature.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-violet-600">

                      Explore Feature

                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />

                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}

        </div>

        {/* Metrics */}

        <div className="mt-16 rounded-[40px] border border-zinc-200 bg-zinc-50 p-6 md:mt-24 md:p-12">

          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

            <div>

              <h3 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                24/7
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Continuous Monitoring
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                50%
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Less Manual Work
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                10x
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Faster Reviews
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                100%
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Visibility Across Work
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
