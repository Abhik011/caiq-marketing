
"use client";

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
    desc: "Monitors GST, TDS, ROC and tax obligations across all clients automatically.",
  },
  {
    icon: FileSearch,
    title: "AI Audit Assistant",
    desc: "Reviews documents, identifies anomalies and suggests audit procedures.",
  },
  {
    icon: Search,
    title: "AI Document Reader",
    desc: "Extracts and organizes information from financial documents in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "AI Risk Engine",
    desc: "Flags missing filings, inconsistencies and operational risks before they become issues.",
  },
];

export default function AiFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-100 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">

            <Sparkles size={14} className="text-violet-600" />

            <span className="text-xs font-medium tracking-wide text-violet-700">
              AI POWERED
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
            Your AI Team Member
            <span className="block text-zinc-500">
              Working 24/7
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            CA-IQ continuously analyzes documents,
            compliance obligations and operational workflows
            so your team can focus on delivering value.
          </p>

        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-2">
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
                className="group h-full"
              >
                <div
                  className="
            h-full
            min-h-[280px]
            rounded-[32px]
            border
            border-zinc-200
            bg-white
            p-8
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-violet-200
            hover:shadow-xl
            flex
            flex-col
          "
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">
                    <Icon
                      size={24}
                      className="text-violet-600"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-zinc-900">
                    {feature.title}
                  </h3>

                  <p
                    className="
              mt-4
              min-h-[72px]
              leading-7
              text-zinc-600
            "
                  >
                    {feature.desc}
                  </p>

                  <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium text-violet-600">
                    Learn More

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Metrics */}

        <div className="mt-24 rounded-[40px] border border-zinc-200 bg-zinc-50 p-12">

          <div className="grid gap-10 md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-semibold text-zinc-900">
                24/7
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Continuous Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-zinc-900">
                50%
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Less Manual Work
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-zinc-900">
                10x
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Faster Reviews
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-zinc-900">
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

