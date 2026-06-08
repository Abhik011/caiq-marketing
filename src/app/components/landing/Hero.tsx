"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] rounded-full bg-violet-600/20 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/10 px-4 py-2 rounded-full mb-8">
            <Sparkles size={16} />
            <span>Early Access Program Open</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            The AI Operating System
            <span className="block text-violet-400">
              For CA Firms
            </span>
          </h1>

          <p className="mt-8 text-xl text-zinc-400 max-w-3xl mx-auto">
            Audit Management, Compliance Tracking,
            Client Collaboration, Workflow Automation
            and AI Intelligence — all in one platform.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <button className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold flex items-center gap-2">
              Join Waitlist
              <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-xl border border-zinc-700">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20">
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-zinc-500">CA Firms Targeted</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50%</h3>
              <p className="text-zinc-500">Less Manual Work</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-zinc-500">AI Monitoring</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}