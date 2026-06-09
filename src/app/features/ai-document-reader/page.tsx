import FeaturePage from "../../components/FeaturePage";

export default function Page() {
  return (
    <FeaturePage
      badge="AI FEATURE"
      title="AI Document Reader"
      description="Extract data from PDFs, invoices, financial statements and supporting documents."
      benefits={[
        "OCR Processing",
        "PDF Analysis",
        "Data Extraction",
        "Document Classification",
        "Financial Statement Parsing",
        "Searchable Records",
      ]}
    />
  );
}