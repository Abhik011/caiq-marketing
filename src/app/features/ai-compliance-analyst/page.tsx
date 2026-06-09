import FeaturePage from "../../components/FeaturePage";

export default function Page() {
  return (
    <FeaturePage
      badge="AI FEATURE"
      title="AI Compliance Analyst"
      description="Automatically monitors GST, TDS, ROC and Income Tax compliance obligations across all clients."
      benefits={[
        "Compliance Monitoring",
        "Deadline Tracking",
        "Risk Detection",
        "Penalty Prevention",
        "Client-wise Compliance Dashboard",
        "Automated Alerts",
      ]}
    />
  );
}