import React from 'react';

export default function HYWatchesStorefront() {
  const catalog = [
    {
      id: 'uwk-u1-aeg',
      name: 'Modello Uno U1-AEG',
      price: '795€',
      subtitle: 'Limited Edition, Diver',
      edition: 'Edition of 250',
      tags: ['41.5mm', 'Automatic'],
      imagePrimary: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-300x300.png',
      imageHover: 'https://lucytimepieces.com/wp-content/uploads/2026/07/13-300x300.png'
    },
    {
      id: 'uwk-u1-aeb',
      name: 'Modello Uno U1-AEB',
      price: '795€',
      subtitle: 'Limited Edition, Diver',
      edition: 'Edition of 250',
      tags: ['41.5mm', 'Automatic'],
      imagePrimary: 'https://lucytimepieces.com/wp-content/uploads/2026/07/13-300x300.png',
      imageHover: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-300x300.png'
    },
    {
      id: 'uwk-u3-aeg',
      name: 'Modello Tre U3-AEG',
      price: '730€',
      subtitle: 'Limited Edition, Chronograph',
      edition: 'Edition of 250',
      tags: ['41.5mm', 'Meca-Quartz'],
      imagePrimary: 'https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-300x300.webp',
      imageHover: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-300x300.png'
    },
    {
      id: 'uwk-u4-aeb',
      name: 'Modello Quattro U4-AEB',
      price: '670€',
      subtitle: 'Limited Edition, Time Only',
      edition: 'Edition of 250',
      tags: ['40mm', 'Automatic'],
      imagePrimary: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-300x300.png',
      imageHover: 'https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-300x300.webp'
    }
  ];

  const features = [
    {
      title: 'Waterproof checked',
      desc: 'All watches are water resistance checked to at least 300m to ensure reliability and durability in all conditions, from daily wear to underwater use.',
      img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-67-02-sebastien-ogier-carbon-tpt-2024-richard-mille-43740914483444.jpg'
    },
    {
      title: 'Accuracy regulated & tested',
      desc: 'HY watches feature accuracy-tested movements, ensuring reliable and precise timekeeping across all models.',
      img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126711chnr-root-beer-stainless-steel-rose-gold-black-dial-2021-rolex-1221882571.jpg'
    },
    {
      title: 'Quality checked and certified',
      desc: 'HY watches are quality checked by our experts, reflecting our commitment and pride in delivering the best craftsmanship, performance, and durability possible.',
      img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5711-1a-010-tiffany-co-stainless-steel-blue-dial-2018-patek-philippe-1202180049.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-black font-sans selection:bg-[#AFFF00] selection:text-black">
      
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center pointer-events-auto">
        <nav className="hidden md:flex gap-6 items-center bg-white/60 backdrop-blur-md px-6 py-3 rounded-lg border border-black/10">
          <a href="#" className="font-mono text-xs uppercase hover:opacity-60 transition-opacity">New in</a>
          <a href="#" className="font-mono text-xs uppercase hover:opacity-60 transition-opacity">Watches</a>
          <a href="#" className="font-mono text-xs uppercase hover:opacity-60 transition-opacity">Accessories</a>
          <a href="#" className="font-mono text-xs uppercase hover:opacity-60 transition-opacity">Our world</a>
        </nav>
        
        <div className="absolute left-1/2 -translate-x-1/2 text-2xl font-black tracking-tighter uppercase mix-blend-difference text-white">
          HY Watches
        </div>

        <nav className="flex gap-6 items-center bg-white/60 backdrop-blur-md px-6 py-3 rounded-lg border border-black/10">
          <a href="#" className="font-mono text-xs uppercase hover:opacity-60 transition-opacity hidden md:block">Search</a>
          <a href="#" className="font-mono text-xs uppercase hover:opacity-60 transition-opacity hidden md:block">Account</a>
          <a href="#" className="font-mono text-xs uppercase hover:opacity-60 transition-opacity relative flex items-center gap-2">
            Cart <span className="w-2 h-2 rounded-full bg-[#AFFF00] animate-pulse shadow-[0_0_6px_2px_rgba(175,255,0,0.7)]"></span>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] bg-black overflow-hidden flex items-end p-6 md:p-12">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          {/* Replace this source with your locally hosted Vercel video path */}
          <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-md text-white/70 text-2xl md:text-3xl font-bold leading-tight tracking-tight">
            <p>Crafting modern timepieces that merge iconic design, advanced technical solutions, and Italian craftsmanship.</p>
          </div>
          
          <div className="flex gap-12 font-mono text-xs text-white/50 uppercase tracking-widest">
            <div>
              <p>20:11:57</p>
              <p>Melbourne, Australia</p>
              <p>Cloudy</p>
            </div>
            <div>
              <p>Moon is crescent</p>
              <p>Weather: cloudy</p>
              <p>21°</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl w-full md:w-[320px] text-white">
            <div className="flex gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded text-[10px] uppercase font-mono tracking-wider">Capsule</span>
            </div>
            <p className="text-white/50 font-bold mb-2">Built to make a statement.</p>
            <h1 className="text-2xl font-bold leading-tight mb-8">Raw in form, sharp in detail, impossible to overlook.</h1>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-white text-black py-3 px-4 rounded font-medium text-sm flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
                <span className="w-4 h-4 rounded-full bg-black"></span> Discover the Capsule
              </button>
              <button className="w-full bg-transparent border border-white/30 text-white py-3 px-4 rounded font-medium text-sm flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                <span className="w-4 h-4 rounded-full border border-white"></span> Explore Our Lines
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="max-w-[1920px] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12 border-b border-black/10 pb-6">
          <h2 className="text-3xl font-bold tracking-tight">New arrivals</h2>
          <div className="flex items-center gap-4 font-mono text-xs uppercase">
            <span className="text-black/30">4/4</span>
            <button className="border border-black/20 px-4 py-2 rounded hover:bg-black hover:text-white transition-colors">View All</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {catalog.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[3/4] bg-[#D9D9D9] rounded-xl overflow-hidden mb-4">
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-mono text-black/50 bg-white/40 backdrop-blur px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <img 
                  src={item.imagePrimary} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src={item.imageHover} 
                  alt={`${item.name} Hover`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
              <div className="h-[1px] w-full bg-black/10 mb-2"></div>
              <p className="text-sm text-black/50 mb-2">{item.subtitle}</p>
              <div className="h-[1px] w-full bg-black/10 mb-2"></div>
              <div className="flex justify-between items-center text-sm text-black/50">
                <span>{item.edition}</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#292929] border border-black/20"></div>
                  <div className="w-3 h-3 rounded-full bg-[#DDDEDF] border border-black/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Blocks */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-square md:aspect-[5/4] bg-[#e5e5e5] group cursor-pointer overflow-hidden">
          <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-datejust-41-126334-stainless-steel-blue-diamond-dial-jubilee-2021-rolex-1197074364.jpg" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" alt="Classic" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-12 left-12 text-white pointer-events-none">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Classic</h2>
            <p className="opacity-70 font-medium">Explore our most iconic permanent line.</p>
          </div>
          <button className="absolute bottom-12 left-12 bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-md flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span className="w-4 h-4 rounded-full border border-white"></span> Discover more
          </button>
        </div>
        <div className="relative aspect-square md:aspect-[5/4] bg-[#d5d5d5] group cursor-pointer overflow-hidden">
          <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Toolwatches" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-12 left-12 text-white pointer-events-none">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Toolwatches</h2>
            <p className="opacity-70 font-medium">Explore our purpose-built toolwatches.</p>
          </div>
          <button className="absolute bottom-12 left-12 bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-md flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span className="w-4 h-4 rounded-full border border-white"></span> Discover more
          </button>
        </div>
      </section>

      {/* Feature Value Props */}
      <section className="max-w-[1920px] mx-auto px-6 py-24 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-black/5 flex flex-col">
              <div className="w-full h-[360px] bg-[#D9D9D9] rounded-lg overflow-hidden mb-6">
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover grayscale opacity-90" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3 border-t border-transparent pt-3">{feature.title}</h3>
              <p className="text-sm text-[#505050] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Area */}
      <footer className="bg-[#F6F6F6]">
        {/* Footer Top Links */}
        <div className="max-w-[1920px] mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-black/10">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black/70 mb-2">Watches</h3>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Classic</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Toolwatch</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Limited Editions</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Accessories</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black/70 mb-2">Brand</h3>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">About Us</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Melbourne Flagship</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Our Lines</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">News</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Contact us</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black/70 mb-2">Service</h3>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Design Your Watch</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Bespoke Engraving</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Find us</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Manuals</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Warranty / Repairs</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black/70 mb-2">Social</h3>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">Facebook</a>
            <a href="#" className="text-sm text-black/50 hover:text-black transition-colors">TikTok</a>
          </div>
        </div>

        {/* Footer Bottom Utilities */}
        <div className="max-w-[1920px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs font-mono uppercase text-black/50">
          <div className="flex gap-12">
            <div>
              <p>20:11:57</p>
              <p>Melbourne, Australia</p>
              <p>Cloudy</p>
            </div>
            <div>
              <p>Moon is crescent</p>
              <p>Weather: cloudy</p>
              <p>21°</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-black transition-colors">Sales Terms</a>
            <a href="#" className="hover:text-black transition-colors">Imprint</a>
            <a href="#" className="hover:text-black transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Statement</a>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span>Shipping to</span>
              <select className="bg-transparent border-b border-black/20 text-black outline-none cursor-pointer py-1 font-sans text-sm capitalize">
                <option value="AU">Australia</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="FR">France</option>
              </select>
            </div>
            <p>© 2026 HY Watches. Built for performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
