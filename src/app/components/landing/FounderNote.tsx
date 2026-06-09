
"use client";

import { Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FounderNote() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-20 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-100 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">

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
          className="rounded-[40px] border border-zinc-200 bg-white p-10 shadow-sm md:p-16"
        >

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">

              <Sparkles
                size={14}
                className="text-violet-600"
              />

              <span className="text-xs font-medium tracking-wide text-violet-700">
                FOUNDER'S NOTE
              </span>

            </div>

            <div className="mt-8 flex justify-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">

                <Quote
                  size={24}
                  className="text-violet-600"
                />

              </div>

            </div>

            <h2 className="mt-8 text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Why We Started CA-IQ
            </h2>

            <div className="mt-10 space-y-6 text-left text-lg leading-8 text-zinc-600">

              <p>
                Over the last few years, I spoke with partners,
                managers and team members across CA firms.
                Regardless of firm size, the challenges were remarkably similar.
              </p>

              <p>
                Teams were managing work through spreadsheets,
                WhatsApp groups, emails and disconnected software.
                Valuable time was being spent chasing documents,
                tracking deadlines and managing operations instead of
                delivering advisory value to clients.
              </p>

              <p>
                We realized the problem wasn't a lack of effort.
                The problem was a lack of modern infrastructure built
                specifically for how Chartered Accountant firms operate.
              </p>

              <p>
                CA-IQ is our answer.
              </p>

              <p>
                We're building an AI-powered operating system that brings
                audits, compliance, workflow automation, document management,
                client collaboration and firm intelligence into a single platform.
              </p>

              <p>
                Our vision is simple:
                help CA firms spend less time managing operations and more
                time creating value for clients.
              </p>

            </div>

            <div className="mt-12 border-t border-zinc-100 pt-8">

              <h4 className="text-xl font-semibold text-zinc-900">
                Abhijeet Kulkarni
              </h4>

              <p className="mt-1 text-zinc-500">
                Founder, CA-IQ
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

