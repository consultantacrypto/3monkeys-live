export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      country: "UK",
      text: "Absolutely the best massage I had in Phuket. The view over Panwa Bay is stunning, but the therapists are the real magic. Professional, clean, and deeply relaxing.",
      stars: 5,
    },
    {
      id: 2,
      name: "Dmitry Volkov",
      country: "Russia",
      text: "Excellent service. Very clean and hygienic. The Oil Massage was perfect after a long flight. Highly recommend this hidden gem.",
      stars: 5,
    },
    {
      id: 3,
      name: "Julia & Marc",
      country: "Germany",
      text: "We came back 3 times during our stay. The atmosphere is so peaceful compared to Patong. Authentic Thai massage with a touch of luxury.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-stone-50 relative overflow-hidden">
      {/* Element decorativ de fundal */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header cu Nota 4.9 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4 bg-white px-6 py-2 rounded-full shadow-sm border border-stone-100">
            <span className="text-amber-500 text-xl">★★★★★</span>
            <span className="font-bold text-stone-800">4.9 / 5.0</span>
            <span className="text-stone-400 text-sm border-l border-stone-200 pl-2 ml-1">
              on Google Maps
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-6">
            Loved by Travelers
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We don't just give massages; we create memories. See why guests from around the world rate 3 Monkeys as the top sanctuary in Panwa.
          </p>
        </div>

        {/* Grid de Recenzii */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:-translate-y-2 transition-transform duration-300">
              {/* Stele */}
              <div className="text-amber-400 text-lg mb-4">
                {"★".repeat(review.stars)}
              </div>
              
              {/* Text */}
              <p className="text-stone-600 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-xs">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">{review.name}</p>
                  <p className="text-xs text-stone-400">{review.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buton catre Google - LINK-UL TAU REAL */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?hl=en-RO&gl=ro&q=41,+3+Monkey+Massage,+30+Soi+Aonui,+Wichit,+Mueang+Phuket+District,+Phuket+83000,+Thailand&ludocid=16965121249051349234&lsig=AB86z5VIiTLm8Pl7NLpbiyflmN_V&hl=en&gl=RO#lrd=0x30502d17186e4615:0xeb7037e4152310f2,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-800 font-bold border-b border-stone-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors"
          >
            Read all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

      </div>
    </section>
  );
}