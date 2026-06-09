
"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Who is CA-IQ built for?",
    a: "CA-IQ is designed for Chartered Accountant firms, audit practices, tax consultants, compliance firms and multi-partner accounting organizations looking to modernize operations.",
  },
  {
    q: "How is CA-IQ different from traditional practice management software?",
    a: "Most tools focus on task management. CA-IQ combines audit management, compliance tracking, workflow automation, document management, client collaboration and AI-powered intelligence in a single platform.",
  },
  {
    q: "Which compliances will CA-IQ support?",
    a: "CA-IQ is being designed to support GST, TDS, Income Tax, ROC filings and other statutory compliance workflows commonly managed by Indian CA firms.",
  },
  {
    q: "Will AI replace accountants?",
    a: "No. CA-IQ is designed to augment accountants, not replace them. AI handles repetitive operational work so professionals can focus on advisory, review and decision-making.",
  },
  {
    q: "Is client data secure?",
    a: "Security is a core design principle. CA-IQ is being built with enterprise-grade security, role-based access controls and secure document management practices.",
  },
  {
    q: "Can I influence the product roadmap?",
    a: "Yes. Early access members will work closely with the founding team and help prioritize features, workflows and integrations.",
  },
  {
    q: "When will early access begin?",
    a: "Founding firms on the waitlist will receive priority onboarding invitations before public availability.",
  },
  {
    q: "Why should I join the waitlist now?",
    a: "Early members receive founder pricing, priority access, direct support and an opportunity to shape the future of the platform.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-100 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">

        {/* Header */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">

            <Sparkles
              size={14}
              className="text-violet-600"
            />

            <span className="text-xs font-medium tracking-wide text-violet-700">
              FAQ
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
            Frequently Asked
            <span className="block text-zinc-500">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Everything you need to know about CA-IQ and the
            Early Access Program.
          </p>

        </div>

        {/* FAQ Items */}

        <div className="mt-20 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.q}
                layout
                className="overflow-hidden rounded-3xl border border-zinc-200 bg-white"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {faq.q}
                  </h3>

                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >
                      <div className="px-6 pb-6 text-zinc-600 leading-7">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
