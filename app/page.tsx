import React from 'react';

export default function HyWatchesUnimaticStyle() {
  const coreCollection = [
    {
      id: "01",
      model: "MOD-01",
      name: "The Classic Diver",
      price: "4,600",
      image: "https://lucytimepieces.com/wp-content/uploads/2026/07/14-300x300.png"
    },
    {
      id: "02",
      model: "MOD-02",
      name: "The Field Watch",
      price: "4,600",
      image: "https://lucytimepieces.com/wp-content/uploads/2026/07/13-300x300.png"
    },
    {
      id: "03",
      model: "MOD-03",
      name: "The Chronograph",
      price: "3,600",
      image: "https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-300x300.webp"
    },
    {
      id: "04",
      model: "MOD-04",
      name: "The Minimalist",
      price: "5,600",
      image: "https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-300x300.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* Utility Navigation */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-6 border-b border-black">
        <div className="text-2xl font-black tracking-tighter uppercase mb-4 md:mb-0">
          HY Watches
        </div>
        <nav className="flex space-x-6 text-xs font-bold tracking-widest uppercase">
          <a href="#" className="hover:opacity-50 transition-opacity">Core Collection</a>
          <a href="#" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Cart (0)</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 border-b border-black">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6">
          Core <br /> Collection
        </h1>
        <p className="max-w-md text-sm font-medium tracking-wide leading-relaxed">
          Engineered for absolute reliability. Our permanent catalog is restricted to four essential silhouettes. No superfluous details.
        </p>
      </section>

      {/* 2x2 Strict Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black bg-gray-100 gap-px">
        {coreCollection.map((watch) => (
          <div 
            key={watch.id} 
            className="relative bg-white flex flex-col items-center justify-between p-12 hover:bg-gray-50 cursor-pointer transition-colors group"
          >
            {/* Model Badge */}
            <div className="absolute top-6 left-6 text-xs font-bold tracking-widest uppercase">
              {watch.model}
            </div>

            {/* Product Image */}
            <div className="w-full max-w-[280px] aspect-square my-12 transition-transform duration-700 group-hover:scale-105">
              <img 
                src={watch.image} 
                alt={watch.name} 
                className="w-full h-full object-contain" 
              />
            </div>

            {/* Product Info */}
            <div className="text-center w-full">
              <h2 className="text-xl font-black tracking-tight uppercase mb-2">
                {watch.name}
              </h2>
              <p className="text-sm font-bold opacity-70">
                ${watch.price} USD
              </p>
            </div>
            
            {/* Hover Action */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-bold tracking-widest uppercase border-b border-black pb-1">
                View Details
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Minimal Footer */}
      <footer className="px-6 py-12 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest uppercase">
        <div className="mb-6 md:mb-0">© 2026 HY Watches</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Privacy</a>
        </div>
      </footer>

    </div>
  );
}
