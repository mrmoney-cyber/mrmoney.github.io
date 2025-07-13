import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    sectionsRef.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mock portfolio data
  const portfolioCategories = [
    { id: 'trailers', label: 'Cinematic Trailers' },
    { id: 'musicvideos', label: 'AI Music Videos' },
    { id: 'productads', label: 'Product Ads' },
    { id: 'ugc', label: 'UGC/Vertical Content' },
    { id: 'vfx', label: '3D Morphs & VFX' },
    { id: 'horror', label: 'Horror Shorts' },
    { id: 'commercials', label: 'Commercial Projects' },
  ];

  const portfolioItems = [
    {
      category: 'trailers',
      title: 'Luxury Pen Transformation',
      preview: 'https://picsum.photos/id/1074/400/300 ',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
      description: 'Client wanted a dreamlike transformation for their luxury pen brand. I used Kling AI + Veo 3 to create a morphing sequence from pen → award → logo. Result: 90k views in 24hrs.',
    },
    {
      category: 'musicvideos',
      title: 'Epic Cinematic Music Video',
      preview: 'https://picsum.photos/id/1075/400/300 ',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
      description: 'Music video that looks like a Netflix trailer with AI-generated scenes and cinematic transitions.',
    },
    {
      category: 'productads',
      title: 'Smartwatch Product Ad',
      preview: 'https://picsum.photos/id/1076/400/300 ',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
      description: 'Clean product animation using AI tools to showcase smartwatch features in motion.',
    },
    {
      category: 'ugc',
      title: 'Social Media UGC Reel',
      preview: 'https://picsum.photos/id/1077/400/300 ',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
      description: 'Short-form vertical content optimized for Instagram and TikTok engagement.',
    },
    {
      category: 'vfx',
      title: 'Morph Sequence Demo',
      preview: 'https://picsum.photos/id/1078/400/300 ',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
      description: 'Advanced morph effects between objects using state-of-the-art AI tools.',
    },
    {
      category: 'horror',
      title: 'Horror Short Film Teaser',
      preview: 'https://picsum.photos/id/1079/400/300 ',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
      description: 'Spooky horror teaser created entirely with AI tools — dark mood, suspenseful cuts.',
    },
    {
      category: 'commercials',
      title: 'Brand Commercial Showcase',
      preview: 'https://picsum.photos/id/1080/400/300 ',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ ',
      description: 'Full commercial production including concept development, music sync, and final delivery.',
    },
  ];

  const testimonials = [
    {
      quote: "This blew my mind — it looks like a \$20k ad for a \$400 budget!",
      author: "Jordan, startup founder",
    },
    {
      quote: "I’ve never seen AI look this cinematic. My music video came out like a Netflix trailer.",
      author: "Indie artist",
    },
    {
      quote: "His storytelling, style, and direction are next-level. Highly recommended.",
      author: "Charles F.",
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '\$150',
      description: '10–15s Vertical AI Video | 1 revision | Simple concept + music sync',
    },
    {
      name: 'Pro',
      price: '\$400',
      description: '30–60s Cinematic Video | Trailer-style editing | Custom concept, sound, transitions | 2 revisions',
    },
    {
      name: 'Premium',
      price: '\$800+',
      description: 'Up to 2 mins | Advanced storytelling | Voiceover & SFX | Scene-by-scene storyboards | Multiple characters | 3+ revisions | Custom license',
    },
  ];

  return (
    <div className="font-sans text-white bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black bg-opacity-80 backdrop-blur-md">
        <h1 className="text-xl font-bold">AI CREATOR</h1>
        <ul className="flex space-x-6 text-sm uppercase tracking-wider">
          {['home', 'about', 'portfolio', 'pricing', 'testimonials', 'process', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`hover:text-gray-400 transition ${activeSection === item ? 'text-white border-b border-white' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section ref={(el) => (sectionsRef.current.home = el)} id="home" className="relative h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://cdn.pixabay.com/video/2021/11/16/96316-5939417_1920.mp4 " type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in-up">
            Jaw-Dropping AI Videos That Tell Your Story.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Movie Trailers • Commercials • Music Videos • 3D Product Ads • UGC + More
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('portfolio')} className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
              See My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition">
              Get A Quote
            </button>
            <button onClick={() => alert("Showreel coming soon!")} className="px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition">
              Watch Showreel
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={(el) => (sectionsRef.current.about = el)} id="about" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src="https://picsum.photos/id/1073/800/800 " alt="Portrait" className="object-cover w-full h-full grayscale" />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6">
              Hi, I’m Alex Turner, a creative AI director turning brands, songs, and stories into cinematic experiences. Using Veo 3, Kling AI, and a custom workflow, I craft stunning visuals that break the scroll and captivate audiences — on screens big and small.
            </p>
            <div className="space-y-4 text-sm">
              <p>📍 Los Angeles, CA</p>
              <p>📅 5+ Years Experience</p>
              <p>🛠️ Expert in Veo 3, Kling AI, Runway, DALL-E, Midjourney</p>
              <p>💼 Featured on Fiverr, worked with global clients, and launched viral campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={(el) => (sectionsRef.current.portfolio = el)} id="portfolio" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Portfolio</h2>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img src={item.preview} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={(el) => (sectionsRef.current.pricing = el)} id="pricing" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <button className="w-full mt-4 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => scrollToSection('contact')} className="text-white underline hover:text-gray-300 transition">
              Need something different? Let’s Talk
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={(el) => (sectionsRef.current.testimonials = el)} id="testimonials" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Testimonials</h2>
          <div className="overflow-x-auto flex gap-6 pb-4 hide-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[300px] bg-gray-900 p-6 rounded-lg shadow-lg">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-400">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={(el) => (sectionsRef.current.process = el)} id="process" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-full text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Brief</h3>
              <p className="text-gray-400">You send the idea or product</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-full text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Concept</h3>
              <p className="text-gray-400">I create a style draft and shot list</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-full text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Production</h3>
              <p className="text-gray-400">AI generation + editing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-full text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-400">Final cut with music, VFX, and logo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={(el) => (sectionsRef.current.contact = el)} id="contact" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Let’s Create Something Epic</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="bg-black border border-white p-4 rounded text-white placeholder-gray-500 focus:outline-none" />
            <input type="email" placeholder="Email" className="bg-black border border-white p-4 rounded text-white placeholder-gray-500 focus:outline-none" />
            <select className="bg-black border border-white p-4 rounded text-white focus:outline-none">
              <option value="">Project Type</option>
              <option value="trailer">Trailer</option>
              <option value="musicvideo">Music Video</option>
              <option value="ad">Ad</option>
              <option value="ugc">UGC</option>
            </select>
            <input type="date" className="bg-black border border-white p-4 rounded text-white focus:outline-none" />
            <input type="text" placeholder="Budget Range" className="bg-black border border-white p-4 rounded text-white placeholder-gray-500 focus:outline-none" />
            <textarea rows="5" placeholder="Message" className="md:col-span-2 bg-black border border-white p-4 rounded text-white placeholder-gray-500 focus:outline-none"></textarea>
            <button type="submit" className="md:col-span-2 w-full py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Let’s Create Something Epic
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-center text-gray-500 text-sm">
        © 2025 AI Creator Portfolio. All rights reserved.
      </footer>
    </div>
  );
}