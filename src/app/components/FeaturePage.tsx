"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface FeaturePageProps {
  badge: string;
  title: string;
  description: string;
  benefits: string[];
}

export default function FeaturePage({
  badge,
  title,
  description,
  benefits,
}: FeaturePageProps) {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="relative overflow-hidden py-32 pt-20">

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-100 blur-[160px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900"
          >
            <ArrowLeft size={16} />
            Back To Home
          </Link>

          <div className="mt-10">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">

              <Sparkles
                size={14}
                className="text-violet-600"
              />

              <span className="text-xs font-medium tracking-wide text-violet-700">
                {badge}
              </span>

            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
              {title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
              {description}
            </p>

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="pb-32 pt-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-6 md:grid-cols-2">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={20}
                    className="text-violet-600"
                  />

                  <span className="font-medium text-zinc-900">
                    {benefit}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}