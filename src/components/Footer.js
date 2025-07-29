import React from "react";

function Footer() {
  return (
    <footer className="bg-[#d3dbc2] text-[#2f2f1d] text-center py-6 mt-16">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Twitter
        </a>
        <a href="https://blueskyweb.xyz" target="_blank" rel="noopener noreferrer" className="hover:underline">
          BlueSocial
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Sennai's Zone · All rights reserved.
      </p>
      <p className="text-xs text-gray-700 mt-1">
        This website and its content are the intellectual property of Sennai Kahsay. Unauthorized use or duplication without express permission is prohibited.
      </p>
    </footer>
  );
}

export default Footer;
