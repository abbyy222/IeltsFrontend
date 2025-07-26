import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const handleLogin = async () => {
    setLoading(true);

    const res = await fetch('https://ieltsbackend-r6p1.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      localStorage.setItem('name', data.name);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 justify-center items-center">
      <div className="bg-white shadow-lg p-8 rounded-lg w-[350px]">
        <h1 className="text-xl font-semibold text-center mb-6">Enter your password</h1>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
}
