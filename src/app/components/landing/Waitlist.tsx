"use client";

import { useState } from "react";

export default function Waitlist() {
  const [loading, setLoading] = useState(false);

  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border border-zinc-800 rounded-3xl p-12">

          <h2 className="text-5xl font-bold text-center">
            Join The Early Access Program
          </h2>

          <p className="text-center text-zinc-500 mt-4">
            Be among the first CA firms to experience CA IQ.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-10">

            <input
              placeholder="Full Name"
              className="bg-zinc-900 rounded-xl p-4"
            />

            <input
              placeholder="Firm Name"
              className="bg-zinc-900 rounded-xl p-4"
            />

            <input
              placeholder="Email"
              className="bg-zinc-900 rounded-xl p-4"
            />

            <input
              placeholder="Mobile"
              className="bg-zinc-900 rounded-xl p-4"
            />

          </div>

          <textarea
            rows={5}
            placeholder="Tell us your biggest challenge..."
            className="w-full mt-5 bg-zinc-900 rounded-xl p-4"
          />

          <button
            disabled={loading}
            className="w-full mt-6 bg-violet-600 py-4 rounded-xl font-semibold"
          >
            Reserve My Spot
          </button>

        </div>

      </div>
    </section>
  );
}