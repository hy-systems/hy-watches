import React from 'react';

export default function LucyTimepieces() {
  const popularCollections = [
    { title: "LUCY PICKS", image: "https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg" },
    { title: "DAYTONA", image: "https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-daytona-116500ln-stainless-steel-white-panda-dial-2018-rolex-1212087379.jpg" },
    { title: "GMT-MASTER II", image: "https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126710blnr-batgirl-stainless-steel-black-dial-jubilee-2021-rolex-1206409323.jpg" },
    { title: "DATEJUST", image: "https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-datejust-41-126334-stainless-steel-blue-diamond-dial-jubilee-2021-rolex-1197074364.jpg" },
  ];

  const featuredWatches = [
    { title: "Richard Mille RM67-02 Black Carbon TPT", price: "4,600", image: "https://lucytimepieces.com/wp-content/uploads/2026/07/14-300x300.png" },
    { title: "Richard Mille RM67-02 Full Black Carbon TPT", price: "4,600", image: "https://lucytimepieces.com/wp-content/uploads/2026/07/13-300x300.png" },
    { title: "Richard Mille RM67-01 Extra-Flat Titanium", price: "3,600", image: "https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-300x300.webp" },
    { title: "Patek Philippe Nautilus 5711A Green 40mm", price: "5,600", image: "https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-300x300.png" },
  ];

  const socialVideos = [
    { platform: "TIKTOK", src: "https://lucytimepieces.com/wp-content/uploads/2026/03/26240ST-TRANG.mov", link: "https://lucywatches.info/tiktokus" },
    { platform: "INSTA", src: "https://lucytimepieces.com/wp-content/uploads/2026/03/01.mp4", link: "https://lucywatches.info/instagramus" },
    { platform: "FACEBOOK", src: "https://lucytimepieces.com/wp-content/uploads/2026/03/02.mp4", link: "https://lucywatches.info/facebookus" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <button className="md:hidden text-black focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
              <img 
                src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1-1024x1024.webp" 
                alt="LUCY TIMEPIECES" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest uppercase">
              <a href="#" className="hover:text-amber-500 transition-colors">Shop</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Brands</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Collections</a>
              <a href="#" className="hover:text-amber-500 transition-colors">How To Order</a>
              <a href="#" className="hover:text-amber-500 transition-colors">About</a>
            </div>
            <div className="flex items-center space-x-4">
              <button aria-label="Search" className="text-black hover:text-amber-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Video Section */}
      <section className="relative w-full h-screen">
        <video 
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      </section>

      {/* Complimentary Banner */}
      <div className="w-full bg-black text-white text-center py-4 text-sm tracking-wide">
        Complimentary Travel Case with Every Watch Purchase
      </div>

      {/* Welcome Text */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl uppercase font-semibold mb-4 tracking-wider">Welcome to LUCY TIMEPIECES</h2>
        <p className="text-gray-700">Providing perfectly customized products.</p>
        <p className="text-gray-700">We also buy and appraise genuine watches and luxury items.</p>
      </section>

      {/* Popular Collections Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-center text-2xl font-bold uppercase tracking-widest mb-8">Popular Collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularCollections.map((item, idx) => (
            <div key={idx} className="relative aspect-[3/4] overflow-hidden group cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-x-0 bottom-10 text-center">
                <h4 className="text-white text-xl font-semibold tracking-widest uppercase">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Watches Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-center text-2xl font-bold uppercase tracking-widest mb-12">Featured Watches</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {featuredWatches.map((product, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col">
              <div className="overflow-hidden bg-white mb-4 relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-900 mb-2 px-2 hover:underline">{product.title}</h4>
              <div className="flex justify-center text-yellow-500 mb-1 text-xs">
                ★★★★★
              </div>
              <p className="font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-black px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-black hover:text-white transition-colors">
            Shop All Watches
          </button>
        </div>
      </section>

      {/* Social Videos Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-100">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">Lucy on Social</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Follow Lucy Timepieces on TikTok, Instagram, and Facebook for real unboxing videos, detailed product reviews, new arrivals updates, and watch insights. Every piece you see is filmed honestly, so you can observe the finishing, proportions, and wrist presence before making your decision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialVideos.map((social, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-4 px-2">
                <span className="font-bold tracking-widest">{social.platform}</span>
                <a href={social.link} className="text-xs uppercase tracking-wider font-semibold border-b border-black">See</a>
              </div>
              <div className="relative w-full aspect-[9/16] bg-black">
                <video 
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  crossOrigin="anonymous"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={social.src} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Highlights */}
      <section className="border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-2">Free Shipping</h4>
            <p className="text-sm text-gray-600">Free worldwide shipping via FedEx, DHL, UPS, delivered within 7-14 days.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-2">Pay Before Delivery</h4>
            <p className="text-sm text-gray-600">Easy and secure payments via PayPal, Crypto, Visa & MasterCard, 100% safe and protected.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-2">Warranty & Easy Returns</h4>
            <p className="text-sm text-gray-600">2-5 year warranty on all products. 100% replacement within 7 days if any defects are found.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <img 
              src="https://lucytimepieces.com/wp-content/uploads/2025/06/cropped-lucytimepieces-com-1-scaled-1-300x300.webp" 
              alt="Lucy Timepieces Logo" 
              className="h-20 w-20 mb-6"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              Confidently operating from our headquarters in Hong Kong, we are proud to be trusted and selected to distribute finely crafted products of exceptional quality to customers worldwide, helping to elevate the luxury experience and make premium products more accessible than ever.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold uppercase tracking-wider mb-6">Contact Information</h4>
            <div className="text-sm text-gray-600 space-y-4">
              <p>
                <strong className="text-black">LC TIMEPIECES Hong Kong</strong><br/>
                World Trust Tower, Hong Kong
              </p>
              <p>
                <strong className="text-black">Zalo / WhatsApp:</strong> (+84) 836 177 777<br/>
                <strong className="text-black">Website:</strong> www.lucytimepieces.com
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold uppercase tracking-wider mb-6">More Info</h4>
            <ul className="text-sm text-gray-600 space-y-3">
              <li><a href="#" className="hover:text-black hover:underline">Social Media</a></li>
              <li><a href="#" className="hover:text-black hover:underline">How To Order</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Payment Policy</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Service & Warranty</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold uppercase tracking-wider mb-6">LUCY TIMEPIECES</h4>
            <ul className="text-sm text-gray-600 space-y-3 columns-2">
              <li><a href="#" className="hover:text-black hover:underline">All Collections</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Rolex</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Hublot</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Cartier</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Omega</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Patek Philippe</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Audemars Piguet</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Richard Mille</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © 2026 LUCY TIMEPIECES™ by LC GLOBAL COMPANY
        </div>
      </footer>

    </div>
  );
}
