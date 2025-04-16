import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Calendar, Newspaper, Globe2, LandPlot, Gamepad2, Film, Cpu, TrendingUp, BookOpen, Archive, Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] vintage-texture">
      {/* Breaking News Ticker */}
      <div className="breaking-news-ticker overflow-hidden">
        <div className="animate-[tickerAnimation_20s_linear_infinite]">
          BREAKING: Major technological breakthrough announced • Global peace talks show promise • Record-breaking sports event draws millions • Entertainment industry undergoes transformation
        </div>
      </div>

      {/* Header */}
      <header className="border-b-4 border-gray-900">
        <div className="newspaper-container py-6">
          <div className="text-center mb-6">
            <Link to="/">
              <h1 className="text-5xl md:text-7xl font-black font-serif mb-2">THE DAILY CHRONICLE</h1>
              <p className="text-sm md:text-base italic">"All the News That's Fit to Print - Digitally"</p>
            </Link>
            <p className="text-sm mt-2 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              {currentDate}
            </p>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end mb-4">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t-2 border-b-2 border-gray-900 py-3`}>
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <Newspaper className="w-4 h-4" /> HOME
              </NavLink>
              <NavLink to="/world" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <Globe2 className="w-4 h-4" /> WORLD
              </NavLink>
              <NavLink to="/politics" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <LandPlot className="w-4 h-4" /> POLITICS
              </NavLink>
              <NavLink to="/sports" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <Gamepad2 className="w-4 h-4" /> SPORTS
              </NavLink>
              <NavLink to="/entertainment" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <Film className="w-4 h-4" /> ENTERTAINMENT
              </NavLink>
              <NavLink to="/technology" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <Cpu className="w-4 h-4" /> TECHNOLOGY
              </NavLink>
              <NavLink to="/trending" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <TrendingUp className="w-4 h-4" /> TRENDING
              </NavLink>
              <NavLink to="/editorials" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <BookOpen className="w-4 h-4" /> EDITORIALS
              </NavLink>
              <NavLink to="/archives" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <Archive className="w-4 h-4" /> ARCHIVES
              </NavLink>
            </div>
          </nav>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap justify-center gap-4 text-sm md:text-base border-t-2 border-b-2 border-gray-900 py-3">
            <NavLink to="/" className="nav-link">
              <Newspaper className="w-4 h-4" /> HOME
            </NavLink>
            <NavLink to="/world" className="nav-link">
              <Globe2 className="w-4 h-4" /> WORLD
            </NavLink>
            <NavLink to="/politics" className="nav-link">
              <LandPlot className="w-4 h-4" /> POLITICS
            </NavLink>
            <NavLink to="/sports" className="nav-link">
              <Gamepad2 className="w-4 h-4" /> SPORTS
            </NavLink>
            <NavLink to="/entertainment" className="nav-link">
              <Film className="w-4 h-4" /> ENTERTAINMENT
            </NavLink>
            <NavLink to="/technology" className="nav-link">
              <Cpu className="w-4 h-4" /> TECHNOLOGY
            </NavLink>
            <NavLink to="/trending" className="nav-link">
              <TrendingUp className="w-4 h-4" /> TRENDING
            </NavLink>
            <NavLink to="/editorials" className="nav-link">
              <BookOpen className="w-4 h-4" /> EDITORIALS
            </NavLink>
            <NavLink to="/archives" className="nav-link">
              <Archive className="w-4 h-4" /> ARCHIVES
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Stock Ticker */}
      <div className="stock-ticker bg-gray-100 border-b border-gray-300">
        <div className="newspaper-container flex overflow-x-auto whitespace-nowrap">
          <span className="font-bold mr-4">STOCKS:</span>
          <span className="text-green-600 mr-4">AAPL +1.2%</span>
          <span className="text-red-600 mr-4">GOOGL -0.8%</span>
          <span className="text-green-600 mr-4">MSFT +2.1%</span>
          <span className="text-red-600 mr-4">AMZN -0.3%</span>
          <span className="text-green-600">TSLA +3.4%</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="newspaper-container py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-gray-900 mt-12">
        <div className="newspaper-container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-2">CONTACT US</h4>
              <p className="text-sm">123 News Street</p>
              <p className="text-sm">Metropolis, NY 10001</p>
              <p className="text-sm">editor@dailychronicle.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">LETTER TO THE EDITOR</h4>
              <button className="vintage-button text-sm">Submit Your Letter</button>
            </div>
            <div>
              <h4 className="font-bold mb-2">SUBSCRIBE</h4>
              <button className="vintage-button text-sm">Get Daily Updates</button>
            </div>
            <div>
              <h4 className="font-bold mb-2">QUICK LINKS</h4>
              <ul className="text-sm space-y-1">
                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms of Use</Link></li>
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm mt-8">© 2025 The Daily Chronicle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;