import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the theme toggle button so it can be displayed on all pages
import ThemeToggleButton from './components/ThemeToggleButton';

// Import all of your page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import UploadPage from './pages/UploadPage';

function App() {
  return (
    <>
      {/* The ThemeToggleButton is placed outside the router.
        This makes it persistent and visible on every page of the app.
      */}
      <ThemeToggleButton />

      <BrowserRouter>
        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* --- Dashboard Routes --- */}
          {/* In a real app, these would be protected and only accessible after login */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/upload" element={<UploadPage />} />

          {/* --- Catch-all Route --- */}
          {/* This will redirect any unknown URL back to the homepage */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;