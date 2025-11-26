"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function DownloadCVButton() {
  const handleDownload = async () => {
    const element = document.getElementById("cv-content");
    if (!element) return;

    const canvas = await html2canvas(element);
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save("MonCV.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
    >
      Télécharger le CV en PDF
    </button>
  );
}