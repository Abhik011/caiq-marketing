
"use client";

import {
  Crown,
  Rocket,
  Users,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Crown,
    title: "Founder Pricing",
    description:
      "Lock in exclusive pricing before public launch and future plan increases.",
  },
  {
    icon: MessageSquare,
    title: "Shape The Product",
    description:
      "Directly influence features, workflows and integrations based on your firm's needs.",
  },
  {
    icon: Rocket,
    title: "Priority Access",
    description:
      "Get onboarded first and gain access to new features before everyone else.",
  },
  {
    icon: Users,
    title: "Direct Founder Support",
    description:
      "Work closely with our team to streamline operations and maximize adoption.",
  },
];

export default function EarlyAccessBenefits() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-100 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="rounded-[40px] border border-violet-200 bg-gradient-to-b from-violet-50 to-white p-10 md:p-16"
        >

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2">

              <Sparkles
                size={14}
                className="text-violet-600"
              />

              <span className="text-xs font-medium tracking-wide text-violet-700">
                EARLY ACCESS PROGRAM
              </span>

            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
              Join The First
              <span className="block text-violet-600">
                100 Founding Firms
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Become an early partner and help shape the future
              of AI-powered practice management for Chartered
              Accountant firms.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
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
                >
                  <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50">

                      <Icon
                        size={22}
                        className="text-violet-600"
                      />

                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {item.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* Bottom CTA */}

          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">

            <div className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
              Limited Early Access Spots Available
            </div>

            <button className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]">

              Reserve Your Spot

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

