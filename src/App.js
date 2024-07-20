import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeaderFr from './components/HeaderFr';
import Footer from './components/Footer';
import FooterFr from './components/FooterFr';
import MainContent from './components/MainContent';
import MainContentFr from './components/MainContentFr';
import ExplorePage from './components/ExplorePage';
import ExploreFr from './components/ExploreFr';
import SchedulePage from './components/SchedulePage';
import ScheduleFr from './components/ScheduleFr';
import ConfirmationPage from './components/ConfirmationPage';
import ConfirmationFr from './components/ConfirmationFr';
import SupportPage from './components/SupportPage';
import SupportFr from './components/SupportFr';
import TicketConfirmationPage from './components/TicketConfirmationPage';
import TicketConfirmationFr from './components/TicketConfirmationFr';
import BlogPage from './components/BlogPage';
import BlogFr from './components/BlogFr';
import ProductsPage from './components/ProductsPage';
import ProductsFr from './components/ProductsFr';
import FaqPage from './components/FaqPage';
import FaqFr from './components/FaqFr';
import DashboardPage from './components/DashboardPage';
import DashboardFr from './components/DashboardFr';
import AboutUs from './components/AboutUs';
import AboutUsFr from './components/AboutUsFr';

function App() {
  const location = useLocation();
  const isFrench = location.pathname.includes('-fr') || location.pathname === '/fr';

  return (
    <div className="App">
      {isFrench ? <HeaderFr /> : <Header />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/fr" element={<MainContentFr />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore-fr" element={<ExploreFr />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/schedule-fr" element={<ScheduleFr />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/confirmation-fr" element={<ConfirmationFr />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/support-fr" element={<SupportFr />} />
        <Route path="/ticket-confirmation" element={<TicketConfirmationPage />} />
        <Route path="/ticket-confirmation-fr" element={<TicketConfirmationFr />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-fr" element={<BlogFr />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products-fr" element={<ProductsFr />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/faq-fr" element={<FaqFr />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard-fr" element={<DashboardFr />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-fr" element={<AboutUsFr />} />
      </Routes>
      {isFrench ? <FooterFr /> : <Footer />}
    </div>
  );
}

export default App;
