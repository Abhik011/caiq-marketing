import {
  Brain,
  ShieldCheck,
  Search,
  FileSearch,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Compliance Monitoring",
    desc: "Automatically detects filing risks and missed deadlines.",
  },
  {
    icon: FileSearch,
    title: "AI Audit Assistant",
    desc: "Suggests procedures and identifies missing evidence.",
  },
  {
    icon: Search,
    title: "Document Intelligence",
    desc: "Extract data from PDFs and financial documents.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Detection",
    desc: "Spot anomalies before they become problems.",
  },
];

export default function AiFeatures() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          AI Built For Accountants
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="border border-zinc-800 rounded-3xl p-8"
              >
                <Icon className="mb-6 text-violet-400" />

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-zinc-500 mt-3">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}