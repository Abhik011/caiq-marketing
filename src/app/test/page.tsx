"use client";

import { supabase } from "@/lib/supabase";

export default function TestPage() {
  const handleInsert = async () => {
    alert("Button Clicked");

    console.log("Starting insert...");

    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          full_name: "Abhijeet Test",
          firm_name: "CA IQ",
          email: "test@test.com",
          whatsapp: "9999999999",
          firm_size: "1-5",
          clients_managed: "1-50",
          software_stack: "Excel",
          challenge: "Testing",
        },
      ])
      .select();

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      alert(error.message);
    } else {
      alert("Success");
    }
  };

  return (
    <div className="p-10">
      <button
        onClick={handleInsert}
        className="rounded bg-red px-6 py-3 text-white"
      >
        Test Insert
      </button>
    </div>
  );
}