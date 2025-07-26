import { Button } from "../components/ui/button";
import { ChevronDown, Download, RotateCcw, User } from "lucide-react";
import { motion } from "framer-motion";

export default function IeltsResultsPage() {
  const handleDownload = async () => {
  try {
    const response = await fetch(
      "https://ieltsbackend-r6p1.onrender.com/api/download-pdf"
    );
    if (!response.ok) throw new Error("Failed to fetch PDF");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "IELTS_Result.pdf");
    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
    alert("Unable to download result at the moment.");
  }
};

  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans antialiased">
      {/* Header/Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left: Logo + Breadcrumbs */}
          <div className="flex items-center gap-6">
            <div className="text-red-600 font-extrabold text-xl">IELTS</div>
            <nav className="text-sm text-gray-500 flex items-center gap-2">
              <span>My dashboard</span>
              <span className="text-red-600">›</span>
              <span className="text-black font-medium relative">
                My tests
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-red-500 rounded" />
              </span>
            </nav>
          </div>

          {/* Right: User Info */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Oluwafemi</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded">
              Book a test
            </Button>
          </div>
        </div>
      </header>

      {/* Banner with IELTS-style Gradient */}
      <section className="bg-gradient-to-r from-[#2DB771] to-[#B4E020] text-white px-6 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-semibold text-lg flex items-center gap-2">
            ✅ Results available
          </div>
          <div className="text-sm">
            IELTS on Computer General Training 19-Jul-25
          </div>
        </div>
      </section>

      {/* Score Summary Section */}
      {/* Increased horizontal padding (px-16) to shift content right, matching original indentation */}
      <div className="max-w-6xl mx-auto bg-white mt-4 shadow rounded-md relative overflow-hidden px-16 pt-10 pb-12">
        {/* Radial Background - Using concentric circles as a subtle pattern to mimic the original's spiral lines. */}
        <div
          className="absolute inset-0 bg-no-repeat bg-left-top pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='700' height='700' viewBox='0 0 700 700' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='350' cy='350' r='340' stroke='%23E0E0E0' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='300' stroke='%23E0E0E0' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='260' stroke='%23E0E0E0' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='220' stroke='%23E0E0E0' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='180' stroke='%23E0E0E0' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='140' stroke='%23E0E0E0' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='100' stroke='%23E0E0E0' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '700px',
            backgroundPosition: '-150px -100px', // Adjusted to match the image's positioning
            opacity: 0.2, // Keep opacity low as in the original
          }}
        />

        {/* Action Buttons - Aligned to start (left) */}
        <div className="flex flex-wrap justify-start gap-4 mb-6 z-10 relative">
          <Button
            variant="outline"
            className="border-red-600 text-red-600 font-medium bg-transparent hover:bg-red-50"
          >
            <RotateCcw className="w-4 h-4 mr-2" /> Rebook IELTS test
          </Button>
          <Button
            variant="outline"
            className="border-red-600 text-red-600 font-medium bg-transparent hover:bg-red-50"
          >
            Request re-mark
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" /> Download result
          </Button>
        </div>

        {/* Overall Score - Aligned to left */}
        <div className="text-left z-10 relative mb-10">
          <div className="text-lg text-black font-medium">Overall score</div>
          <div className="text-red-600 text-[72px] font-extrabold leading-none mt-2">
            7.5
          </div>
        </div>

        {/* Individual Skill Cards - Changed to always be a 2-column grid to create a 2x2 layout */}
        <div className="grid grid-cols-2 gap-6 z-10 relative">
          {[
            { skill: "Listening", score: "7.5" },
            { skill: "Reading", score: "7.0" },
            { skill: "Writing", score: "6.0" },
            { skill: "Speaking", score: "6.5" },
          ].map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={index}
              className="bg-white border rounded-xl shadow-sm p-4 flex flex-col items-center"
            >
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 text-xs px-3 py-0.5 mb-2 bg-transparent"
              >
                Retake
              </Button>
              <div className="text-sm font-semibold text-gray-700">
                {item.skill}
              </div>
              <div className="text-red-600 text-2xl font-bold">
                {item.score}
              </div>
              <ChevronDown className="mt-2 text-gray-400 w-4 h-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
