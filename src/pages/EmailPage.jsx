import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmailPage() {
  const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (email.trim().toLowerCase() === 'preciousabraham589@gmail.com') {
      localStorage.setItem('email', email);
      navigate('/password');
       setShowError(false);
    } else {
      setShowError(true);
      alert('Email not found');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased flex flex-col items-center pt-10">
      {/* Header with IDP IELTS Logo */}
      <header className="mb-12">
        <div className="flex items-center text-xl font-bold text-gray-700">
          <span className="text-red-600 mr-1">idp</span> IELTS
        </div>
      </header>

      {/* Main Content Area */}
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to IDP IELTS</h1>
        <p className="text-gray-600 mb-8">Please enter your email to sign in or sign up</p>

        {/* Email Input with Arrow Button */}
        <div className="relative flex items-center mb-4">
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md pr-12 focus:outline-none focus:ring-1 focus:ring-blue-500 text-lg"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setShowError(false); // Hide error when user starts typing again
            }}
          />
          <button
            onClick={handleContinue}
            className="absolute right-0 top-0 h-full w-12 bg-red-600 text-white rounded-r-md flex items-center justify-center hover:bg-pink-700 transition-colors"
            aria-label="Continue"
          >
            {/* Right arrow SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Error/Information Message Box */}
        {showError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-start gap-3 mb-4">
            {/* Exclamation icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 flex-shrink-0 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.174 3.355 1.945 3.355h17.109c1.77 0 2.816-1.855 1.945-3.355L12 2.25 2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <div>
              <span className="font-semibold">If you have an existing IDP account</span> please use the same email address to sign in. Please use a valid email address so we can validate your account.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
