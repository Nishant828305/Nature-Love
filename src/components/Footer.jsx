// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">NatureCare</h2>
          <p className="text-gray-400 leading-relaxed">
            Inspiring and empowering nature lovers to create a sustainable
            future where people and the planet thrive together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/signup" className="hover:text-white">Get Started</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400">support@naturecare.com</p>
          <p className="text-gray-400">+1 (555) 123-4567</p>
          <p className="text-gray-400">123 Green Street, Eco City, Earth</p>
        </div>

        {/* Social Media */}
           <div>
        <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
        <div className="flex gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-blue-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-sky-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-blue-700 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NatureCare. All rights reserved.
      </div>
    </footer>
  );
}
