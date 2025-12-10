import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews"; // Asigura-te ca ai creat fisierul Reviews.tsx!

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* Sectiunea 1: HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* Sectiunea 2: POVESTEA (About) */}
      <section id="about" className="py-24 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-amber-600 text-sm font-bold tracking-widest uppercase mb-4 block">
            The Sanctuary
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-8">
            The Hidden Gem of Panwa
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6 text-lg font-light">
            Nestled in the quiet embrace of Panwa Bay, 3 Monkeys is more than a massage shop. 
            It is a sanctuary where traditional Thai healing meets organic tranquility. 
            Escape the noise, close your eyes, and let nature restore you.
          </p>
        </div>
      </section>

      {/* Sectiunea 3: RECENZII (Social Proof) */}
      {/* Aici aratam nota 4.9 inainte de meniu */}
      <div id="reviews">
        <Reviews />
      </div>

      {/* Sectiunea 4: MENIUL (Treatments) */}
      <div id="treatments">
        <Menu />
      </div>

      {/* Sectiunea 5: LOCATIE & CONTACT (Date Reale) */}
      <section id="location" className="py-20 bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* A. Informații Text (Stânga) */}
            <div className="text-center md:text-left space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
                Visit Our Sanctuary
              </h2>

              {/* Adresa */}
              <div>
                <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Location</h3>
                <p className="text-lg text-white leading-relaxed">
                  Panwa Bay, Phuket<br />
                  Wichit, Mueang Phuket District<br />
                  Phuket 83000, Thailand
                </p>
              </div>

              {/* Telefon (Click-to-Call) - NUMAR REAL */}
              <div>
                <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Call Us</h3>
                <a 
                  href="tel:+66828277900" 
                  className="text-2xl font-serif text-white hover:text-amber-400 transition-colors"
                >
                  +66 82 827 7900
                </a>
                <p className="text-sm text-stone-500 mt-1">WhatsApp Available</p>
              </div>

              {/* Program */}
              <div>
                <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">Opening Hours</h3>
                <p className="text-white">Daily: 10:00 AM - 10:00 PM</p>
                <p className="text-amber-500 text-sm mt-1">Walk-ins Welcome</p>
              </div>

              {/* Buton Navigare (Link scurt Google) */}
              {/* Poti inlocui linkul de mai jos cu cel scurt daca il ai (ex: goo.gl/maps/...) */}
              <a 
                href="https://www.google.com/maps/place/3+Monkeys+Massage+Panwa" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-stone-900 transition-all font-bold text-sm uppercase"
              >
                Get Directions
              </a>
            </div>

            {/* B. Harta Google Integrata (Dreapta) */}
            <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 relative bg-stone-800">
              
              {/* Iframe-ul tau real */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8433325694114!2d98.40478787601081!3d7.806404606924977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502d17186e4615%3A0xeb7037e4152310f2!2s3%20Monkey%20Massage!5e0!3m2!1sen!2sro!4v1765379284529!5m2!1sen!2sro" 
                className="w-full h-full absolute inset-0" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

          <div className="mt-20 pt-8 border-t border-white/10 text-xs text-stone-600 text-center flex justify-between items-center flex-col md:flex-row gap-4">
            <p>© 2025 3 Monkeys Massage Phuket.</p>
            <p className="opacity-50">Panwa Bay's Hidden Gem • Rated 4.9 on Google</p>
          </div>
        </div>
      </section>

    </main>
  );
}