import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Clock, Monitor, MapPin, BookOpen, Users, ArrowRight } from "lucide-react"; // Icons from Lucide React

// --- Responsive HeaderLogos Component with new image ---
const HeaderLogos = () => {
  return (
    // Flex container to hold the logos. On small screens, space is tight, so we use space-x-1.
    // On medium screens and up, we increase the space to space-x-2.
    <div className="flex items-center space-x-1 sm:space-x-2">
      {/*
        The IDP image is set to be responsive.
        w-24 ensures it's a fixed width on small screens, and sm:w-28 makes it a bit larger
        on screens that are 'sm' breakpoint or wider. h-auto maintains the aspect ratio.
      */}
      <img
        src="/IDP.png" // The path to your uploaded image
        alt="IDP Logo"
        className="w-24 h-auto sm:w-28" // Maintain consistent sizing with the IELTS logo
      />

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


export default function DashboardPage() {
  const navigate = useNavigate();

  const handleViewResults = () => {
    navigate("/Dashboard"); // Navigate to the IELTS results page
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans antialiased relative pb-10">
      {/* Topmost thin red bar */}
      <div className="absolute top-0 left-0 w-full h-[7px] bg-[#E20000] z-30" />

      {/* Main Header/Navbar Card */}
      <header className="fixed top-[7px] left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex justify-center items-center relative">
          {/* Logo Group (IDP + IELTS) - Centered */}
          <HeaderLogos />

          {/* User Icon on the right */}
          <div className="absolute right-4 sm:right-6 md:right-8 flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm">
              O {/* Placeholder for 'Oluwafemi' initial or user icon */}
            </div>
          </div>
        </div>
      </header>

      {/* Placeholder to push content down below the fixed header */}
      <div className="pt-[70px]"></div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
        {/* Hello User Section */}
        {/* On mobile, this will be a column (default flex behavior). On small screens and up, it becomes a row. */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Hello Oluwafemi</h1>
            <p className="text-gray-600 text-sm">preciousabraham589@gmail.com</p>
          </div>
          <button className="mt-4 sm:mt-0 bg-[#E20000] text-white py-2 px-6 rounded-full font-semibold text-sm shadow-md hover:bg-[#c00000] transition-colors duration-200">
            Book now
          </button>
        </div>

        {/* Your test result is available card */}
        <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-[#E20000] mb-8">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-2">
            <span className="text-[#E20000] mr-2">●</span> Your test result is available
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Go to My Tests and Results to view score and detailed results
          </p>

          <div className="bg-[#f9f9f9] border border-gray-200 rounded-md p-4 mb-4">
            <h3 className="text-base font-semibold text-gray-800 mb-3">IELTS General Training</h3>
            {/* The grid is set to one column on mobile and two columns on small screens and up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2 text-gray-500" /> 19/07/2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gray-500" /> 01:00 PM (Written test)
              </div>
              <div className="flex items-center">
                <Monitor className="w-4 h-4 mr-2 text-gray-500" /> On computer
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 mr-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.719c0-.404.113-.801.324-1.135A12.82 12.82 0 0 1 12 15.75c3.248 0 6.331-.878 8.176-2.584a1.182 1.182 0 0 1 .324-1.135V21m-4.5-9H12m2.25 0H12M12 12V8.25m0 3.75v3.75M12 12c-1.31 0-2.508.424-3.445 1.135M12 12c1.31 0 2.508.424 3.445 1.135M12 12V8.25m0 3.75v3.75M12 12c-1.31 0-2.508.424-3.445 1.135M12 12c1.31 0 2.508.424 3.445 1.135M12 12V8.25m0 3.75v3.75" />
                  </svg>
                </span>
                MOD CD IELTS PH (Test Room)
              </div>
              {/* The address always spans the full width of the grid for readability */}
              <div className="flex items-start col-span-full">
                <MapPin className="w-4 h-4 mt-1 mr-2 text-gray-500 flex-shrink-0" />
                <span>13 Birabi street, GRA Phase 2 Port Harcourt Rivers State, Port Harcourt</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <button onClick={handleViewResults} className="text-blue-600 hover:underline">
              View results
            </button>
            <a href="#" className="text-blue-600 hover:underline">
              Download eTRF
            </a>
          </div>
        </div>

        {/* IELTS Services Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 border-l-4 border-[#E20000] pl-3 mb-6">
            IELTS services
          </h2>

          {/* This grid shows one column on mobile, two on small screens, and three on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: My tests and results */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between items-start hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <CalendarDays className="w-8 h-8 text-gray-700 mb-4" /> {/* Icon */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">My tests and results</h3>
              <p className="text-gray-600 text-sm mb-4">
                Access your IELTS test results and manage your upcoming test bookings.
              </p>
              <ArrowRight className="w-6 h-6 text-blue-600 self-end" /> {/* Arrow icon */}
            </div>

            {/* Card 2: My IELTS preparation */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between items-start hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <BookOpen className="w-8 h-8 text-gray-700 mb-4" /> {/* Icon */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">My IELTS preparation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get ready for IELTS and prepare with these free resources.
              </p>
              <ArrowRight className="w-6 h-6 text-blue-600 self-end" /> {/* Arrow icon */}
            </div>

            {/* Card 3: My IELTS community */}
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between items-start hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <Users className="w-8 h-8 text-gray-700 mb-4" /> {/* Icon */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">My IELTS community</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join the IELTS community and connect with IELTS experts and test takers.
              </p>
              <ArrowRight className="w-6 h-6 text-blue-600 self-end" /> {/* Arrow icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
