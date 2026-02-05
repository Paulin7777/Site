
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Github, Linkedin, Mail, ExternalLink, ChevronRight, Moon, Sun, Filter, Info, Play, List } from 'lucide-react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-500 group-hover:scale-110 transition-transform duration-300">
            <img 
              src="paulo.jpg" 
              alt="Paulo Barreto" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Paulo+Barreto&background=0ea5e9&color=fff";
              }}
            />
          </div>
          <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white hidden sm:block">PB</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                location.pathname === link.path ? 'text-primary-600 dark:text-primary-400' : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="#" 
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-zinc-600 dark:text-zinc-400"
              >
                {link.name}
              </Link>
            ))}
            <a href="#" className="flex items-center space-x-2 w-full justify-center px-4 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-lg font-medium">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tighter mb-4 block">PB</Link>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-6">
              Built to showcase real data work — dashboards, automation, and decision support.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/paulo-barreto-ab0076174/" target="_blank" className="text-zinc-400 hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:pgbarreto99@gmail.com" className="text-zinc-400 hover:text-primary-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
              <li><Link to="/portfolio" className="hover:text-primary-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Proof</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
              <li>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiMDY0NDAzMTktNWRiNy00NDNhLTgzY2ItZGMyMTViNWY4Mzk0IiwidCI6IjJiNzYzMGFiLTllNDktNGFlZS05NzE5LWUyNjgyYTVhZWM5YyJ9" target="_blank" className="hover:text-primary-500 transition-colors flex items-center">
                  Power BI Hub <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://qualitools.shinyapps.io/paulin/" target="_blank" className="hover:text-primary-500 transition-colors flex items-center">
                  QualyTools (R Shiny) <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center md:text-left">
          <p className="text-zinc-500 text-xs">
            © {currentYear} Paulo Barreto. Built with precision and clarity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
