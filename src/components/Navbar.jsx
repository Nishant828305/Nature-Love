import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function GetStartedButton() {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate("/signup")}>
      Get Started
    </button>
  );
}
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
        {/* Logo + Tagline */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-700">
            <Link to="/">🌿 NatureLove</Link>
          </span>
          <span className="hidden md:block text-sm text-gray-500 italic">
            Embrace Nature, Embrace Life
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="hover:text-green-700 transition">About</Link>
          <Link to="/gallery" className="hover:text-green-700 transition">Gallery</Link>
          <Link to="/contact" className="hover:text-green-700 transition">Contact</Link>
          <Link to="/blog" className="hover:text-green-700 transition">Blog</Link>
          <button className="px-5 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
           <Link to="/signup">Get Started</Link> 
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-green-50 px-6 py-4 space-y-4">
          <Link to="/about" className="block hover:text-green-700">About</Link>
          <Link to="/gallery" className="block hover:text-green-700">Gallery</Link>
          <Link to="/contact" className="block hover:text-green-700">Contact</Link>
          <Link to="/blog" className="block hover:text-green-700">Blog</Link>
          <button>
             <Link to="signup">Get Started</Link>
          </button>
        </div>
      )}
    </header>
  );
}
