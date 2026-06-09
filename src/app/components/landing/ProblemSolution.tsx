
"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    problem: "Missed Compliance Deadlines",
    solution: "AI monitors filings and alerts teams before deadlines.",
  },
  {
    problem: "Endless Client Follow-Ups",
    solution: "Automated document requests and reminders.",
  },
  {
    problem: "Audit Evidence Everywhere",
    solution: "Centralized audit workspace and evidence vault.",
  },
  {
    problem: "No Team Visibility",
    solution: "Real-time workload and task monitoring.",
  },
  {
    problem: "Manual Compliance Tracking",
    solution: "Smart compliance calendars and automation.",
  },
  {
    problem: "Disconnected Systems",
    solution: "One platform for audits, compliance and clients.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium tracking-wide text-violet-700">
            WHY CA-IQ
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
            Built Around Real Problems
            <span className="block text-zinc-500">
              Faced By Every CA Firm
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Most firms lose hundreds of productive hours every month
            managing compliance, collecting documents and tracking work.
            CA-IQ eliminates these operational bottlenecks.
          </p>
        </div>

        <div className="mt-24 grid gap-5">

          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="grid items-center gap-6 rounded-3xl border border-zinc-200 bg-white p-6 transition-all hover:border-violet-200 hover:shadow-lg md:grid-cols-2">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                    <AlertTriangle
                      size={18}
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <div className="text-sm text-zinc-500">
                      Current Reality
                    </div>

                    <h3 className="font-medium text-zinc-900">
                      {item.problem}
                    </h3>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <div className="text-sm text-zinc-500">
                      With CA-IQ
                    </div>

                    <h3 className="font-medium text-zinc-900">
                      {item.solution}
                    </h3>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        <div className="mt-20 rounded-[32px] border border-zinc-200 bg-zinc-50 p-10 text-center">

          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <h3 className="text-3xl font-semibold text-zinc-900">
                50%
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Less Manual Work
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-zinc-900">
                24/7
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Compliance Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-zinc-900">
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

