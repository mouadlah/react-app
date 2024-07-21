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

  const isMainContentFr = location.pathname === '/react-app/fr';

  return (
    <div className="App">
      {!isMainContentFr && (isFrench ? <HeaderFr /> : <Header />)}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/react-app/fr" element={<MainContentFr />} />
        <Route path="/react-app/explore" element={<ExplorePage />} />
        <Route path="/react-app/explore-fr" element={<ExploreFr />} />
        <Route path="/react-app/schedule" element={<SchedulePage />} />
        <Route path="/react-app/schedule-fr" element={<ScheduleFr />} />
        <Route path="/react-app/confirmation" element={<ConfirmationPage />} />
        <Route path="/react-app/confirmation-fr" element={<ConfirmationFr />} />
        <Route path="/react-app/support" element={<SupportPage />} />
        <Route path="/react-app/support-fr" element={<SupportFr />} />
        <Route path="/react-app/ticket-confirmation" element={<TicketConfirmationPage />} />
        <Route path="/react-app/ticket-confirmation-fr" element={<TicketConfirmationFr />} />
        <Route path="/react-app/blog" element={<BlogPage />} />
        <Route path="/react-app/blog-fr" element={<BlogFr />} />
        <Route path="/react-app/products" element={<ProductsPage />} />
        <Route path="/react-app/products-fr" element={<ProductsFr />} />
        <Route path="/react-app/faq" element={<FaqPage />} />
        <Route path="/react-app/faq-fr" element={<FaqFr />} />
        <Route path="/react-app/dashboard" element={<DashboardPage />} />
        <Route path="/react-app/dashboard-fr" element={<DashboardFr />} />
        <Route path="/react-app/about" element={<AboutUs />} />
        <Route path="/react-app/about-fr" element={<AboutUsFr />} />
      </Routes>
      {!isMainContentFr && (isFrench ? <FooterFr /> : <Footer />)}
    </div>
  );
}

export default App;
