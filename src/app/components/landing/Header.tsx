"use client";

import { ArrowRight } from "lucide-react";

export default function Header() {
  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">

        <div className="flex items-center justify-between rounded-2xl border border-zinc-200/80  px-5 py-3 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

          {/* Logo */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white">
              C
            </div>

            <div>
              <h1 className="text-sm font-semibold text-zinc-900">
                CA-IQ
              </h1>

              <p className="text-xs text-zinc-500">
                by Creonox
              </p>
            </div>
          </button>

          {/* CTA */}

          <button
            onClick={scrollToWaitlist}
            className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02]"
          >
            Join Waitlist

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

        </div>

      </div>
    </header>
  );
}