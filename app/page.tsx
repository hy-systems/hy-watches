import React from 'react';

export default function HYWatchesStorefront() {
  const coreCollection = [
    { id: "01", model: "MOD-01", name: "The Classic Diver", price: "4,600", tags: ["41.5mm", "Automatic"], swatch: "#DDDEDF", image: "https://lucytimepieces.com/wp-content/uploads/2026/07/14-300x300.png" },
    { id: "02", model: "MOD-02", name: "The Field Watch", price: "4,600", tags: ["38mm", "Automatic"], swatch: "#292929", image: "https://lucytimepieces.com/wp-content/uploads/2026/07/13-300x300.png" },
    { id: "03", model: "MOD-03", name: "The Chronograph", price: "3,600", tags: ["41.5mm", "Meca-Quartz"], swatch: "#DDDEDF", image: "https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-300x300.webp" },
    { id: "04", model: "MOD-04", name: "The Minimalist", price: "5,600", tags: ["40mm", "Automatic"], swatch: "#292929", image: "https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-300x300.png" }
  ];

  const features = [
    { title: 'Waterproof checked', desc: 'All watches are water resistance checked to at least 300m to ensure reliability and durability in all conditions.', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-67-02-sebastien-ogier-carbon-tpt-2024-richard-mille-43740914483444.jpg' },
    { title: 'Accuracy regulated & tested', desc: 'HY watches feature accuracy-tested movements, ensuring reliable and precise timekeeping across all models.', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126711chnr-root-beer-stainless-steel-rose-gold-black-dial-2021-rolex-1221882571.jpg' },
    { title: 'Quality checked and certified', desc: 'HY watches are quality checked by our experts, reflecting our commitment and pride in delivering the best craftsmanship.', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5711-1a-010-tiffany-co-stainless-steel-blue-dial-2018-patek-philippe-1202180049.jpg' }
  ];

  return (
    <div className="min-h-screen bg-unimaticLight text-black">
      <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center pointer-events-auto">
        <div className="flex gap-6 items-center bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-black/10">
          <span className="font-bold tracking-tight uppercase">HY Watches</span>
          <nav className="hidden md:flex gap-4 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:opacity-60">New In</a>
            <a href="#" className="hover:opacity-60">Watches</a>
            <a href="#" className="hover:opacity-60">Accessories</a>
          </nav>
        </div>
        <div className="flex gap-4 items-center bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-black/10 font-mono text-[10px] uppercase tracking-widest">
          <a href="#" className="hover:opacity-60 hidden md:block">Search</a>
          <a href="#" className="hover:opacity-60 hidden md:block">Account</a>
          <a href="#" className="hover:opacity-60 flex items-center gap-2">Cart <span className="w-2 h-2 rounded-full bg-unimaticAccent animate-pulse"></span></a>
        </div>
      </header>

      <section className="relative w-full h-[85vh] bg-black flex items-end p-6 md:p-12 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
          <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight">
            Crafting modern timepieces that merge iconic design, advanced technical solutions, and high performance.
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl w-full md:w-[320px] text-white">
            <span className="bg-white/20 px-3 py-1 rounded text-[10px] uppercase font-mono tracking-wider">Capsule</span>
            <p className="text-white/50 font-bold mt-4 mb-2">Built to make a statement.</p>
            <h1 className="text-2xl font-bold leading-tight mb-8">Raw in form, sharp in detail, impossible to overlook.</h1>
            <button className="w-full bg-white text-black py-3 rounded font-medium text-sm hover:scale-[1.02] transition-transform">Discover the Capsule</button>
          </div>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12 border-b border-black/10 pb-6">
          <h2 className="text-3xl font-bold tracking-tight">New arrivals</h2>
          <span className="font-mono text-xs uppercase text-black/50">4/4 Catalog</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCollection.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[3/4] bg-[#EDEDED] rounded-xl overflow-hidden mb-4 p-6 flex items-center justify-center">
                <div className="absolute top-3 left-3 flex gap-2 z-10">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-mono text-black/60 bg-white/60 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <img src={item.image} alt={item.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-xl" />
              </div>
              <div className="flex justify-between items-center text-sm font-bold mb-2">
                <h3>{item.name}</h3>
                <span>${item.price}</span>
              </div>
              <div className="h-[1px] w-full bg-black/10 my-2"></div>
              <div className="flex justify-between items-center text-xs text-black/50 font-mono uppercase">
                <span>{item.model}</span>
                <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: item.swatch }}></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 border-y border-black/10">
        <div className="relative aspect-square md:aspect-[5/4] bg-black group overflow-hidden cursor-pointer">
          <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-datejust-41-126334-stainless-steel-blue-diamond-dial-jubilee-2021-rolex-1197074364.jpg" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 opacity-80" alt="Classic" />
          <div className="absolute top-12 left-12 text-white">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Classic</h2>
            <p className="opacity-70 font-medium">Explore our most iconic permanent line.</p>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[5/4] bg-[#222] group overflow-hidden cursor-pointer">
          <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" alt="Toolwatches" />
          <div className="absolute top-12 left-12 text-white">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Toolwatches</h2>
            <p className="opacity-70 font-medium">Explore our purpose-built toolwatches.</p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-black/5 flex flex-col">
              <div className="w-full h-[300px] bg-[#D9D9D9] rounded-lg overflow-hidden mb-6">
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover grayscale" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{feature.title}</h3>
              <p className="text-sm text-black/60 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-unimaticLight px-6 lg:px-12 py-16 text-xs font-mono uppercase tracking-widest text-black/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-black/10 pb-16">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black mb-2">Watches</h3>
            <a href="#" className="hover:text-black">Classic</a>
            <a href="#" className="hover:text-black">Toolwatch</a>
            <a href="#" className="hover:text-black">Limited Editions</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black mb-2">Brand</h3>
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Melbourne Flagship</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <span>Sales Terms</span>
            <span>Privacy Statement</span>
          </div>
          <div>© 2026 HY Watches. Built for performance.</div>
        </div>
      </footer>
    </div>
  );
}
