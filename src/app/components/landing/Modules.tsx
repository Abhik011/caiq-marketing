const modules = [
  "Audit Hub",
  "Compliance Center",
  "Client Portal",
  "Workflow Automation",
  "Team Productivity",
  "Document Management",
  "Knowledge Base",
  "Revenue Dashboard",
];

export default function Modules() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Everything In One Platform
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {modules.map((module) => (
            <div
              key={module}
              className="border border-zinc-800 rounded-3xl p-10"
            >
              <h3 className="text-xl font-semibold">
                {module}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}