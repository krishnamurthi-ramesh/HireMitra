import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 mt-16" style={{ backgroundColor: "#020817" }}>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold">HireMitra</h2>
          <p className="mt-2 text-sm">
            Your trusted platform to connect job seekers with top companies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold">Quick Links</h3>
          <Link to="/jobs" className="hover:text-white">Find Jobs</Link>
          <Link to="/post-job" className="hover:text-white">Post a Job</Link>
          <Link to="/career" className="hover:text-white">Skill Up</Link>
          <Link to="/mentors" className="hover:text-white">Guidance & Referrals</Link>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com" className="hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/?flo=true" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hirrd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
