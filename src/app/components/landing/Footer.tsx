
"use client";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white">

      {/* Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-violet-100 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* CTA */}

        <div className="border-b border-zinc-200 py-20 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">

            <Sparkles
              size={14}
              className="text-violet-600"
            />

            <span className="text-xs font-medium tracking-wide text-violet-700">
              EARLY ACCESS OPEN
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
            Ready To Modernize
            <span className="block text-zinc-500">
              Your CA Firm?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Join the first group of firms helping shape
            the future of AI-powered practice management.
          </p>

          <button className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]">

            Join Waitlist

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />

          </button>

        </div>

        {/* Footer Grid */}

        <div className="grid gap-12 py-16 md:grid-cols-4">

          {/* Brand */}

          <div className="md:col-span-2">

            <h3 className="text-2xl font-semibold text-zinc-900">
              CA-IQ
            </h3>

            <p className="mt-4 max-w-md leading-7 text-zinc-600">
              The AI-powered operating system for Chartered Accountant
              firms. Streamline audits, compliance, workflows, client
              collaboration and firm intelligence from one platform.
            </p>

            <div className="mt-6">

              <p className="text-sm font-medium text-zinc-900">
                A Product of Creonox Technologies
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Building next-generation AI and enterprise software solutions.
              </p>

            </div>

          </div>

          {/* Product */}

          <div>

            <h4 className="font-semibold text-zinc-900">
              Product
            </h4>

            <ul className="mt-4 space-y-3 text-zinc-600">

              <li>Audit Hub</li>
              <li>Compliance Center</li>
              <li>Client Portal</li>
              <li>Workflow Automation</li>
              <li>AI Intelligence</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4 className="font-semibold text-zinc-900">
              Company
            </h4>

            <ul className="mt-4 space-y-3 text-zinc-600">

              <li>About</li>
              <li>Roadmap</li>
              <li>FAQ</li>
              <li>Contact</li>

            </ul>



          </div>

        </div>


        {/* Bottom */}

        <div className="flex flex-col gap-6 border-t border-zinc-200 py-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="text-sm text-zinc-500">
            © 2026 CA-IQ. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">

            <a
              href="/privacy"
              className="hover:text-zinc-900 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="hover:text-zinc-900 transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="mailto:hello@creonox.com"
              className="hover:text-violet-600 transition-colors"
            >
              hello@creonox.com
            </a>

            <a
              href="tel:+919876543210"
              className="hover:text-violet-600 transition-colors"
            >
              +91 98765 43210
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
