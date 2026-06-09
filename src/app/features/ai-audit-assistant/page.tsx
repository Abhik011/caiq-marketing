import FeaturePage from "../../components/FeaturePage";

export default function Page() {
  return (
    <FeaturePage
      badge="AI FEATURE"
      title="AI Audit Assistant"
      description="AI-powered audit support for planning, documentation and evidence review."
      benefits={[
        "Risk Assessment",
        "Procedure Suggestions",
        "Evidence Analysis",
        "Working Paper Support",
        "Review Notes",
        "Anomaly Detection",
      ]}
    />
  );
}