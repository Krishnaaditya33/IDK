import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white bg-opacity-80 shadow-sm z-50">
        <h1 className="text-2xl font-bold">MailMind</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:underline">About</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#projects" className="hover:underline">Showcase</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Smart Inbox Management
          </h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-6">
            Let MailMind handle the chaos. Prioritize what matters and keep your Gmail neat.
          </p>
          <Button className="text-white bg-black px-6 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">About MailMind</h3>
          <p className="text-gray-700 text-lg">
            MailMind is your executive assistant for Gmail. With intelligent prioritization, distraction reduction, and smart foldering, it learns your style and brings calm to your inbox.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">Core Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl shadow hover:shadow-md transition bg-white">
              <h4 className="text-xl font-bold mb-2">AI Email Prioritization</h4>
              <p>Sorts your emails automatically based on importance and context.</p>
            </div>
            <div className="p-6 rounded-2xl shadow hover:shadow-md transition bg-white">
              <h4 className="text-xl font-bold mb-2">Smart Folder Organization</h4>
              <p>Creates and maintains custom folders based on your email habits.</p>
            </div>
            <div className="p-6 rounded-2xl shadow hover:shadow-md transition bg-white">
              <h4 className="text-xl font-bold mb-2">Minimal Distractions</h4>
              <p>Disables non-essential notifications and helps you stay focused.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="projects" className="px-8 py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-12">Showcase</h3>
          <p className="text-gray-700 mb-4">
            Coming Soon: Real user feedback and productivity reports.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
          <p className="mb-4">Want to partner or invest? Drop us a message.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded border" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded border" />
            <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded border" />
            <Button className="bg-black text-white px-6 py-3 rounded-full">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} MailMind. All rights reserved.
      </footer>
    </main>
  );
}
