import '../src/index.css';

import React from "react";

export default function MailMindWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-400">MailMind</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Your Intelligent Email Assistant – declutter, organize, and stay focused.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold text-blue-300 mb-2">Smart Sorting</h3>
            <p className="text-gray-400">Automatically prioritize emails that matter most to you.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold text-blue-300 mb-2">Noise Reduction</h3>
            <p className="text-gray-400">Filter out unnecessary distractions from your inbox.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold text-blue-300 mb-2">Learning Preferences</h3>
            <p className="text-gray-400">Adapts to your email habits to serve you better over time.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About MailMind</h2>
          <p className="text-gray-400">
            MailMind is built for busy professionals who want to streamline their inbox and focus on what really matters. With smart AI-powered filters, MailMind helps you take control of your email life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
          <p className="text-gray-400 mb-4">Have questions? Reach out to us at <a className="text-blue-400" href="mailto:hello@mailmind.ai">hello@mailmind.ai</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} MailMind. All rights reserved.
      </footer>
    </div>
  );
}
