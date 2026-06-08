const faqs = [
  {
    q: "Who is CA IQ for?",
    a: "CA firms, audit firms, tax consultants and compliance practices.",
  },
  {
    q: "When will CA IQ launch?",
    a: "Early access members will receive priority onboarding before public launch.",
  },
  {
    q: "Will AI replace accountants?",
    a: "No. CA IQ helps accountants work faster and make better decisions.",
  },
  {
    q: "Can I influence the roadmap?",
    a: "Yes. Early access members will directly shape future features.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-xl">
                {faq.q}
              </h3>

              <p className="mt-3 text-zinc-500">
                {faq.a}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}