
"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const scrollToVision = () => {
    document
      .getElementById("vision")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  return (
    <section className="relative min-h-screen overflow-hidden bg-white flex items-center pt-5">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-20 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute right-20 top-32 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute left-20 bottom-32 h-72 w-72 rounded-full bg-blue-100 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm"
          >
            <Sparkles size={14} className="text-violet-600" />

            <span className="text-xs font-medium tracking-wide text-zinc-700">
              EARLY ACCESS NOW OPEN
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl"
          >
            The AI Operating System
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              for CA Firms
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg"
          >
            Audit management, compliance automation,
            client collaboration and AI-powered workflows —
            built specifically for modern Chartered Accountant firms.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={scrollToWaitlist}
              className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02]"
            >
              Join Waitlist

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={scrollToVision}
              className="rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
            >
              View Product Vision
            </button>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-24 grid max-w-3xl grid-cols-3 gap-8 border-t border-zinc-100 pt-10"
          >
            <div>
              <div className="text-2xl font-semibold text-zinc-900">
                500+
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Firms Targeted
              </div>
            </div>

            <div>
              <div className="text-2xl font-semibold text-zinc-900">
                50%
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Less Manual Work
              </div>
            </div>

            <div>
              <div className="text-2xl font-semibold text-zinc-900">
                24/7
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                AI Monitoring
              </div>
            </div>
          </motion.div> */}

        </div>
      </div>
    </section>
  );
}

