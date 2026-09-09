import React, { useState } from 'react';

export default function UnimaticClone() {
  const [activeModel, setActiveModel] = useState(0);

  const newArrivals = [
    {
      name: "Modello Uno U1-AEG",
      price: "795€",
      sub: "Limited Edition, Diver",
      edition: "Edition of 250",
      diameter: "41.5mm",
      type: "Automatic",
      swatch: "#DDDEDF",
      img: "https://www.unimaticwatches.com/cdn/shop/files/U1-AEG-Hero.png?v=1785834515&width=900",
      isLifestyle: false
    },
    {
      name: "Modello Uno U1-AEB",
      price: "795€",
      sub: "Limited Edition, Diver",
      edition: "Edition of 250",
      diameter: "41.5mm",
      type: "Automatic",
      swatch: "#292929",
      img: "https://www.unimaticwatches.com/cdn/shop/files/U1-AEB-Hero.png?v=1785834514&width=900",
      isLifestyle: false
    },
    {
      name: "Modello Uno U1-AEG",
      price: "940€",
      sub: "Limited Edition, GMT",
      edition: "Edition of 250",
      diameter: "41.5mm",
      type: "Automatic",
      swatch: "#5c6246",
      img: "https://www.unimaticwatches.com/cdn/shop/files/Wristshot_U1-AEG_1200x1200_a22bdd66-0938-4700-93fa-b2b5832408fa.jpg?v=1787599277&width=900",
      isLifestyle: true
    },
    {
      name: "Modello Quattro U4-AEB",
      price: "815€",
      sub: "Limited Edition, GMT",
      edition: "Edition of 250",
      diameter: "40mm",
      type: "Automatic",
      swatch: "#292929",
      img: "https://www.unimaticwatches.com/cdn/shop/files/U4-GMT-AEB-Hero.png?v=1785834740&width=900",
      isLifestyle: false
    }
  ];

  const models = [
    {
      name: "Modello Uno UC1",
      series: "Classic",
      img: "https://www.unimaticwatches.com/cdn/shop/files/UC1-Hero.png?v=1785834803&width=1400",
      specs: [
        { label: "MOVEMENT", val: "Automatic caliber NH35A 21600BPH\nHacking seconds hand\nBi-directional automatic winding\n41h power reserve" },
        { label: "CASE", val: "Diameter 40mm / 41.5mm with bezel\n120 clicks mono-directional security bezel\n316 stainless steel brushed finish" },
        { label: "DIAL", val: "Black matte dive dial\nSuper-LumiNova C3 pale green\nOff-white closed second rail" },
        { label: "DURABILITY & PROTECTION", val: "300m = 1000ft = 30atm WR\n2.5mm double domed sapphire" }
      ]
    },
    {
      name: "Modello Due UC2",
      series: "Classic",
      img: "https://www.unimaticwatches.com/cdn/shop/files/UC2-Hero.png?v=1785834806&width=1400",
      specs: [
        { label: "MOVEMENT", val: "Automatic caliber NH35A 21600BPH\n41h power reserve" },
        { label: "CASE", val: "Diameter 38mm\nFixed monoblock bezel\n316 stainless steel brushed" },
        { label: "DIAL", val: "Black matte field dial\nSuper-LumiNova C3" },
        { label: "DURABILITY & PROTECTION", val: "300m WR\n2.7mm double domed sapphire" }
      ]
    },
    {
      name: "Modello Tre UC3",
      series: "Classic",
      img: "https://www.unimaticwatches.com/cdn/shop/files/UC-3-Hero.png?v=1785834808&width=1400",
      specs: [
        { label: "MOVEMENT", val: "Meca-quartz calibre VK64\n3y battery life" },
        { label: "CASE", val: "Diameter 40mm\nScrewdown chrono pushers" },
        { label: "DIAL", val: "Two sub-dials\nSuper-LumiNova C3" },
        { label: "DURABILITY & PROTECTION", val: "300m WR\n2.5mm sapphire" }
      ]
    },
    {
      name: "Modello Quattro UC4",
      series: "Classic",
      img: "https://www.unimaticwatches.com/cdn/shop/files/UC-4-Hero.png?v=1785834810&width=1400",
      specs: [
        { label: "MOVEMENT", val: "Automatic caliber NH35A\n41h power reserve" },
        { label: "CASE", val: "Diameter 40mm military case\nBrushed stainless steel" },
        { label: "DIAL", val: "Black minimal dial\nSuper-LumiNova C3" },
        { label: "DURABILITY & PROTECTION", val: "300m WR\n2.8mm flat sapphire" }
      ]
    }
  ];

  return (
    <div className="bg-[#F6F6F6] text-[#000000] font-sans text-[12px] leading-[1.221] antialiased min-h-screen">
      
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-transparent pointer-events-none">
        <div className="flex items-center gap-6 pointer-events-auto">
          <span className="font-bold text-lg tracking-tight uppercase">UNIMATIC</span>
          <nav className="hidden lg:flex items-center gap-5 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-black/10">
            <a href="#" className="font-mono text-[10px] tracking-wider uppercase hover:opacity-60">New In</a>
            <a href="#" className="font-mono text-[10px] tracking-wider uppercase hover:opacity-60">Watches</a>
            <a href="#" className="font-mono text-[10px] tracking-wider uppercase hover:opacity-60">Accessories</a>
            <a href="#" className="font-mono text-[10px] tracking-wider uppercase hover:opacity-60">Gift Ideas</a>
            <a href="#" className="font-mono text-[10px] tracking-wider uppercase hover:opacity-60">Our World</a>
            <a href="#" className="font-mono text-[10px] tracking-wider uppercase hover:opacity-60">Find Us</a>
          </nav>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <nav className="flex items-center gap-4 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 font-mono text-[10px] tracking-wider uppercase">
            <a href="#" className="hover:opacity-60">Search</a>
            <a href="#" className="hover:opacity-60">Account</a>
            <a href="#" className="hover:opacity-60">Wishlist</a>
            <a href="#" className="hover:opacity-60 flex items-center gap-1.5">
              Cart
              <span className="w-1.5 h-1.5 rounded-full bg-[#AFFF00]"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Floating Community Card */}
      <div className="fixed top-16 right-6 z-30 w-[280px] bg-white/70 backdrop-blur-md border border-black/10 rounded-xl p-4 shadow-sm hidden md:block">
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-black/50">Newsletter</span>
          <button className="text-xs text-black/40 hover:text-black">×</button>
        </div>
        <p className="text-[11px] font-bold text-black/70 mb-3">
          Join the UNIMATIC community and receive a 6-day guide to discovering our world.
        </p>
        <div className="space-y-2">
          <input type="text" placeholder="Name" className="w-full bg-white/40 border border-black/10 rounded px-2.5 py-1.5 text-[11px] outline-none" />
          <input type="text" placeholder="Surname" className="w-full bg-white/40 border border-black/10 rounded px-2.5 py-1.5 text-[11px] outline-none" />
          <input type="email" placeholder="Email" className="w-full bg-white/40 border border-black/10 rounded px-2.5 py-1.5 text-[11px] outline-none" />
          <button className="w-full bg-black text-white rounded py-2 text-[10px] font-mono uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            Join the newsletter
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-[#D9D9D9] flex items-end justify-between p-6 lg:p-12 overflow-hidden">
        <img 
          src="https://www.unimaticwatches.com/cdn/shop/files/preview_images/902951eb883d42ed8dfe06638890423e.thumbnail.0000000000.jpg?v=1787233317&width=1920" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-sm text-white">
          <p className="text-xl font-bold tracking-tight mb-6">
            Crafting modern timepieces that merge iconic design, advanced technical solutions, and Italian craftsmanship.
          </p>
          <div className="flex gap-8 font-mono text-[10px] text-white/60 tracking-wider">
            <div>
              <p>20:11:57</p>
              <p>MILAN, ITALY</p>
              <p>CLOUDY</p>
            </div>
            <div>
              <p>MOON IS CRESCENT</p>
              <p>WEATHER: CLOUDY</p>
              <p>21°</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-[300px] bg-white/60 backdrop-blur-md rounded-xl p-5 border border-black/10">
          <span className="bg-black/5 text-black px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase">Capsule</span>
          <p className="text-[11px] text-black/50 font-bold mt-2">Built to make a statement.</p>
          <h2 className="text-sm font-bold mt-1 mb-4 leading-snug">Raw in form, sharp in detail, impossible to overlook.</h2>
          <div className="flex flex-col gap-2">
            <button className="w-full bg-black text-white text-[11px] font-medium py-2 rounded-md flex items-center justify-start px-3 gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              Discover the Capsule
            </button>
            <button className="w-full bg-white/40 border border-black/10 text-[11px] font-medium py-2 rounded-md flex items-center justify-start px-3 gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-black"></span>
              Explore Our Lines
            </button>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="px-6 lg:px-12 py-16 border-b border-black/10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base font-bold tracking-tight">New arrivals</h2>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase">
            <span className="text-black/30">4/8</span>
            <a href="#" className="border border-black/20 px-3 py-1 rounded">View All</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newArrivals.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-[3/4] bg-[#EDEDED] rounded-lg overflow-hidden mb-3">
                {!item.isLifestyle && (
                  <div className="absolute top-2 left-2 flex gap-1 z-10">
                    <span className="bg-white/70 backdrop-blur-sm text-black/70 font-mono text-[8px] px-1.5 py-0.5 rounded">{item.diameter}</span>
                    <span className="bg-white/70 backdrop-blur-sm text-black/70 font-mono text-[8px] px-1.5 py-0.5 rounded">{item.type}</span>
                  </div>
                )}
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between font-bold text-[11px] py-1">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
              <div className="border-t border-black/10 py-1 text-black/50 text-[10px]">{item.sub}</div>
              <div className="border-t border-black/10 py-1 flex justify-between items-center text-black/50 text-[10px]">
                <span>{item.edition}</span>
                <span className="w-2 h-2 rounded-full border border-black/20" style={{ backgroundColor: item.swatch }}></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Grid (2x2) */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black/10">
        <div className="relative aspect-square border-b md:border-b-0 md:border-r border-black/10 overflow-hidden group">
          <img src="https://www.unimaticwatches.com/cdn/shop/files/HP_Block_Classic-U2.jpg?v=1788009438&width=1600" className="absolute inset-0 w-full h-full object-cover" alt="Classic" />
          <div className="absolute top-8 left-8 text-white">
            <h3 className="text-2xl font-bold tracking-tight">Classic</h3>
            <p className="text-white/60 text-xs">Explore our most iconic permanent line.</p>
          </div>
          <button className="absolute bottom-8 left-8 bg-white/70 backdrop-blur-md text-black px-4 py-2 rounded font-medium text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full border border-black"></span>
            Discover more
          </button>
        </div>

        <div className="relative aspect-square overflow-hidden group">
          <img src="https://www.unimaticwatches.com/cdn/shop/files/Toolwatch_Focus_03.jpg?v=1787649716&width=1600" className="absolute inset-0 w-full h-full object-cover" alt="Toolwatches" />
          <div className="absolute top-8 left-8 text-white">
            <h3 className="text-2xl font-bold tracking-tight">Toolwatches</h3>
            <p className="text-white/60 text-xs">Explore our purpose-built toolwatches.</p>
          </div>
          <button className="absolute bottom-8 left-8 bg-white/70 backdrop-blur-md text-black px-4 py-2 rounded font-medium text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full border border-black"></span>
            Discover more
          </button>
        </div>
      </section>

      {/* Product Spec Selector */}
      <section className="px-6 lg:px-12 py-20 border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 space-y-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-black/40 mb-3">Classic watches</p>
              <div className="flex flex-col space-y-2">
                {models.map((m, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveModel(idx)}
                    className={`text-left text-lg font-bold tracking-tight transition-opacity ${activeModel === idx ? 'opacity-100' : 'opacity-20 hover:opacity-40'}`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center items-center">
            <img src={models[activeModel].img} alt={models[activeModel].name} className="max-w-[420px] w-full object-contain" />
          </div>

          <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              {models[activeModel].specs.map((s, idx) => (
                <div key={idx}>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-black/40 mb-1">{s.label}</p>
                  <p className="text-[11px] text-black/80 whitespace-pre-line leading-relaxed">{s.val}</p>
                </div>
              ))}
            </div>
            <button className="w-full bg-black text-white py-3 rounded text-[11px] font-medium flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Explore {models[activeModel].name}
            </button>
          </div>
        </div>
      </section>

      {/* Three Column Features */}
      <section className="px-6 lg:px-12 py-16 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-3 rounded-lg border border-black/5">
            <img src="https://www.unimaticwatches.com/cdn/shop/files/thumb_wr.jpg?v=1787864118&width=1200" className="w-full h-48 object-cover rounded mb-4" alt="Waterproof" />
            <h4 className="font-bold text-sm mb-2">Waterproof checked</h4>
            <p className="text-[11px] text-black/60 leading-relaxed">All watches are water resistance checked to at least 300m to ensure reliability and durability in all conditions.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-black/5">
            <img src="https://www.unimaticwatches.com/cdn/shop/files/thumb_testing_d3867386-d0f6-4bbe-a3de-136a81728afd.jpg?v=1787864324&width=1200" className="w-full h-48 object-cover rounded mb-4" alt="Accuracy" />
            <h4 className="font-bold text-sm mb-2">Accuracy regulated & tested</h4>
            <p className="text-[11px] text-black/60 leading-relaxed">UNIMATIC watches feature accuracy-tested movements, ensuring reliable and precise timekeeping across all models.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-black/5">
            <img src="https://www.unimaticwatches.com/cdn/shop/files/thumb_quality-check.jpg?v=1787864339&width=1200" className="w-full h-48 object-cover rounded mb-4" alt="Quality" />
            <h4 className="font-bold text-sm mb-2">Quality checked and certified</h4>
            <p className="text-[11px] text-black/60 leading-relaxed">UNIMATIC watches are quality checked by our experts, reflecting our commitment to premium craftsmanship and performance.</p>
          </div>
        </div>
      </section>

      {/* Footer Macro Banner */}
      <section className="relative w-full h-[400px] bg-black overflow-hidden flex items-end justify-end p-8">
        <img 
          src="https://www.unimaticwatches.com/cdn/shop/files/footer-banda.jpg?v=1787751735&width=2400" 
          alt="Caseback Detail" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-[300px] bg-white/70 backdrop-blur-md border border-black/10 rounded-xl p-4">
          <p className="text-[11px] font-bold text-black/70 mb-2">Join the UNIMATIC community and receive a 6-day guide to discovering our world.</p>
          <input type="email" placeholder="Email" className="w-full bg-white/40 border border-black/10 rounded px-2.5 py-1.5 text-[11px] outline-none mb-2" />
          <button className="w-full bg-black text-white rounded py-2 text-[10px] font-mono uppercase tracking-wider">Join the newsletter</button>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h5 className="font-bold text-xs uppercase mb-4 text-black/40">Watches</h5>
            <ul className="space-y-2 text-[11px] text-black/70">
              <li><a href="#" className="hover:text-black">Classic</a></li>
              <li><a href="#" className="hover:text-black">Toolwatch</a></li>
              <li><a href="#" className="hover:text-black">Limited Editions</a></li>
              <li><a href="#" className="hover:text-black">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase mb-4 text-black/40">Brand</h5>
            <ul className="space-y-2 text-[11px] text-black/70">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Milan Flagship Store</a></li>
              <li><a href="#" className="hover:text-black">Our Lines</a></li>
              <li><a href="#" className="hover:text-black">News</a></li>
              <li><a href="#" className="hover:text-black">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase mb-4 text-black/40">Service</h5>
            <ul className="space-y-2 text-[11px] text-black/70">
              <li><a href="#" className="hover:text-black">Design Your Watch</a></li>
              <li><a href="#" className="hover:text-black">Bespoke Engraving</a></li>
              <li><a href="#" className="hover:text-black">Find Us</a></li>
              <li><a href="#" className="hover:text-black">Manuals</a></li>
              <li><a href="#" className="hover:text-black">Warranty / Repairs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase mb-4 text-black/40">Social</h5>
            <ul className="space-y-2 text-[11px] text-black/70">
              <li><a href="#" className="hover:text-black">Instagram</a></li>
              <li><a href="#" className="hover:text-black">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[9px] text-black/40 uppercase">
          <div className="flex gap-4">
            <span>Sales Terms</span>
            <span>Imprint</span>
            <span>Disclaimer</span>
            <span>Privacy Statement</span>
          </div>
          <div>© 2026 UNIMATIC Watches. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
