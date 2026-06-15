import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ExternalLink, Github, Mail, Linkedin, Instagram, Download, ChevronDown, Code2, Zap, Database, Briefcase, Award, FileText } from 'lucide-react';
import avatar from './avatar.png';

const Starfield = ({ isDark }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 5 + 4}s`,
    }));
    setStars(generatedStars);
  }, []);

  if (!isDark) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: star.size === '3px' ? '0 0 6px rgba(255,255,255,0.7)' : 'none',
          }}
        />
      ))}
    </div>
  );
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrollY, setScrollY] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [showDetailsDropdown, setShowDetailsDropdown] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setNavbarScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    primary: '#2563EB',
    secondary: '#06B6D4',
    accent: '#8B5CF6',
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: 'AI Study Assistant',
      category: 'AI',
      description: 'An intelligent study companion powered by AI to help students learn more effectively.',
      tech: ['Python', 'React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Student Management System',
      category: 'Web Development',
      description: 'Full-stack application for managing student data, attendance, and grades.',
      tech: ['React', 'Node.js', 'MySQL', 'Express.js'],
      github: '#',
      demo: '#',
      image: '📚'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'Modern, responsive portfolio showcasing projects and skills.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      image: '🎨'
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'Web Development',
      description: 'Productivity app with real-time task tracking and collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      image: '✅'
    },
    {
      id: 5,
      title: 'Python Data Analysis',
      category: 'Python',
      description: 'Data analysis and visualization project using pandas and matplotlib.',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      github: '#',
      demo: '#',
      image: '📊'
    },
    {
      id: 6,
      title: 'Java OOP System',
      category: 'Java',
      description: 'Complex system demonstrating advanced object-oriented programming concepts.',
      tech: ['Java', 'OOP', 'Data Structures'],
      github: '#',
      demo: '#',
      image: '☕'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const categories = ['All', 'Web Development', 'AI', 'Java', 'Python'];

  const certifications = [
    { name: 'Java Certification', issuer: 'Oracle' },
    { name: 'Python Certification', issuer: 'Python Institute' },
    { name: 'AI & Machine Learning', issuer: 'Coursera' },
    { name: 'Web Development', issuer: 'freeCodeCamp' },
    { name: 'Trading & Finance', issuer: 'Udemy' },
    { name: 'Advanced DSA', issuer: 'GeeksforGeeks' },
  ];

  const skills = [
    { category: 'Programming', items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'], level: 90 },
    { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Bootstrap'], level: 85 },
    { category: 'Backend', items: ['Node.js', 'Express.js'], level: 80 },
    { category: 'Database', items: ['MySQL', 'MongoDB'], level: 85 },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'DaVinci Resolve'], level: 88 },
    { category: 'Specialties', items: ['DSA', 'OOP', 'AI Tools', 'Social Media Marketing'], level: 82 },
  ];

  const achievements = [
    { label: 'Projects Completed', value: 15, emoji: '🚀' },
    { label: 'Technologies Mastered', value: 20, emoji: '⚡' },
    { label: 'Coding Competitions', value: 8, emoji: '🏆' },
    { label: 'Certifications', value: 6, emoji: '📜' },
  ];

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(130px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
        }
        @keyframes orbit-2 {
          0% { transform: rotate(180deg) translateX(180px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(180px) rotate(-540deg); }
        }
        @keyframes drift-nebula {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.15); }
        }
        .animate-twinkle {
          animation: twinkle linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-orbit-1 {
          animation: orbit-1 20s linear infinite;
        }
        .animate-orbit-2 {
          animation: orbit-2 28s linear infinite;
        }
        .animate-drift {
          animation: drift-nebula 30s ease-in-out infinite;
        }
        .galaxy-glass {
          backdrop-filter: blur(12px);
          background: rgba(15, 23, 42, 0.45) !important;
          border: 1px solid rgba(51, 65, 85, 0.5) !important;
        }
        .galaxy-glass-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .galaxy-glass-hover:hover {
          border-color: rgba(6, 182, 212, 0.5) !important;
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.15), 0 0 50px rgba(139, 92, 246, 0.05) !important;
          transform: translateY(-4px);
        }
      `}</style>
      <div className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} transition-colors duration-300 min-h-screen`}>
        
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          navbarScrolled 
            ? isDark 
              ? 'bg-slate-950/95 border-slate-800 shadow-lg shadow-blue-500/10' 
              : 'bg-white/95 border-slate-200 shadow-lg shadow-blue-500/5'
            : isDark 
              ? 'bg-slate-950/80 border-slate-800' 
              : 'bg-white/80 border-slate-200'
        } backdrop-blur-lg border-b`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo & Branding */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white`}>
                  L
                </div>
                <div className="hidden sm:block">
                  <a href="#" className={`text-xl font-bold bg-gradient-to-r to-cyan-500 from-blue-500 bg-clip-text text-transparent`}>
                    Likhith
                  </a>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Developer • AI Enthusiast</p>
                </div>
              </div>

              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isDark 
                        ? 'hover:bg-slate-800 hover:text-cyan-400' 
                        : 'hover:bg-slate-100 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Right Side Controls */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Quick Details Dropdown */}
                <div className="hidden sm:block relative">
                  <button
                    onClick={() => setShowDetailsDropdown(!showDetailsDropdown)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isDark 
                        ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400' 
                        : 'bg-slate-100 hover:bg-slate-200 text-blue-600'
                    } flex items-center gap-2`}
                  >
                    <FileText size={18} />
                    <span>Details</span>
                  </button>

                  {/* Details Dropdown Menu */}
                  {showDetailsDropdown && (
                    <div className={`absolute right-0 mt-2 w-56 rounded-lg shadow-xl ${
                      isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
                    } overflow-hidden z-50`}>
                      <div className={`p-4 ${isDark ? 'border-b border-slate-700' : 'border-b border-slate-200'}`}>
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <span className="text-xl">👤</span> Quick Info
                        </h3>
                        <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <p><strong>Name:</strong> Likhith Somisetty</p>
                          <p><strong>Role:</strong> ECE Student & Developer</p>
                          <p><strong>Focus:</strong> Full-Stack Development</p>
                          <p><strong>Location:</strong> India</p>
                        </div>
                      </div>

                      <div className={`p-4 ${isDark ? 'border-b border-slate-700' : 'border-b border-slate-200'}`}>
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <span className="text-xl">📊</span> Statistics
                        </h3>
                        <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <p><strong>Projects:</strong> 15+</p>
                          <p><strong>Skills:</strong> 20+</p>
                          <p><strong>Certifications:</strong> 6</p>
                          <p><strong>Experience:</strong> 1+ Month (Internship)</p>
                        </div>
                      </div>

                      <div className={`p-4`}>
                        <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2">
                          <Download size={16} />
                          Download Resume
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* More Menu Dropdown */}
                <div className="hidden sm:block relative">
                  <button
                    onClick={() => setShowMoreMenu(!showMoreMenu)}
                    className={`px-3 py-2 rounded-lg transition-all ${
                      isDark 
                        ? 'bg-slate-800 hover:bg-slate-700' 
                        : 'bg-slate-100 hover:bg-slate-200'
                    } flex items-center gap-2`}
                  >
                    <span className="text-lg">⋮</span>
                  </button>

                  {/* More Menu */}
                  {showMoreMenu && (
                    <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl ${
                      isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
                    } overflow-hidden z-50`}>
                      <a href="#projects" className={`block px-4 py-3 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'} transition-colors border-b ${isDark ? 'border-slate-700' : 'border-slate-200'} flex items-center gap-2`}>
                        <Code2 size={18} className={isDark ? 'text-cyan-400' : 'text-blue-600'} />
                        <span>View Projects</span>
                      </a>
                      <a href="#skills" className={`block px-4 py-3 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'} transition-colors border-b ${isDark ? 'border-slate-700' : 'border-slate-200'} flex items-center gap-2`}>
                        <Zap size={18} className={isDark ? 'text-cyan-400' : 'text-blue-600'} />
                        <span>Skills & Tools</span>
                      </a>
                      <a href="#experience" className={`block px-4 py-3 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'} transition-colors border-b ${isDark ? 'border-slate-700' : 'border-slate-200'} flex items-center gap-2`}>
                        <Briefcase size={18} className={isDark ? 'text-cyan-400' : 'text-blue-600'} />
                        <span>Experience</span>
                      </a>
                      <div className={`px-4 py-3 border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                        <p className={`text-xs font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>SOCIAL LINKS</p>
                        <div className="flex gap-3">
                          <a href="#" className={`p-2 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}>
                            <Github size={16} />
                          </a>
                          <a href="#" className={`p-2 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}>
                            <Linkedin size={16} />
                          </a>
                          <a href="#" className={`p-2 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}>
                            <Mail size={16} />
                          </a>
                          <a href="#" className={`p-2 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}>
                            <Instagram size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Theme Toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`p-2 rounded-lg transition-all ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
                  title="Toggle dark mode"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2"
                  title="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu - Enhanced */}
            {isMenuOpen && (
              <div className={`lg:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50/50'}`}>
                {/* Navigation Links */}
                <div className={`pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <p className={`px-4 text-xs font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>NAVIGATION</p>
                  {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`block px-4 py-2 rounded-lg hover:bg-slate-700/50 transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className={`pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <p className={`px-4 text-xs font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>QUICK ACTIONS</p>
                  <button className="w-[calc(100%-2rem)] mx-2 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all mb-2 flex items-center justify-center gap-2">
                    <Download size={16} />
                    Resume
                  </button>
                </div>

                {/* Mobile Details */}
                <div className={`px-4 py-3 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <p className={`text-xs font-bold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>ABOUT</p>
                  <div className={`text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p><strong>📧 Email:</strong> likhith@email.com</p>
                    <p><strong>📍 Location:</strong> India</p>
                    <p><strong>💼 Role:</strong> ECE Student</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className={`pt-36 pb-24 px-4 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950' 
            : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
        }`}>
          {/* Starfield background */}
          <Starfield isDark={isDark} />

          {/* Dynamic Nebulas in Dark Mode */}
          {isDark && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="nebula-cloud w-[500px] h-[500px] bg-purple-900/10 -top-40 -left-40 animate-drift"></div>
              <div className="nebula-cloud w-[550px] h-[550px] bg-cyan-900/10 bottom-10 right-10 animate-drift" style={{ animationDelay: '-15s' }}></div>
            </div>
          )}

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block mb-2 text-3xl md:text-4xl lg:text-5xl font-light">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    Likhith Somisetty
                  </span>
                </div>
                
                <p className={`text-xl md:text-2xl ${isDark ? 'text-cyan-300/90' : 'text-blue-600'} mb-8 font-normal`}>
                  Electronics & Communication Engineering Student | Software Developer | AI Enthusiast
                </p>

                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mb-8 leading-relaxed`}>
                  Building innovative software, AI solutions, and digital experiences. Passionate about solving real-world problems through technology and continuous learning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#projects" className="px-8 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/45 text-center">
                    View Projects
                  </a>
                  <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 ${
                    isDark 
                      ? 'border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10' 
                      : 'border border-blue-500 text-blue-600 hover:bg-blue-500/10'
                  }`}>
                    <Download size={18} />
                    Download Resume
                  </button>
                </div>
              </div>

              {/* Animated Avatar Box */}
              <div className="lg:col-span-5 flex justify-center items-center py-10 relative">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center animate-float">
                  
                  {/* Space Glow Rings (behind avatar) */}
                  <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 animate-spin" style={{ animationDuration: '40s' }} />
                  <div className="absolute inset-8 rounded-full border border-dashed border-purple-500/20 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
                  
                  {/* Orbital Track 1 (cyan) */}
                  <div className="absolute w-[260px] h-[260px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full border border-cyan-500/15 pointer-events-none flex items-center justify-center">
                    {/* Orbiting Moon 1 (React logo or Code icon) */}
                    <div className="absolute w-8 h-8 rounded-full bg-slate-900 border border-cyan-500 flex items-center justify-center animate-orbit-1 shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                      <Code2 size={16} className="text-cyan-400" />
                    </div>
                  </div>

                  {/* Orbital Track 2 (purple) */}
                  <div className="absolute w-[340px] h-[340px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full border border-purple-500/15 pointer-events-none flex items-center justify-center">
                    {/* Orbiting Moon 2 (Database/Zap icon) */}
                    <div className="absolute w-8 h-8 rounded-full bg-slate-900 border border-purple-500 flex items-center justify-center animate-orbit-2 shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                      <Database size={16} className="text-purple-400" />
                    </div>
                  </div>

                  {/* Avatar Circular Frame */}
                  <div className="relative w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-cyan-500/60 p-1 bg-slate-950/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:border-cyan-400 transition-all duration-500 z-10 group">
                    <img 
                      src={avatar} 
                      alt="Likhith Somisetty" 
                      className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Glowing scanning sweep line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  </div>

                  {/* Particle dots surrounding the avatar */}
                  <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-cyan-400 blur-[1px] animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-2.5 h-2.5 rounded-full bg-purple-400 blur-[1px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-20 right-12 w-1.5 h-1.5 rounded-full bg-blue-400 blur-[1px] animate-pulse" style={{ animationDelay: '0.8s' }}></div>

                </div>
              </div>

            </div>

            <div className={`flex justify-center gap-6 pt-12 animate-bounce` } style={{animationDelay: `${scrollY * 0.001}s`}}>
              <ChevronDown size={32} className={`${isDark ? 'text-cyan-500' : 'text-blue-500'} opacity-70`} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 px-4 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950' 
            : 'bg-white'
        }`}>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">About Me</h2>

            <div className={`grid md:grid-cols-2 gap-12 ${isDark ? 'galaxy-glass shadow-[0_0_30px_rgba(139,92,246,0.05)] border-slate-800' : 'bg-slate-50 border border-slate-200'} p-8 rounded-2xl transition-all duration-300`}>
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Who I Am</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
                  I'm a passionate Electronics & Communication Engineering student with a keen interest in software development and artificial intelligence. I believe in creating solutions that make a real impact.
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  My journey has involved building full-stack applications, exploring AI technologies, and continuously expanding my technical skill set.
                </p>
              </div>

              <div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>My Goals</h3>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-start">
                    <span className={`mr-3 text-xl ${isDark ? 'text-cyan-500' : 'text-blue-500'}`}>✓</span>
                    <span>Build impactful software solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-3 text-xl ${isDark ? 'text-cyan-500' : 'text-blue-500'}`}>✓</span>
                    <span>Master AI and Machine Learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-3 text-xl ${isDark ? 'text-cyan-500' : 'text-blue-500'}`}>✓</span>
                    <span>Create engaging web experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`mr-3 text-xl ${isDark ? 'text-cyan-500' : 'text-blue-500'}`}>✓</span>
                    <span>Share knowledge through content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 px-4 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 border-t border-slate-900' 
            : 'bg-slate-50 border-t border-slate-100'
        }`}>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Skills & Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className={`p-6 rounded-xl transition-all duration-300 ${isDark ? 'galaxy-glass galaxy-glass-hover' : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'}`}>
                  <h3 className={`text-lg font-bold mb-4 flex items-center ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                    {skillGroup.category === 'Programming' && <Code2 size={20} className="mr-2" />}
                    {skillGroup.category === 'Tools' && <Zap size={20} className="mr-2" />}
                    {skillGroup.category === 'Database' && <Database size={20} className="mr-2" />}
                    {skillGroup.category}
                  </h3>

                  <div className="mb-4">
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-950 border border-slate-900' : 'bg-slate-200'}`}>
                      <div 
                        className={`h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500 ${isDark ? 'shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`}
                        style={{width: `${skillGroup.level}%`}}
                      ></div>
                    </div>
                    <p className={`text-sm mt-2 ${isDark ? 'text-cyan-400/80' : 'text-gray-600'}`}>{skillGroup.level}% Proficiency</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className={`text-sm px-3 py-1 rounded-full ${isDark ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' : 'bg-blue-100 text-blue-700'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 px-4 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 border-t border-slate-900' 
            : 'bg-white border-t border-slate-100'
        }`}>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Featured Projects</h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                      : isDark 
                        ? 'bg-slate-900 hover:bg-slate-800 text-gray-300 hover:text-white border border-slate-800' 
                        : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`group rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] ${
                    isDark 
                      ? 'galaxy-glass galaxy-glass-hover' 
                      : 'bg-slate-50 border border-slate-200 hover:shadow-xl hover:border-blue-500'
                  }`}
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className={`h-40 flex items-center justify-center text-6xl ${
                    isDark 
                      ? 'bg-slate-950/60 border-b border-slate-900/80 shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)]' 
                      : 'bg-gradient-to-br from-slate-100 to-slate-200'
                  }`}>
                    <span className="group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                  </div>

                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                      isDark 
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded ${
                          isDark 
                            ? 'bg-slate-950/80 text-cyan-400 border border-slate-900' 
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`flex gap-3 pt-4 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
                      <a href={project.github} className={`flex items-center gap-2 flex-1 justify-center py-2 rounded-lg transition-colors ${
                        isDark 
                          ? 'bg-slate-950/60 hover:bg-slate-900 border border-slate-800 text-gray-300 hover:text-white' 
                          : 'bg-slate-200 hover:bg-slate-300'
                      }`}>
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a href={project.demo} className="flex items-center gap-2 flex-1 justify-center py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/20 text-white text-sm font-semibold transition-all">
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-20 px-4 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 border-t border-slate-900' 
            : 'bg-slate-50 border-t border-slate-100'
        }`}>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</h2>

            <div className={`relative pl-8 ${isDark ? 'border-l-2 border-slate-800' : 'border-l-2 border-slate-300'}`}>
              <div className={`absolute w-4 h-4 rounded-full top-2 -left-[9px] ${isDark ? 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'bg-blue-500'}`}></div>

              <div className={`p-6 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'galaxy-glass hover:border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.03)] hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]' 
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold">Rakon India Pvt Ltd</h3>
                  <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold ${
                    isDark 
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>Internship</span>
                </div>
                <p className={`text-sm ${isDark ? 'text-cyan-400/80' : 'text-blue-600'} mb-3`}>June 2025 – July 2025</p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  Worked on engineering and technical projects, gaining industry experience and practical knowledge in real-world software development environments.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${isDark ? 'bg-slate-950/80 text-cyan-300 border border-slate-900' : 'bg-blue-100 text-blue-700'}`}>Technical Projects</span>
                  <span className={`text-xs px-3 py-1 rounded-full ${isDark ? 'bg-slate-950/80 text-cyan-300 border border-slate-900' : 'bg-blue-100 text-blue-700'}`}>Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className={`py-20 px-4 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 border-t border-slate-900' 
            : 'bg-white border-t border-slate-100'
        }`}>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Certifications & Awards</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCert(cert)}
                  className={`p-6 rounded-xl text-left transition-all duration-300 hover:scale-[1.04] ${
                    isDark 
                      ? 'galaxy-glass hover:border-cyan-500/50 shadow-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]' 
                      : 'bg-slate-50 border border-slate-200 hover:border-blue-500'
                  }`}
                >
                  <Award size={32} className={`mb-3 ${isDark ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]' : 'text-blue-600'}`} />
                  <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
                </button>
              ))}
            </div>

            {/* Certification Modal */}
            {selectedCert && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
                <div className={`rounded-xl p-8 max-w-md w-full border transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-950/95 border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-white' 
                    : 'bg-white border-slate-200 shadow-2xl text-slate-900'
                }`} onClick={e => e.stopPropagation()}>
                  <h3 className="text-2xl font-bold mb-2">{selectedCert.name}</h3>
                  <p className={`${isDark ? 'text-cyan-400/80' : 'text-blue-600'} mb-6 font-medium`}>Issued by {selectedCert.issuer}</p>
                  <div className={`w-full h-40 ${isDark ? 'bg-slate-900/60 border border-slate-800' : 'bg-gradient-to-br from-slate-100 to-slate-200'} rounded-lg flex items-center justify-center mb-6`}>
                    <Award size={64} className={`${isDark ? 'text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]' : 'text-blue-600'}`} />
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Achievements Section */}
        <section className={`py-20 px-4 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 border-t border-slate-900' 
            : 'bg-slate-50 border-t border-slate-100'
        }`}>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Achievements</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className={`text-center p-8 rounded-xl transition-all duration-300 ${
                    isDark 
                      ? 'galaxy-glass hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]' 
                      : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="text-5xl mb-4">{achievement.emoji}</div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent`}>
                    {achievement.value}+
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}>{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 px-4 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 border-t border-slate-900' 
            : 'bg-white border-t border-slate-100'
        }`}>
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Get In Touch</h2>

            <form className={`space-y-6 p-8 rounded-2xl transition-all duration-300 ${
              isDark 
                ? 'galaxy-glass shadow-[0_0_40px_rgba(139,92,246,0.03)] border-slate-800/80' 
                : 'bg-slate-50 border border-slate-200 shadow-sm'
            }`}>
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-950/60 border border-slate-800/80 text-white focus:border-cyan-500/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]' 
                      : 'bg-white border border-slate-300 focus:border-blue-500'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-950/60 border border-slate-800/80 text-white focus:border-cyan-500/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]' 
                      : 'bg-white border border-slate-300 focus:border-blue-500'
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-950/60 border border-slate-800/80 text-white focus:border-cyan-500/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]' 
                      : 'bg-white border border-slate-300 focus:border-blue-500'
                  }`}
                  placeholder="How can I help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 resize-none ${
                    isDark 
                      ? 'bg-slate-950/60 border border-slate-800/80 text-white focus:border-cyan-500/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]' 
                      : 'bg-white border border-slate-300 focus:border-blue-500'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              <a href="#" className={`p-4 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                  : 'bg-slate-100 hover:bg-slate-200 text-blue-600'
              }`}>
                <Mail size={24} />
              </a>
              <a href="#" className={`p-4 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                  : 'bg-slate-100 hover:bg-slate-200 text-blue-600'
              }`}>
                <Linkedin size={24} />
              </a>
              <a href="#" className={`p-4 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                  : 'bg-slate-100 hover:bg-slate-200 text-blue-600'
              }`}>
                <Github size={24} />
              </a>
              <a href="#" className={`p-4 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                  : 'bg-slate-100 hover:bg-slate-200 text-blue-600'
              }`}>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${
          isDark 
            ? 'bg-slate-950 border-t border-slate-900 text-gray-400' 
            : 'bg-slate-100 border-t border-slate-200 text-gray-600'
        } py-8 px-4 relative overflow-hidden transition-all duration-300`}>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">
                © 2025 Likhith Somisetty. All rights reserved.
              </p>
              <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className={`mt-4 md:mt-0 px-6 py-2 rounded-lg font-medium transition-all ${
                  isDark 
                    ? 'bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                }`}
              >
                ↑ Back to top
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

