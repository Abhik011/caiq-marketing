
"use client";

import {
  Upload,
  FileSearch,
  ShieldCheck,
  CheckSquare,
  LayoutDashboard,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Client Uploads Documents",
    description:
      "Clients securely upload financial statements, invoices, bank statements and compliance documents.",
  },
  {
    icon: FileSearch,
    title: "AI Reads & Organizes Data",
    description:
      "CA-IQ automatically extracts information, classifies documents and identifies missing records.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Analysis",
    description:
      "AI checks filings, deadlines and compliance obligations while highlighting potential risks.",
  },
  {
    icon: CheckSquare,
    title: "Workflows Trigger Automatically",
    description:
      "Tasks are assigned to team members with due dates, reminders and approval workflows.",
  },
  {
    icon: LayoutDashboard,
    title: "Partners Get Full Visibility",
    description:
      "Real-time dashboards provide a complete overview of client status, compliance and team workload.",
  },
];

export default function DayInLife() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-100 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium tracking-wide text-violet-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
            A Day In A Modern
            <span className="block text-zinc-500">
              CA Firm
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            See how CA-IQ transforms manual operations
            into automated workflows powered by AI.
          </p>

        </div>

        <div className="mx-auto mt-24 max-w-4xl">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>

                <div className="flex gap-6">

                  <div className="flex flex-col items-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">
                      <Icon
                        size={24}
                        className="text-violet-600"
                      />
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="my-3 h-20 w-px bg-zinc-200" />
                    )}

                  </div>

                  <div className="pb-10">

                    <div className="flex items-center gap-3">

                      <span className="text-sm font-medium text-violet-600">
                        STEP {index + 1}
                      </span>

                    </div>

                    <h3 className="mt-2 text-2xl font-semibold text-zinc-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-zinc-600">
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Outcome Card */}

        <div className="mx-auto mt-20 max-w-5xl rounded-[32px] border border-zinc-200 bg-zinc-50 p-10">

          <div className="grid gap-8 text-center md:grid-cols-3">

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
                AI Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-zinc-900">
                100%
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Operational Visibility
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

