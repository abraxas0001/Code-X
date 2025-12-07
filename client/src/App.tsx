import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Dashboard } from './pages/Dashboard';
import { LearnPage } from './pages/LearnPage';
import { Navbar } from './components/Navbar';
import { StatusBanner } from './components/StatusBanner';
import { useUserStore } from './store/userStore';

function App() {
  const { user, initializeMockUser } = useUserStore();

  // Initialize mock user on first load
  useEffect(() => {
    if (!user) {
      initializeMockUser();
    }
  }, [user, initializeMockUser]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <StatusBanner />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn/:slug" element={<LearnPage />} />
          </Routes>
        </main>
        <Toaster position="top-right" theme="dark" />
      </div>
    </BrowserRouter>
  );
}

export default App;
