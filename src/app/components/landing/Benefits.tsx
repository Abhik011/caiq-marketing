import {
  TrendingUp,
  Clock3,
  ShieldCheck,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Save 15+ Hours Weekly",
    description:
      "Automate follow-ups, document collection and repetitive compliance workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce Compliance Risk",
    description:
      "AI continuously monitors deadlines and filing obligations across clients.",
  },
  {
    icon: Users,
    title: "Increase Team Productivity",
    description:
      "Know who is working on what and eliminate bottlenecks instantly.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Hiring",
    description:
      "Standardized workflows help firms handle more clients with existing teams.",
  },
];

export default function Benefits() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Why Firms Join CA IQ
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 p-8"
              >
                <Icon className="text-violet-400 mb-5" />

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}