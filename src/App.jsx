import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailPage from './pages/EmailPage';
import PasswordPage from './pages/PasswordPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
