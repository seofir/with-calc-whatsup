import React, { useState, useEffect } from 'react';
import { MessageSquare, Mic, FileText, DollarSign, Zap, Check, ChevronDown, Play, Pause, Menu, X, Clock, Headphones, Smile } from 'lucide-react';

const FeatureCard = ({ icon, title, description, iconColor }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg">
    <div className={`${iconColor} mb-4`}>{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-purple-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorksStep = ({ number, title, description }) => (
  <div className="flex items-start mb-6">
    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-purple-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeSaved, setTimeSaved] = useState({ days: 500, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSaved(prev => {
        const newMinutes = prev.minutes + 1;
        const newHours = prev.hours + Math.floor(newMinutes / 60);
        const newDays = prev.days + Math.floor(newHours / 24);
        return {
          days: newDays,
          hours: newHours % 24,
          minutes: newMinutes % 60
        };
      });
    }, 5000); // Update every 5 seconds for demo purposes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-purple-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="mr-2" />
            <span className="text-2xl font-bold">VoiceText Pro</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-purple-200">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-purple-200">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-purple-200">Pricing</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-purple-500 p-4">
          <ul className="space-y-2">
            <li><a href="#features" className="block py-2 text-white" onClick={() => setIsMenuOpen(false)}>Features</a></li>
            <li><a href="#how-it-works" className="block py-2 text-white" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
            <li><a href="#pricing" className="block py-2 text-white" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
          </ul>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-800">Free WhatsApp Audio to Text</h1>
          <p className="text-xl mb-8 text-gray-600">Convert any WhatsApp voice message to text right within WhatsApp</p>
          <a href="#" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            Try for Free
          </a>
          <p className="mt-4 text-sm text-gray-500">Send a "Hi" message to get started!</p>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Why You'll Love VoiceText Pro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap size={48} />}
              title="Lightning Fast"
              description="Convert voice to text faster than you can say 'Why is this message so long?'"
              iconColor="text-yellow-500"
            />
            <FeatureCard
              icon={<Smile size={48} />}
              title="Sanity Saver"
              description="No more listening to 5-minute voice essays about what someone had for lunch"
              iconColor="text-pink-500"
            />
            <FeatureCard
              icon={<Clock size={48} />}
              title="Time is Money"
              description="Read messages at your own pace, because your time is precious (and so is your patience)"
              iconColor="text-purple-500"
            />
          </div>
        </section>

        <section className="mb-16 bg-purple-100 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">Time Saved Calculation</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-4 text-gray-700">Let's get real. If you convert a 2-minute voice note to text every day, that's:</p>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li>14 minutes saved per week</li>
              <li>1 hour saved per month</li>
              <li>12 hours saved per year</li>
            </ul>
            <p className="text-xl mb-6 text-gray-700">That's <span className="font-bold text-purple-600">12 hours per year</span> of your life you get back!</p>
            <div className="text-center">
              <p className="text-2xl font-bold mb-4 text-purple-600">Ready to reclaim your time?</p>
              <a href="#" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
                Use Our Bot for Free!
              </a>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">How It Works</h2>
          <div className="max-w-2xl mx-auto">
            <HowItWorksStep
              number="1"
              title="Send 'Hi' to Our WhatsApp Bot"
              description="Just send a simple 'Hi' message to our WhatsApp number to get started."
            />
            <HowItWorksStep
              number="2"
              title="Forward Voice Messages"
              description="Forward any voice message you want to convert to our bot."
            />
            <HowItWorksStep
              number="3"
              title="Receive Transcribed Text"
              description="Get the transcribed text back in seconds. No more listening required!"
            />
          </div>
        </section>

        <section id="pricing" className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-800">Simple, Transparent Pricing</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Free Trial</h3>
            <p className="text-4xl font-bold mb-4 text-purple-800">1 Hour Free</p>
            <p className="mb-6 text-gray-600">Try VoiceText Pro with no commitment</p>
            <ul className="text-left mb-8 text-gray-600">
              <li className="flex items-center mb-2"><Check className="mr-2 text-green-500" /> 1 hour of voice-to-text conversion</li>
              <li className="flex items-center mb-2"><Check className="mr-2 text-green-500" /> WhatsApp integration</li>
              <li className="flex items-center"><Check className="mr-2 text-green-500" /> Instant text delivery</li>
            </ul>
            <a href="#" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
              Start Free Trial
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 VoiceText Pro. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-purple-600 text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Clock className="mr-2" />
          <span>Time Saved: {timeSaved.days} days, {timeSaved.hours} hours, {timeSaved.minutes} minutes</span>
        </div>
        <button className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 font-bold py-2 px-4 rounded-full text-sm">
          Try for Free!
        </button>
      </div>
    </div>
  );
}

export default App;