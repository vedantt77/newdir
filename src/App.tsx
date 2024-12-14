import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StartupListPage } from '@/pages/StartupListPage';
import { StartupDetailPage } from '@/pages/StartupDetailPage';
import { ThemeProvider } from '@/providers/ThemeProvider';

// ScrollToTop component that handles scrolling
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' to avoid visual delay
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop /> {/* Add the ScrollToTop component */}
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<StartupListPage />} />
              <Route path="/startup/:id" element={<StartupDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;