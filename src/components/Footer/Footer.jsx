import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-3 border-b border-gray-300">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold">Quick Links</span>
          <span>&gt;</span>
          <a href="/" className="hover:text-purple-700">
            Home
          </a>
          <span>&gt;</span>
          <a href="/" className="hover:text-purple-700">
            New Vehicles
          </a>
          <span>&gt;</span>
          <a href="/" className="hover:text-purple-700">
            Used Vehicles
          </a>
          <span>&gt;</span>
          <a href="/" className="hover:text-purple-700">
            Service
          </a>
          <span>&gt;</span>
          <a href="/" className="hover:text-purple-700">
            Parts
          </a>
          <span>&gt;</span>
          <a href="/" className="hover:text-purple-700">
            Financial Services
          </a>
          <span>&gt;</span>
          <a href="/" className="hover:text-purple-700">
            Contact Us
          </a>
          <span>&gt;</span>
          <a href="/" className="hover:text-purple-700">
            Sitemap
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© Copyright 2014 Markham Infiniti. All Rights Reserved.</p>
        <div className="mt-2 md:mt-0">
          powered by{" "}
          <a
            href="#"
            className="text-blue-600 font-semibold"
          >
            e-DEALER.CA
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
