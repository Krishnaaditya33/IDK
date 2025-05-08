// MailMind Website Layout in Next.js with TailwindCSS

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-blue-800 to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Smart Gmail Assistant</h1>
        <p className="text-xl text-gray-300 mb-8">Focus only on what matters with MailMind</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl text-lg font-medium">Try MailMind Free</button>
          <button className="border border-white px-6 py-3 rounded-2xl text-lg font-medium">Watch Demo</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">How MailMind Makes Email Management Effortless</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: 'AI-Powered Prioritization', desc: 'Learns what matters to you and highlights key emails automatically.' },
            { title: 'Smart Categorization', desc: 'Organizes emails into folders – Work, Personal, Follow-Up, and more.' },
            { title: 'Distraction-Free Mode', desc: 'Hides newsletters & low-priority mails with one click.' },
            { title: 'Personalized Dashboard', desc: 'See what truly needs your attention every day.' }
          ].map((feature, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">Why Busy Professionals Love MailMind</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {['Save 5+ Hours Weekly', 'Boost Productivity', 'Never Miss Important Emails', 'Focus on What Matters'].map((b, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow">
              <p className="text-xl font-medium">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Starter', features: 'Basic Email Filtering', price: 'Free' },
            { title: 'Pro', features: 'Full AI Inbox Assistant', price: '₹499/mo' },
            { title: 'Enterprise', features: 'Custom Integrations & Support', price: 'Contact Us' }
          ].map((plan, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-300 mb-4">{plan.features}</p>
              <p className="text-2xl font-semibold">{plan.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="bg-gray-950 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Email Productivity Tips</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            '5 Ways to Take Back Control of Your Gmail',
            'Inbox Zero is Dead. Here’s What Works Now.',
            'AI vs Manual Sorting: What’s Better?'
          ].map((post, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-bold">{post}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="mb-2">© {new Date().getFullYear()} MailMind. All rights reserved.</p>
        <p>Made with focus for productivity-first professionals.</p>
      </footer>
    </main>
  );
}
