import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HYWatchStorefront() {
const products = [
{
id: 'u1-aeg',
name: 'Modello Uno U1-AEG',
price: '795€',
subtitle: 'Limited Edition - Diver',
edition: 'Edition of 250',
size: '41.5mm',
movement: 'Automatic',
image: '[https://www.unimaticwatches.com/cdn/shop/files/U1-AEG-Hero.png?v=1785834515&width=900](https://www.unimaticwatches.com/cdn/shop/files/U1-AEG-Hero.png?v=1785834515&width=900)',
},
{
id: 'u1-aeb',
name: 'Modello Uno U1-AEB',
price: '795€',
subtitle: 'Limited Edition - Diver',
edition: 'Edition of 250',
size: '41.5mm',
movement: 'Automatic',
image: '[https://www.unimaticwatches.com/cdn/shop/files/U1-AEB-Hero.png?v=1785834514&width=900](https://www.unimaticwatches.com/cdn/shop/files/U1-AEB-Hero.png?v=1785834514&width=900)',
},
{
id: 'u1-gmt-aeg',
name: 'Modello Uno U1-GMT-AEG',
price: '915€',
subtitle: 'Limited Edition - GMT',
edition: 'Edition of 250',
size: '41.5mm',
movement: 'Automatic',
image: '[https://www.unimaticwatches.com/cdn/shop/files/U1-GMT-AEG-Hero.png?v=1785834559&width=900](https://www.google.com/search?q=https://www.unimaticwatches.com/cdn/shop/files/U1-GMT-AEG-Hero.png%3Fv%3D1785834559%26width%3D900)',
},
{
id: 'u4-gmt-aeb',
name: 'Modello Quattro U4-GMT-AEB',
price: '795€',
subtitle: 'Limited Edition - GMT',
edition: 'Edition of 250',
size: '40mm',
movement: 'Automatic',
image: '[https://www.unimaticwatches.com/cdn/shop/files/U4-GMT-AEB-Hero.png?v=1785834740&width=900](https://www.unimaticwatches.com/cdn/shop/files/U4-GMT-AEB-Hero.png?v=1785834740&width=900)',
}
];

return (


HY Watches



```
  <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-start pointer-events-none">
    <div className="pointer-events-auto flex items-center bg-white/60 backdrop-blur-md border border-black/10 rounded-full px-6 py-3 shadow-sm">
      <Link className="font-bold uppercase tracking-tighter text-sm mr-8" href="/">
        HY WATCHES
      </Link>
      <nav className="hidden md:flex gap-6 font-mono text-xs uppercase tracking-tight">
        <Link className="hover:opacity-60 transition-opacity" href="#">New In</Link>
        <Link className="hover:opacity-60 transition-opacity" href="#">Watches</Link>
        <Link className="hover:opacity-60 transition-opacity" href="#">Accessories</Link>
        <Link className="hover:opacity-60 transition-opacity" href="#">Gift ideas</Link>
        <Link className="hover:opacity-60 transition-opacity" href="#">Our world</Link>
        <Link className="hover:opacity-60 transition-opacity" href="#">Find us</Link>
      </nav>
    </div>

    <div className="pointer-events-auto flex items-center bg-white/60 backdrop-blur-md border border-black/10 rounded-full px-6 py-3 shadow-sm gap-6 font-mono text-xs uppercase tracking-tight">
      <Link className="hover:opacity-60 transition-opacity hidden md:block" href="#">Search</Link>
      <Link className="hover:opacity-60 transition-opacity hidden md:block" href="#">Account</Link>
      <Link className="hover:opacity-60 transition-opacity hidden md:block" href="#">Wishlist</Link>
      <Link className="flex items-center gap-2 hover:opacity-60 transition-opacity" href="#">
        Cart
        <span className="w-2 h-2 bg-[#AFFF00] rounded-full animate-pulse"></span>
      </Link>
    </div>
  </header>

  <section className="relative w-full h-[85vh] bg-black overflow-hidden flex flex-col justify-end">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover opacity-80"
    >
      <source src="[https://lucytimepieces.com/wp-content/uploads/2026/09/rolex-unboxing.mp4](https://lucytimepieces.com/wp-content/uploads/2026/09/rolex-unboxing.mp4)" type="video/mp4" />
    </video>
    
    <div className="relative z-10 w-full px-6 py-12 md:p-12 flex flex-col md:flex-row justify-between items-end gap-8 max-w-[1920px] mx-auto">
      <div className="text-white max-w-2xl w-full">
        <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] mb-6">
          Crafting modern timepieces that merge iconic design, advanced technical solutions, and high performance.
        </h1>
        <div className="flex gap-8 font-mono text-xs opacity-70 uppercase">
          <div>milan, italy</div>
          <div>partly cloudy 22°</div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl text-white w-full md:max-w-md shrink-0">
        <span className="font-mono text-xs uppercase border border-white/30 px-3 py-1 rounded-full mb-6 inline-block">Capsule</span>
        <p className="text-sm mb-2 opacity-80">Built to make a statement.</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-8">Raw in form, sharp in detail, impossible to overlook.</h2>
        <button className="bg-white text-black px-6 py-4 w-full font-bold text-sm hover:bg-[#AFFF00] transition-colors rounded-sm">
          Discover the Capsule
        </button>
      </div>
    </div>
  </section>

  <section className="w-full px-4 md:px-8 py-16 max-w-[1920px] mx-auto">
    <div className="flex justify-between items-end mb-10">
      <h2 className="text-2xl font-bold tracking-tight">New arrivals</h2>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs opacity-50">4 products</span>
        <Link className="font-mono text-xs uppercase border border-black/20 px-4 py-2 hover:border-black transition-colors rounded-sm" href="#">
          View All
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <article key={product.id} className="flex flex-col group cursor-pointer">
          <div className="relative w-full aspect-square bg-[#EDEDED] mb-4 overflow-hidden rounded-md flex items-center justify-center">
            <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
              <span className="font-mono text-[10px] uppercase tracking-tight bg-white/50 backdrop-blur-sm px-2 py-0.5 rounded-sm">{product.size}</span>
              <span className="font-mono text-[10px] uppercase tracking-tight bg-white/50 backdrop-blur-sm px-2 py-0.5 rounded-sm">{product.movement}</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-[85%] h-[85%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
          </div>
          
          <div className="flex justify-between items-start font-bold text-sm tracking-tight mb-3">
            <h3 className="uppercase">{product.name}</h3>
            <span>{product.price}</span>
          </div>
          <div className="h-[1px] w-full bg-black/10 mb-3"></div>
          
          <p className="font-mono text-xs opacity-70 mb-3">{product.subtitle}</p>
          <div className="h-[1px] w-full bg-black/10 mb-3"></div>
          
          <div className="flex justify-between items-center font-mono text-[10px] uppercase opacity-60">
            <span>{product.edition}</span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#292929] border border-black/20"></div>
              <div className="w-3 h-3 rounded-full bg-[#DDDEDF] border border-black/20 ring-1 ring-black ring-offset-1"></div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>

  <section className="w-full grid grid-cols-1 md:grid-cols-2">
    {[
      { title: 'Classic', sub: 'Explore our most iconic permanent line.', img: '[https://www.unimaticwatches.com/cdn/shop/files/HP_Block_Classic-U2.jpg?v=1788009438&width=1600](https://www.unimaticwatches.com/cdn/shop/files/HP_Block_Classic-U2.jpg?v=1788009438&width=1600)' },
      { title: 'Toolwatches', sub: 'Explore our purpose-built toolwatches.', img: '[https://www.unimaticwatches.com/cdn/shop/files/Toolwatch_Focus_03.jpg?v=1787649716&width=1600](https://www.unimaticwatches.com/cdn/shop/files/Toolwatch_Focus_03.jpg?v=1787649716&width=1600)' },
      { title: 'Collaborations', sub: 'Explore our latest collaborations.', img: '[https://www.unimaticwatches.com/cdn/shop/files/HP_Collaboration_Block.jpg?v=1787753713&width=1600](https://www.unimaticwatches.com/cdn/shop/files/HP_Collaboration_Block.jpg?v=1787753713&width=1600)' },
      { title: 'Limited Edition', sub: 'Explore our most exclusive releases.', img: '[https://www.unimaticwatches.com/cdn/shop/files/HP_LimitedEdition_Block_PreLive.jpg?v=1787753712&width=1600](https://www.unimaticwatches.com/cdn/shop/files/HP_LimitedEdition_Block_PreLive.jpg?v=1787753712&width=1600)' }
    ].map((block, i) => (
      <Link className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden group flex flex-col justify-between p-8 bg-black" href="#" key="{i}">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={block.img} 
          alt={block.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
        />
        <div className="relative z-10 text-white">
          <h2 className="text-3xl font-bold tracking-tight mb-2">{block.title}</h2>
          <p className="font-mono text-sm opacity-80">{block.sub}</p>
        </div>
        <div className="relative z-10">
          <span className="inline-block border border-white text-white font-mono text-xs uppercase px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-white hover:text-black">
            Discover more
          </span>
        </div>
      </Link>
    ))}
  </section>

  <section className="w-full px-4 md:px-8 py-24 max-w-[1920px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
      {[
        { title: 'Waterproof checked', desc: 'All watches are water resistance checked to at least 300m to ensure reliability and durability in all conditions, from daily wear to underwater use.', img: '[https://www.unimaticwatches.com/cdn/shop/files/thumb_wr.jpg?v=1787864118&width=1200](https://www.unimaticwatches.com/cdn/shop/files/thumb_wr.jpg?v=1787864118&width=1200)' },
        { title: 'Accuracy regulated & tested', desc: 'HY watches feature accuracy-tested movements, ensuring reliable and precise timekeeping across all models.', img: '[https://www.unimaticwatches.com/cdn/shop/files/thumb_testing_d3867386-d0f6-4bbe-a3de-136a81728afd.jpg?v=1787864324&width=1200](https://www.unimaticwatches.com/cdn/shop/files/thumb_testing_d3867386-d0f6-4bbe-a3de-136a81728afd.jpg?v=1787864324&width=1200)' },
        { title: 'Quality checked and certified', desc: 'HY watches are quality checked by our experts, reflecting our commitment and pride in delivering the best craftsmanship, performance, and durability possible.', img: '[https://www.unimaticwatches.com/cdn/shop/files/thumb_quality-check.jpg?v=1787864339&width=1200](https://www.unimaticwatches.com/cdn/shop/files/thumb_quality-check.jpg?v=1787864339&width=1200)' }
      ].map((feature, i) => (
        <div key={i} className="flex flex-col bg-white p-4 rounded-xl border border-black/5 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={feature.img} alt={feature.title} className="w-full aspect-[4/3] object-cover bg-[#D9D9D9] rounded-lg mb-6" />
          <h3 className="text-xl font-bold tracking-tight mb-3 px-2">{feature.title}</h3>
          <p className="text-[#505050] text-sm leading-relaxed px-2 pb-4">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>

  <footer className="w-full bg-[#F6F6F6] pt-16 pb-8 px-4 md:px-8 border-t border-black/10 mt-auto">
    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs uppercase opacity-50 mb-2">Watches</h3>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Classic</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Toolwatch</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Limited Editions</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Accessories</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs uppercase opacity-50 mb-2">Brand</h3>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">About Us</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Melbourne Studio</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Our Lines</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">News</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Contact us</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs uppercase opacity-50 mb-2">Service</h3>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Design Your Watch</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Bespoke Engraving</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Find us</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Manuals</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Warranty / Repairs</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Support</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs uppercase opacity-50 mb-2">Social</h3>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Instagram</Link>
        <Link className="font-bold tracking-tight hover:opacity-60 transition" href="#">Facebook</Link>
      </div>
      
      <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
        <h3 className="font-mono text-xs uppercase opacity-50 mb-2">Join the Community</h3>
        <form className="flex w-full border-b border-black pb-2">
          <input 
            type="email" 
            placeholder="Email address" 
            className="bg-transparent w-full outline-none font-mono text-xs placeholder:text-black/50"
          />
          <button type="submit" className="font-bold text-sm uppercase tracking-tight hover:text-[#AFFF00] transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>

    <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-black/10 font-mono text-[10px] uppercase opacity-60">
      <div className="flex flex-wrap gap-4 md:gap-8">
        <Link className="hover:opacity-100 transition" href="#">Sales Terms</Link>
        <Link className="hover:opacity-100 transition" href="#">Imprint</Link>
        <Link className="hover:opacity-100 transition" href="#">Disclaimer</Link>
        <Link className="hover:opacity-100 transition" href="#">Cookie Policy</Link>
        <Link className="hover:opacity-100 transition" href="#">Privacy Statement</Link>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-100 transition">
          <span>Shipping to</span>
          <span className="font-bold">Australia</span>
          <span>+</span>
        </div>
        <div className="hidden md:block">
          © 2026 HY Watches. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</div>

```

);
}
