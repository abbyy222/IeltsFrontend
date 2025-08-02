import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

// --- New HeaderLogos Component for IeltsResultsPage with images ---
const HeaderLogos = () => {
  return (
    // Flex container to hold the logos. The space-x-1 is for small screens.
    <div className="flex items-center space-x-1 sm:space-x-2">
      {/* This is a placeholder image for the first logo.
        In a real application, you would replace this with the actual image path,
        e.g., src="/src/assets/IDP.png" or a similar logo.
      */}
      <img
        src="/src/assets/IDP.png"
        alt="IDP Logo"
        className="w-24 h-auto sm:w-28" // Maintain responsive sizing
      />

      {/* This is a placeholder image for the IELTS logo, replacing the SVG.
        Replace this with your actual image path, e.g., src="/src/assets/IELTS.png".
      */}
    {/* The IELTS SVG logo is also sized responsively to match the image */}
      <svg
        className="w-24 h-auto sm:w-28" // This size now matches the IDP logo
        version="1.0" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 74.000000 26.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)"
          fill="#E20000" stroke="none">
          <path d="M593 229 c-28 -10 -46 -44 -38 -70 4 -13 29 -30 61 -45 60 -26 67
          -40 27 -50 -21 -6 -30 -2 -41 14 -18 27 -52 29 -52 4 0 -30 33 -52 76 -52 52
          0 84 23 84 59 0 34 -13 46 -66 63 -22 7 -39 20 -39 28 0 21 29 24 48 5 17 -16
          57 -21 57 -6 0 5 -8 18 -17 30 -20 23 -67 33 -100 20z"/>
          <path d="M28 130 c3 -98 4 -100 28 -100 24 0 24 1 24 100 l0 100 -27 0 -28 0
          3 -100z"/>
          <path d="M100 130 l0 -100 75 0 c68 0 75 2 75 20 0 17 -7 20 -50 20 -47 0 -50
          1 -50 26 0 25 2 26 50 22 42 -2 50 0 50 15 0 14 -9 17 -49 17 -40 0 -50 3 -54
          20 -5 18 0 20 49 20 47 0 54 2 54 20 0 18 -7 20 -75 20 l-75 0 0 -100z"/>
          <path d="M270 130 l0 -100 75 0 c68 0 75 2 75 20 0 17 -7 20 -51 20 l-51 0 4
          80 3 80 -27 0 -28 0 0 -100z"/>
          <path d="M380 210 c0 -16 7 -20 30 -20 l30 0 0 -80 c0 -79 0 -80 25 -80 25 0
          25 1 25 84 0 82 0 83 24 79 17 -4 25 0 29 16 5 20 1 21 -79 21 -77 0 -84 -2
          -84 -20z"/>
        </g>
      </svg>
    </div>
  );
};


