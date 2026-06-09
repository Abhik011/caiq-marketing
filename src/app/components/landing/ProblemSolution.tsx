"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    problem: "Missed Compliance Deadlines",
    solution:
      "AI monitors filings and alerts teams before deadlines.",
  },
  {
    problem: "Endless Client Follow-Ups",
    solution:
      "Automated document requests and reminders.",
  },
  {
    problem: "Audit Evidence Everywhere",
    solution:
      "Centralized audit workspace and evidence vault.",
  },
  {
    problem: "No Team Visibility",
    solution:
      "Real-time workload and task monitoring.",
  },
  {
    problem: "Manual Compliance Tracking",
    solution:
      "Smart compliance calendars and automation.",
  },
  {
    problem: "Disconnected Systems",
    solution:
      "One platform for audits, compliance and clients.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">

            <Sparkles
              size={14}
              className="text-violet-600"
            />

            <span className="text-xs font-medium tracking-wide text-violet-700">
              WHY CA-IQ
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Built Around Real Problems
            <span className="block text-zinc-500">
              Faced By Every CA Firm
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg md:leading-8">
            Most firms lose hundreds of productive hours every
            month managing compliance, collecting documents and
            tracking work. CA-IQ eliminates these operational
            bottlenecks.
          </p>

        </div>

        {/* Problem Cards */}

        <div className="mt-14 space-y-4 md:mt-24 md:space-y-5">

          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
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
                delay: index * 0.05,
              }}
            >
              <div
                className="
                  rounded-3xl
                  border
                  border-zinc-200
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-violet-200
                  hover:shadow-lg
                  md:p-6
                "
              >

                <div className="grid gap-4 md:grid-cols-2 md:gap-6">

                  {/* Problem */}

                  <div className="flex items-start gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 md:h-10 md:w-10 md:rounded-xl">

                      <AlertTriangle
                        size={16}
                        className="text-red-500"
                      />

                    </div>

                    <div>

                      <div className="text-xs md:text-sm text-zinc-500">
                        Current Reality
                      </div>

                      <h3 className="mt-1 text-sm font-medium leading-6 text-zinc-900 md:text-base">
                        {item.problem}
                      </h3>

                    </div>

                  </div>

                  {/* Solution */}

                  <div className="flex items-start gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 md:h-10 md:w-10 md:rounded-xl">

                      <CheckCircle2
                        size={16}
                        className="text-green-600"
                      />

                    </div>

                    <div>

                      <div className="text-xs md:text-sm text-zinc-500">
                        With CA-IQ
                      </div>

                      <h3 className="mt-1 text-sm font-medium leading-6 text-zinc-900 md:text-base">
                        {item.solution}
                      </h3>

                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Stats */}

        <div className="mt-16 rounded-[32px] border border-zinc-200 bg-zinc-50 p-6 md:mt-20 md:p-10">

          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">

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
                24/7
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Compliance Monitoring
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
                10x
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Better Operational Visibility
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}