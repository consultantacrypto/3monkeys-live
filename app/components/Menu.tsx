"use client";

import { useState } from "react";

// Aici sunt toate datele extrase din poza meniului
const services = [
  {
    id: 1,
    prices: "400 / 600",
    duration: "60 / 90 min",
    name: {
      en: "Oil Massage",
      ru: "Масляный массаж",
      de: "Ölmassage",
    },
  },
  {
    id: 2,
    prices: "350 / 600",
    duration: "60 / 90 min",
    name: {
      en: "Thai Massage",
      ru: "Тайский массаж",
      de: "Thai-Massage",
    },
  },
  {
    id: 3,
    prices: "200 / 350",
    duration: "30 / 60 min", // Atentie: Aici e diferit pe meniu
    name: {
      en: "Foot Massage",
      ru: "Массаж ног",
      de: "Fußmassage",
    },
  },
  {
    id: 4,
    prices: "500 / 700",
    duration: "60 / 90 min",
    name: {
      en: "Back Massage",
      ru: "Массаж спины",
      de: "Rückenmassage",
    },
  },
  {
    id: 5,
    prices: "500 / 700",
    duration: "60 / 90 min",
    name: {
      en: "Oil & Foot Massage",
      ru: "Масло и массаж ног",
      de: "Öl- & Fußmassage",
    },
  },
  {
    id: 6,
    prices: "500 / 700",
    duration: "60 / 90 min",
    name: {
      en: "Oil & Thai Massage",
      ru: "Ойл и тайский массаж",
      de: "Öl- & Thai-Massage",
    },
  },
  {
    id: 7,
    prices: "500 / 700",
    duration: "60 / 90 min",
    name: {
      en: "Aroma Massage",
      ru: "Аромамассаж",
      de: "Aromamassage",
    },
  },
  {
    id: 8,
    prices: "600 / 700", // Am pus 600 ca parea corectat cu sticker pe meniu, poti modifica la 500
    duration: "60 / 90 min",
    name: {
      en: "Coconut Massage",
      ru: "Кокосовый массаж",
      de: "Kokosölmassage",
    },
  },
  {
    id: 9,
    prices: "500 / 700",
    duration: "60 / 90 min",
    name: {
      en: "Sport Massage",
      ru: "Спортивный массаж",
      de: "Sportmassage",
    },
  },
  {
    id: 10,
    prices: "500 / 700",
    duration: "60 / 90 min",
    name: {
      en: "Aloe Vera Massage",
      ru: "Алоэ вера массаж",
      de: "Aloe Vera Massage",
    },
  },
  {
    id: 11,
    prices: "500",
    duration: "60 min",
    name: {
      en: "Face Massage",
      ru: "Лицо Массаж",
      de: "Gesichtsmassage",
    },
  },
  {
    id: 12,
    prices: "900 / 1200",
    duration: "90 / 120 min",
    name: {
      en: "Hot Stone",
      ru: "Горячий камень",
      de: "Hot Stone Massage",
    },
  },
  {
    id: 13,
    prices: "800 / 1000",
    duration: "90 / 120 min",
    name: {
      en: "Thai Herbal",
      ru: "Тайский травяной",
      de: "Thai-Kräuterstempel",
    },
  },
  {
    id: 14,
    prices: "600 / 800",
    duration: "60 / 90 min",
    name: {
      en: "Hot Oil",
      ru: "Горячее масло",
      de: "Heiße Ölmassage",
    },
  },
  {
    id: 15,
    prices: "600 / 800",
    duration: "60 / 90 min",
    name: {
      en: "Hot Aroma",
      ru: "Горячий аромат",
      de: "Heiße Aromamassage",
    },
  },
  {
    id: 16,
    prices: "600 / 800",
    duration: "60 / 90 min",
    name: {
      en: "Body Scrub",
      ru: "Скраб для тела",
      de: "Körperpeeling",
    },
  },
];

type Language = "en" | "ru" | "de";

export default function Menu() {
  const [lang, setLang] = useState<Language>("en");

  return (
    <section className="py-20 px-4 bg-stone-50" id="menu">
      <div className="max-w-5xl mx-auto">
        
        {/* Titlu & Selector Limba */}
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-bold tracking-widest uppercase mb-2 block">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8">
            Relaxation Menu
          </h2>

          {/* Butoanele de limba */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-md border border-stone-200">
            <button
              onClick={() => setLang("en")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                lang === "en" ? "bg-stone-800 text-white shadow-sm" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ru")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                lang === "ru" ? "bg-stone-800 text-white shadow-sm" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("de")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                lang === "de" ? "bg-stone-800 text-white shadow-sm" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              DE
            </button>
          </div>
        </div>

        {/* Lista de Servicii */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {services.map((service) => (
            <div key={service.id} className="group flex items-end justify-between border-b border-stone-300 pb-2 hover:border-amber-500 transition-colors">
              <div className="w-full">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
                    {service.name[lang]}
                  </h3>
                  <span className="text-xl font-serif font-bold text-stone-900 ml-4 whitespace-nowrap">
                    {service.prices} <span className="text-xs font-sans font-normal text-stone-500">THB</span>
                  </span>
                </div>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  Duration: {service.duration}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-500 text-sm italic">
            * Prices are in Thai Baht (THB)
          </p>
        </div>

      </div>
    </section>
  );
}