export default function IeltsResultsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Perform any necessary logout actions (e.g., clearing local storage)
    navigate("/login");
  };

  const changePassword = () => {
     navigate("/login");
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
    <div className="min-h-screen bg-[#f7f7f7] font-sans antialiased relative">
      <div className="absolute top-0 left-0 w-full h-[7px] bg-[#E20000] z-30" />
      <div
        className="absolute top-0 left-0 w-[300px] h-[100px] bg-gradient-to-br from-[#E20000] to-[#C00000] transform -skew-x-[15deg] origin-top-left -translate-x-[10%] -translate-y-[5%] rounded-br-[70px] z-10"
        style={{
          backgroundPosition: 'left top',
          filter: 'drop-shadow(0 0 5px rgba(226, 0, 68, 0.88))'
        }}
      />
      <header
        className={`fixed top-[7px] left-0 w-full bg-white transition-shadow duration-200 z-50 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex flex-wrap justify-center sm:justify-between items-center relative">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-2 sm:mb-0">
            {/* The new HeaderLogos component replaces the previous SVGs */}
            <HeaderLogos />

            <nav className="text-sm font-normal text-gray-500 flex items-center space-x-2 mt-2 sm:mt-0">
              <a href="#" className="hover:text-gray-700 whitespace-nowrap">My dashboard</a>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="#" className="text-black font-semibold relative hover:text-gray-800 whitespace-nowrap">
                My tests
                <span className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-[#E20000] rounded-sm" />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1 align-middle text-[#E20000]">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1.5 text-gray-700 font-medium whitespace-nowrap text-sm focus:outline-none"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.82C6.03 13.88 10 12.8 12 12.8C14 12.8 17.97 13.88 18 15.82C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                </svg>
                <span>Oluwafemi</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-50">
                  <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm">
                    My profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm">
                    Change password
                  </a>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm focus:outline-none"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
            <div className="h-6 w-[1px] bg-gray-300 mx-1" />
            <Button
              className="relative bg-gradient-to-r from-[#E20000] to-[#FF4500] text-white text-sm px-4 py-1.5 rounded-md font-semibold h-8 overflow-hidden hover:from-[#d10000] hover:to-[#e03a00]"
              style={{ borderRadius: '0.375rem 9999px 9999px 0.375rem', paddingRight: '1.5rem' }}
            >
              <span className="relative z-10">Book a test</span>
              <span className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#FF4500]/50 to-transparent z-0" style={{ pointerEvents: 'none' }} />
            </Button>
          </div>
        </div>
      </header>

      <div className="pt-[70px]"></div>
      <section className="bg-gradient-to-r from-[#2DB771] to-[#B4E020] text-white px-4 sm:px-6 md:px-8 py-2.5 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="font-semibold text-base flex items-center gap-2 mb-1 sm:mb-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
            </svg>
            Results available
          </div>
          <div className="text-sm font-medium">
            IELTS on Computer General Training 19-Jul-25
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto bg-white mt-8 shadow-sm rounded-lg relative overflow-hidden px-4 sm:px-6 md:px-16 pt-8 pb-10 sm:pb-12">
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='700' height='700' viewBox='0 0 700 700' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='350' cy='350' r='340' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='300' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='260' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='220' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='180' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='140' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='100' stroke='%23E8E8E8' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '700px',
            backgroundPosition: '-180px 100px',
            opacity: 0.35,
          }}
        />
        <div className="relative z-10 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-[#E20000] pb-1 w-fit">
            Past tests
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-5 mb-8 relative z-10">
          <Button
            variant="outline"
            className="border-[#E20000] text-[#E20000] font-semibold bg-white hover:bg-[#FFE6E6] hover:text-[#E20000] text-sm px-4 py-2 h-9 rounded-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-[#E20000]">
              <path d="M12 16L7 11L8.41 9.59L11 12.17V4H13V12.17L15.59 9.59L17 11L12 16ZM20 18H4V20H20V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Rebook IELTS test
          </Button>
          <Button
            variant="outline"
            className="border-[#E20000] text-[#E20000] font-semibold bg-white hover:bg-[#FFE6E6] hover:text-[#E20000] text-sm px-4 py-2 h-9 rounded-md"
          >
            Request re-mark
          </Button>
          <Button
            className="bg-gradient-to-r from-[#E20000] to-[#FF4500] hover:from-[#d10000] hover:to-[#e03a00] text-white font-semibold text-sm px-4 py-2 h-9 rounded-md"
            onClick={handleDownload}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-white">
              <path d="M12 16L7 11L8.41 9.59L11 12.17V4H13V12.17L15.59 9.59L17 11L12 16ZM20 18H4V20H20V18Z" fill="currentColor"/>
            </svg>
            Download result
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-y-8 md:gap-x-12 items-start relative z-10">
          <div className="flex flex-col items-center md:items-start md:mt-0">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Overall score
            </h3>
            <div className="text-[#E20000] text-[100px] font-extrabold leading-none -mt-4">
              7.5
            </div>
            <div className="w-full mt-6 border-t border-gray-200 pt-4 md:hidden">
              <h3 className="text-lg font-semibold text-gray-800 pb-1 border-b-2 border-transparent">
                Your score explained
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                The test taker has an effective command of the language despite some inaccuracies...
              </p>
              <a href="#" className="text-[#E20000] text-sm font-semibold mt-1 block">
                Show more
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-x-3 md:gap-y-3 w-full mt-0 max-w-sm md:max-w-none mx-auto md:mx-0">
            {[
              { skill: "Listening", score: "7.5" },
              { skill: "Reading", score: "7.0" },
              { skill: "Writing", score: "7.0" },
              { skill: "Speaking", score: "8.0" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md shadow-sm p-3 flex flex-col items-center justify-between text-center min-h-[110px] w-full"
              >
                <Button
                  variant="outline"
                  className="border-[#2DB771] text-[#2DB771] text-xs font-semibold px-2.5 py-0.5 mb-1.5 bg-white h-6 rounded-sm"
                >
                  Retake
                </Button>
                <div className="text-sm sm:text-base font-semibold text-gray-700 mb-1">
                  {item.skill}
                </div>
                <div className="text-[#E20000] text-2xl sm:text-3xl font-bold mb-1">
                  {item.score}
                </div>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400 mt-auto"
                >
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-full mt-10 relative z-10">
          <h3 className="text-xl font-semibold text-gray-800 pb-1 border-b-2 border-[#E20000] w-fit">
            Your score explained
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            The test taker has an effective command of the language despite some inaccuracies,
            inappropriate usage and misunderstandings. They can use and understand fairly complex language,
            particularly in familiar situations.
          </p>
          <a href="#" className="text-[#E20000] text-sm font-semibold mt-2 inline-block">
            Show more
          </a>
        </div>
      </div>
    </div>
  );
}
