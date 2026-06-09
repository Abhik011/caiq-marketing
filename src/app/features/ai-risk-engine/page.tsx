import FeaturePage from "../../components/FeaturePage";

export default function Page() {
  return (
    <FeaturePage
      badge="AI FEATURE"
      title="AI Risk Engine"
      description="Detect compliance, operational and audit risks before they become major issues."
      benefits={[
        "Risk Scoring",
        "Anomaly Detection",
        "Compliance Gap Analysis",
        "Control Monitoring",
        "Preventive Alerts",
        "Trend Analysis",
      ]}
    />
  );
}