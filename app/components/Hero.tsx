"use client";

import Image from "next/image";

export default function Hero() {
  
  const scrollToMenu = () => {
    const menuSection = document.getElementById('treatments');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900">
      
      {/* 1. IMAGINEA DE FUNDAL */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg" // Asigura-te ca poza e in folderul public
          alt="3 Monkeys Luxury Spa Phuket"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Gradient fin pentru a face textul lizibil */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-stone-900/90" />
      </div>

      {/* 2. BADGE-UL GOOGLE 4.9 (Dreapta Sus - Element de incredere) */}
      <div className="absolute top-28 right-6 md:top-32 md:right-12 z-20 animate-fade-in-up">
        <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-2xl transition-transform hover:scale-105 cursor-default">
           {/* Logo text Google */}
           <span className="text-[10px] font-bold uppercase tracking-widest text-white opacity-80">Google</span>
           
           {/* Separator vertical */}
           <div className="h-4 w-[1px] bg-white/30"></div>
           
           {/* Stelele si Nota */}
           <div className="flex items-center gap-1">
             <span className="text-amber-400 text-sm">★★★★★</span>
             <span className="font-bold text-white text-sm">4.9</span>
           </div>
        </div>
      </div>

      {/* 3. CONTINUTUL CENTRAL */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        
        {/* Locatia exacta si vibe-ul */}
        <div className="animate-fade-in-up mb-6 flex flex-col items-center gap-2">
           <span className="h-[1px] w-12 bg-amber-400/80 inline-block mb-2"></span>
           <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-200 uppercase">
             Phuket • Panwa Bay • Thailand
           </p>
        </div>

        {/* Titlu Masiv */}
        <h1 className="mb-6 text-5xl font-serif text-white drop-shadow-2xl md:text-7xl lg:text-8xl tracking-tight">
          3 Monkeys
        </h1>

        {/* Slogan Nou - Mai organic si precis */}
        <p className="mb-10 max-w-lg text-lg text-stone-100 md:text-2xl font-light leading-relaxed opacity-90">
          The Art of Thai Healing. <br/>
          <span className="text-sm md:text-base opacity-80 mt-2 block font-sans tracking-wider">
            Traditional Massage • Organic Spa • Deep Relaxation
          </span>
        </p>

        {/* Buton Functional - Duce la meniu */}
        <button 
          onClick={scrollToMenu}
          className="group relative overflow-hidden rounded-full border border-white/40 bg-white/5 px-10 py-4 backdrop-blur-sm transition-all hover:bg-white hover:text-stone-900 hover:scale-105 duration-300"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            View Treatments
          </span>
        </button>

      </div>
    </section>
  );
}