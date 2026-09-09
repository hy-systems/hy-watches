"use client";

import React from "react";

export default function LucyClonePage() {
  return (
    <main className="bg-[#f9f9f9] min-h-screen text-black font-sans overflow-x-hidden">
      
      {/* 1:1 Lucy Timepieces Video Hero Banner */}
      {/* Using the 56.25% padding trick to force a perfect 16:9 ratio so the video cannot collapse */}
      <section className="relative w-full overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0.31)' }} />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
        </video>
      </section>

      {/* 1:1 Welcome Section */}
      <section className="w-full bg-[#f9f9f9] pt-12 pb-16 px-6 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-[clamp(1.5rem,5vw,2.2rem)] font-bold uppercase tracking-[0.05em] text-black mb-4 font-sans">
            Welcome to LUCY TIMEPIECES
          </h2>
          <p className="text-[#333] text-[15px] md:text-[16px] leading-relaxed max-w-xl font-normal">
            Providing perfectly customized products.<br />
            We also buy and appraise genuine watches and luxury items.
          </p>
        </div>
      </section>

      {/* 1:1 Popular Collections Grid */}
      <section className="w-full bg-[#f9f9f9] py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-0">
          <div className="flex items-center justify-center mb-10">
            <h1 className="mx-4 text-[22px] md:text-[28px] font-bold uppercase text-black font-sans tracking-widest">
              POPULAR COLLECTIONS
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { title: "LUCY PICKS", img: "https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg" },
              { title: "DAYTONA", img: "https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-daytona-116500ln-stainless-steel-white-panda-dial-2018-rolex-1212087379.jpg" },
              { title: "GMT-MASTER II", img: "https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126710blnr-batgirl-stainless-steel-black-dial-jubilee-2021-rolex-1206409323.jpg" },
              { title: "DATEJUST", img: "https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-datejust-41-126334-stainless-steel-blue-diamond-dial-jubilee-2021-rolex-1197074364.jpg" }
            ].map((item, i) => (
              <div key={i} className="relative w-full aspect-square md:aspect-[3/4] overflow-hidden group cursor-pointer bg-black">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s] opacity-80" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
                  <h2 className="text-white text-[22px] font-bold uppercase tracking-[0.2em] drop-shadow-md text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1:1 You Might Also Like Grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-0">
          <div className="flex items-center justify-center mb-12 border-t border-gray-200 pt-12">
            <h1 className="text-[22px] md:text-[28px] font-bold uppercase text-black font-sans tracking-wide">
              YOU MIGHT ALSO LIKE
            </h1>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: 'Richard Mille RM67-02 Black Carbon TPT', price: '4.600 $', img: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png' },
              { name: 'Richard Mille RM67-02 Full Black Carbon', price: '4.600 $', img: 'https://lucytimepieces.com/wp-content/uploads/2026/07/13-247x247.png' },
              { name: 'Richard Mille RM67-01 Extra-Flat Titanium', price: '3.600 $', img: 'https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-247x247.webp' },
              { name: 'Patek Philippe Aquanaut 5168G Green 42mm', price: '5.600 $', img: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-52-247x247.png' },
              { name: 'Rolex Day Date 228239-0076 – VIP Version', price: '920 $', img: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-14-247x247.png' },
            ].map((prod, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer relative pb-4">
                <div className="w-full relative aspect-square overflow-hidden mb-4">
                  <img src={prod.img} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" alt={prod.name} />
                </div>
                <div className="px-2 text-center flex-grow flex flex-col justify-start w-full">
                  <p className="text-[13px] md:text-[14px] text-black font-medium leading-[1.3] mb-3 group-hover:text-[#dbaf56] transition-colors">{prod.name}</p>
                  <div className="text-center mt-auto">
                     <p className="text-[11px] text-gray-500 mb-1">Rated <strong className="text-black">0</strong> out of 5</p>
                     <p className="text-[16px] text-black font-bold uppercase">{prod.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="border-2 border-black bg-black text-white px-8 py-3 text-[14px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
              SHOP ALL WATCHES
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
