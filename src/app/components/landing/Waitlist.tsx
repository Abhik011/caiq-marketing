"use client";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Founder Pricing Forever",
  "Priority Product Access",
  "Direct Founder Support",
  "Influence Product Roadmap",
];

export default function Waitlist() {
  const [loading, setLoading] = useState(false);

  const spotsClaimed = 23;
  const totalSpots = 100;
  const progress = (spotsClaimed / totalSpots) * 100;


  const [fullName, setFullName] = useState("");
  const [firmName, setFirmName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [firmSize, setFirmSize] = useState("");
  const [clientsManaged, setClientsManaged] = useState("");
  const [softwareStack, setSoftwareStack] = useState("");
  const [challenge, setChallenge] = useState("");

  const handleSubmit = async () => {
    if (
      !fullName ||
      !firmName ||
      !email ||
      !whatsapp
    ) {
      toast.error(
        "Please fill all required fields"
      );
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("waitlist")
        .insert([
          {
            full_name: fullName,
            firm_name: firmName,
            email,
            whatsapp,
            firm_size: firmSize,
            clients_managed: clientsManaged,
            software_stack: softwareStack,
            challenge,
          },
        ]);

      if (error) throw error;

      toast.success(
        "Application submitted successfully!"
      );

      setFullName("");
      setFirmName("");
      setEmail("");
      setWhatsapp("");
      setFirmSize("");
      setClientsManaged("");
      setSoftwareStack("");
      setChallenge("");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="waitlist" className="relative overflow-hidden bg-white py-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-100 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
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
            Help shape the future of AI-powered practice
            management and gain exclusive early access to
            CA-IQ before public launch.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            
          >
            <div className="rounded-[36px] border border-zinc-200 bg-white/80 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
                {spotsClaimed} / {totalSpots} Founding Firm
                Spots Claimed
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-violet-100">
                <div
                  className="h-full rounded-full bg-violet-600 transition-all duration-1000"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-zinc-900">
                Why Join Early?
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Become part of the founding community and
                help build the operating system designed
                specifically for modern Chartered
                Accountant firms.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-50 px-3 py-1 text-sm text-violet-700">
                  Audit Firms
                </span>

                <span className="rounded-full bg-violet-50 px-3 py-1 text-sm text-violet-700">
                  Tax Consultants
                </span>

                <span className="rounded-full bg-violet-50 px-3 py-1 text-sm text-violet-700">
                  Compliance Practices
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-violet-600"
                    />

                    <span className="text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-zinc-50 p-5">
                  <Clock3
                    size={18}
                    className="mb-3 text-violet-600"
                  />

                  <div className="text-3xl font-semibold text-zinc-900">
                    15+
                  </div>

                  <div className="mt-1 text-sm text-zinc-500">
                    Hours Saved Per Employee
                  </div>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <ShieldCheck
                    size={18}
                    className="mb-3 text-violet-600"
                  />

                  <div className="text-3xl font-semibold text-zinc-900">
                    24/7
                  </div>

                  <div className="mt-1 text-sm text-zinc-500">
                    Compliance Monitoring
                  </div>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <Users
                    size={18}
                    className="mb-3 text-violet-600"
                  />

                  <div className="text-3xl font-semibold text-zinc-900">
                    100%
                  </div>

                  <div className="mt-1 text-sm text-zinc-500">
                    Firm Visibility
                  </div>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-5">
                  <TrendingUp
                    size={18}
                    className="mb-3 text-violet-600"
                  />

                  <div className="text-3xl font-semibold text-zinc-900">
                    2x
                  </div>

                  <div className="mt-1 text-sm text-zinc-500">
                    Client Capacity
                  </div>
                </div>
              </div>


            </div>
          </motion.div>

          {/* Right Side */}

         <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <div
    className="
      rounded-[36px]
      border
      border-zinc-200
      bg-white/80
      p-6
      md:p-8
      lg:p-10
      backdrop-blur-xl
      shadow-[0_20px_60px_rgba(0,0,0,0.06)]
    "
  >
    <h3 className="text-2xl font-semibold text-zinc-900">
      Apply For Early Access
    </h3>

    <p className="mt-2 text-zinc-600">
      Tell us a bit about your firm and we'll reach out when
      onboarding begins.
    </p>

    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-700">
          Full Name *
        </label>

        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Harshal Kulkarni"
          className="w-full min-w-0 rounded-2xl border border-zinc-200 px-4 py-4 text-zinc-900 outline-none transition focus:border-violet-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-700">
          Firm Name *
        </label>

        <input
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
          placeholder="ABC & Associates"
          className="w-full min-w-0 rounded-2xl border border-zinc-200 px-4 py-4 text-zinc-900 outline-none transition focus:border-violet-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-700">
          Work Email *
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="partner@firm.com"
          className="w-full min-w-0 rounded-2xl border border-zinc-200 px-4 py-4 text-zinc-900 outline-none transition focus:border-violet-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-700">
          WhatsApp Number *
        </label>

        <input
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="+91 9876543210"
          className="w-full min-w-0 rounded-2xl border border-zinc-200 px-4 py-4 text-zinc-900 outline-none transition focus:border-violet-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-700">
          Firm Size
        </label>

        <select
          value={firmSize}
          onChange={(e) => setFirmSize(e.target.value)}
          className="w-full min-w-0 rounded-2xl border border-zinc-200 px-4 py-4 text-zinc-900 outline-none"
        >
          <option value="">Select Firm Size</option>
          <option value="1-5">1–5 Employees</option>
          <option value="6-20">6–20 Employees</option>
          <option value="21-50">21–50 Employees</option>
          <option value="50+">50+ Employees</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-700">
          Clients Managed
        </label>

        <select
          value={clientsManaged}
          onChange={(e) => setClientsManaged(e.target.value)}
          className="w-full min-w-0 rounded-2xl border border-zinc-200 px-4 py-4 text-zinc-900 outline-none"
        >
          <option value="">Select Range</option>
          <option value="1-50">1–50</option>
          <option value="51-200">51–200</option>
          <option value="201-500">201–500</option>
          <option value="500+">500+</option>
        </select>
      </div>
    </div>

    <div className="mt-5">
      <label className="mb-2 block text-sm font-medium text-zinc-700">
        Current Software Stack
      </label>

      <select
        value={softwareStack}
        onChange={(e) => setSoftwareStack(e.target.value)}
        className="w-full min-w-0 rounded-2xl border border-zinc-200 px-4 py-4 text-zinc-900 outline-none"
      >
        <option value="">Select Software</option>
        <option value="Excel + WhatsApp">Excel + WhatsApp</option>
        <option value="Tally">Tally</option>
        <option value="Zoho">Zoho</option>
        <option value="Custom ERP">Custom ERP</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="mt-5">
      <label className="mb-2 block text-sm font-medium text-zinc-700">
        Biggest Operational Challenge
      </label>

      <textarea
        rows={4}
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
        placeholder="Tell us about your current workflow challenges..."
        className="w-full min-w-0 rounded-2xl border border-zinc-200 p-4 text-zinc-900 outline-none transition focus:border-violet-400"
      />
    </div>

    <button
      onClick={handleSubmit}
      disabled={loading}
      className="group mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 py-4 text-sm font-medium text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading
        ? "Submitting..."
        : "Join Founding Firms Program"}

      <ArrowRight
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </button>

    <p className="mt-3 text-center text-xs text-zinc-500">
      Average application review: 24–48 hours
    </p>

    <p className="mt-4 text-center text-sm text-zinc-500">
      No spam. No commitments. We'll only contact you
      regarding CA-IQ early access.
    </p>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}