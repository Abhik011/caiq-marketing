const steps = [
  {
    title: "Client Uploads Documents",
    description:
      "Documents are uploaded through the client portal.",
  },
  {
    title: "AI Reads Documents",
    description:
      "Financial statements, invoices and reports are analyzed automatically.",
  },
  {
    title: "Compliance Engine Checks Requirements",
    description:
      "Potential issues and missing filings are detected.",
  },
  {
    title: "Tasks Are Assigned",
    description:
      "Relevant team members receive action items automatically.",
  },
  {
    title: "Partner Dashboard Updates",
    description:
      "Partners get real-time visibility across all clients.",
  },
];

export default function DayInLife() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          A Day In A Modern CA Firm
        </h2>

        <div className="mt-20 space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-6"
            >
              <div className="h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-zinc-500 mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}