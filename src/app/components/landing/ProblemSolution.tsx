import {
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const problems = [
  "Missed Compliance Deadlines",
  "Endless Client Follow-Ups",
  "Audit Evidence Everywhere",
  "No Team Visibility",
  "Manual Compliance Tracking",
  "Disconnected Systems",
];

export default function ProblemSolution() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-20">
          Built Around Real CA Firm Problems
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-10">
            <h3 className="text-3xl mb-8 flex items-center gap-3">
              <AlertTriangle />
              Current Reality
            </h3>

            <div className="space-y-4">
              {problems.map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-xl bg-black/30"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-10">
            <h3 className="text-3xl mb-8 flex items-center gap-3">
              <CheckCircle2 />
              With CA IQ
            </h3>

            <div className="space-y-4">
              {problems.map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-xl bg-black/30"
                >
                  AI-powered {item} Resolution
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}