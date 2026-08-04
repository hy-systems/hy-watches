import React, { useState, useEffect } from 'react'
import { ChevronDown, Search, Globe, ShoppingBag, Menu, ChevronLeft, ChevronRight, Star, Play, Package, CreditCard, ShieldCheck, X, Instagram, Facebook } from 'lucide-react'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="home page-template page-template-page-transparent-header-light theme-flatsome woocommerce-js full-width lightbox nav-dropdown-has-shadow mobile-submenu-slide catalog-mode bg-[#f9f9f9] text-black font-sans">
      
      {/* GLOBAL CSS OVERRIDES MIMICKING FLATSOME */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --primary-color: #000000;
          --fs-color-primary: #000000;
          --fs-color-secondary: #dbaf56;
          --fs-color-success: #7a9c59;
          --fs-color-alert: #b20000;
        }
        body { font-family: 'Sarabun', sans-serif; font-size: 100%; font-weight: 400; color: #000000; background-color: #f9f9f9; }
        h1, h2, h3, h4, h5, h6, .heading-font { font-family: 'Roboto Condensed', sans-serif; font-weight: 500; color: #000000; }
        .alt-font { font-family: 'Lexend', sans-serif; font-weight: 500 !important; }
        .header-main { height: 83px; transition: height 0.3s; }
        .header-main.stuck { height: 70px !important; background-color: rgba(38,38,38,0.9) !important; backdrop-filter: blur(10px); }
        .nav > li > a { font-family: 'Sarabun', sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 12px; }
        .nav-dropdown { background: white; box-shadow: 1px 1px 15px rgba(0, 0, 0, .15); }
        .nav-dropdown > li > a { font-weight: normal; color: #333; padding: 7px 10px; display: block; transition: all 0.2s; }
        .nav-dropdown > li:hover > a { background: black; color: white; }
        .product-small .box-image { position: relative; overflow: hidden; }
        .product-small .image-fade_in_back img { transition: opacity 0.5s; }
        .product-small:hover .image-fade_in_back .back-image { opacity: 1; }
        .product-small .back-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; }
        .product-title a { font-family: 'Lexend', sans-serif; color: black; font-weight: 500; font-size: 14px; text-decoration: none; }
        .product-title a:hover { text-decoration: underline; color: #dbaf56; }
        .price-wrapper .price { color: black; font-size: 18px; font-family: 'Roboto Condensed'; font-weight: 500; text-transform: uppercase; }
        .star-rating { font-size: 12px; color: black; display: flex; justify-content: center; margin: 5px 0; }
        .button.white.is-outline { border: 2px solid black; padding: 6px 20px; letter-spacing: 3px; font-family: 'Roboto Condensed'; color: black; transition: all 0.3s; }
        .button.white.is-outline:hover { background: black !important; color: white !important; }
        .banner-bg img { width: 100%; height: 100%; object-fit: cover; }
        .overlay { position: absolute; inset: 0; background-color: rgba(0,0,0,0.31); pointer-events: none; }
        .section-title { font-size: 30px; text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; }
        .section-title i { margin-right: 10px; }
        .floating-buttons { position: fixed; right: 10px; bottom: 20px; z-index: 99; display: flex; flex-direction: column; gap: 10px; }
        .float-btn { width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: transform 0.3s; background: white; border: 1px solid #ccc; }
        .float-btn:hover { transform: scale(1.1); }
      `}} />

      {/* FLOATING ACTION BUTTONS */}
      <div className="floating-buttons">
        <a href="#" className="float-btn bg-black text-white border-black">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
        <a href="#" className="float-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        <a href="#" className="float-btn">
          <Instagram size={20} color="black" />
        </a>
      </div>

      {/* HEADER */}
      <header id="header" className="header transparent has-transparent has-sticky sticky-jump">
        <div className="header-wrapper">
          <div id="masthead" className={`header-main nav-dark fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'stuck' : 'bg-transparent h-[83px]'}`}>
            <div className="header-inner flex justify-between items-center max-w-[1200px] mx-auto px-6 h-full">
              
              <div id="logo" className="flex-shrink-0 w-[200px]">
                <a href="#" className={`font-serif uppercase tracking-[2.5px] text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#dbaf56]' : 'text-white'}`}>
                  HY WATCHES
                </a>
              </div>

              <div className="hidden md:flex flex-grow justify-center">
                <ul className="header-nav header-nav-main nav flex space-x-7 items-center">
                  <li className="menu-item relative group">
                    <a href="#" className={`flex items-center transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`}>
                      SHOP
                    </a>
                  </li>
                  <li className="menu-item relative group">
                    <a href="#" className={`flex items-center transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`}>
                      BRANDS <ChevronDown size={12} className="ml-1" />
                    </a>
                    <ul className="sub-menu nav-dropdown absolute top-full left-0 mt-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <li><a href="#">Rolex</a></li>
                      <li><a href="#">Tudor</a></li>
                      <li><a href="#">Hublot</a></li>
                      <li><a href="#">Omega</a></li>
                      <li><a href="#">Cartier</a></li>
                      <li><a href="#">Patek Philippe</a></li>
                      <li><a href="#">Audemars Piguet</a></li>
                      <li><a href="#">Vacheron Constantin</a></li>
                      <li><a href="#">Richard Mille</a></li>
                      <li><a href="#">Jaeger Lecoultre</a></li>
                      <li><a href="#">Franck Muller</a></li>
                      <li><a href="#">IWC</a></li>
                    </ul>
                  </li>
                  <li className="menu-item relative group">
                    <a href="#" className={`flex items-center transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`}>
                      COLLECTIONS <ChevronDown size={12} className="ml-1" />
                    </a>
                    <ul className="sub-menu nav-dropdown absolute top-full left-0 mt-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <li><a href="#">HY PICKS</a></li>
                      <li><a href="#">CUSTOMIZE PRODUCTS</a></li>
                      <li><a href="#">CUSTOMIZE DIAMOND</a></li>
                      <li><a href="#">MEN'S</a></li>
                      <li><a href="#">WOMEN'S</a></li>
                    </ul>
                  </li>
                  <li className="menu-item relative group">
                    <a href="#" className={`flex items-center transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`}>
                      HOW TO ORDER
                    </a>
                  </li>
                  <li className="menu-item relative group">
                    <a href="#" className={`flex items-center transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`}>
                      ABOUTS <ChevronDown size={12} className="ml-1" />
                    </a>
                    <ul className="sub-menu nav-dropdown absolute top-full left-0 mt-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <li><a href="#">INFO US</a></li>
                      <li><a href="#">CONTACT</a></li>
                      <li><a href="#">SOCIAL MEDIA</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="flex items-center space-x-5">
                <Search size={16} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`} />
                <Globe size={16} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`} />
                <ShoppingBag size={16} className={`cursor-pointer transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`} />
                <Menu size={20} className={`cursor-pointer md:hidden transition-colors hover:text-[#dbaf56] ${isScrolled ? 'text-white' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] transition-opacity duration-300 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative w-[300px] h-full bg-white shadow-2xl flex flex-col z-[101] ml-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <span className="font-serif uppercase tracking-[2px] font-bold text-lg">MENU</span>
              <X size={24} className="cursor-pointer text-gray-500 hover:text-black" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="flex flex-col py-4 overflow-y-auto">
              <div className="px-6 pb-4 mb-4 border-b border-gray-100">
                <div className="relative">
                  <input type="text" placeholder="Search..." className="w-full border border-gray-300 h-10 px-3 text-sm focus:outline-none focus:border-black" />
                  <Search size={16} className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium hover:text-[#dbaf56]">SHOP</a>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium hover:text-[#dbaf56]">BRANDS</a>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium hover:text-[#dbaf56]">COLLECTIONS</a>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium hover:text-[#dbaf56]">HOW TO ORDER</a>
              <a href="#" className="px-6 py-3 font-serif uppercase text-sm tracking-[1px] font-medium hover:text-[#dbaf56]">ABOUTS</a>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main id="main">
        <div id="content" role="main">
          
          {/* HERO BANNER */}
          <div className="banner has-hover has-video relative w-full h-screen bg-black">
            <div className="banner-inner fill h-full w-full absolute inset-0">
              <div className="banner-bg fill h-full w-full">
                <video className="video-bg fill visible w-full h-full object-cover" preload="auto" playsInline autoPlay muted loop>
                  <source src="https://lucytimepieces.com/wp-content/uploads/2025/06/lucytimepieces-com-1.mp4" type="video/mp4" />
                </video>
                <div className="overlay absolute inset-0 bg-black/30"></div>
              </div>
              <div className="banner-layers container absolute inset-0 flex items-center justify-center">
                <div className="text-box banner-layer text-center z-10 w-[60%]">
                  <div className="text-box-content text dark">
                    <div className="text-inner text-center">
                      <span className="text-[14px] md:text-[16px] tracking-[3px] uppercase text-white mb-2 font-serif block">POPULAR COLLECTIONS</span>
                      <h1 className="text-5xl md:text-7xl font-bold uppercase text-white font-serif drop-shadow-lg leading-tight">SERIES ALPHA</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ANNOUNCEMENT */}
          <div className="banner has-hover relative bg-black py-4 border-t border-white/10">
            <div className="text-box text-center">
              <h4 className="title text-white text-[12px] tracking-[2.5px] uppercase font-sans m-0">
                Complimentary Travel Case with Every Watch Purchase
              </h4>
            </div>
          </div>

          {/* WELCOME */}
          <div className="row align-center py-16 px-4 bg-white border-b border-gray-200">
            <div className="col medium-7 small-12 large-7 max-w-[800px] mx-auto">
              <div className="col-inner text-center">
                <h2 className="uppercase font-serif text-3xl md:text-4xl mb-4 tracking-wide font-bold">
                  Welcome to HY WATCHES
                </h2>
                <p className="font-sans text-gray-600 text-lg mb-1">
                  Providing perfectly customized products.
                </p>
                <p className="font-sans text-gray-600 text-lg">
                  We also buy and appraise genuine watches and luxury items.
                </p>
              </div>
            </div>
          </div>

          {/* MIGHT ALSO LIKE - GRID 1 */}
          <section className="section py-16 bg-[#f9f9f9]">
            <div className="container mx-auto max-w-[1200px]">
              <div className="section-title-container mb-10 text-center">
                <h3 className="section-title justify-center font-serif text-2xl font-bold">
                  <Menu size={24} className="mr-3" /> YOU MIGHT ALSO LIKE
                </h3>
              </div>
              
              <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                
                {/* Product 1 */}
                <div className="product-small col has-hover product bg-white p-3 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="col-inner">
                    <div className="box-image mb-4 bg-gray-50 aspect-square relative group">
                      <div className="image-fade_in_back w-full h-full">
                        <a href="#">
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png" className="back-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
                        </a>
                      </div>
                    </div>
                    <div className="box-text text-center">
                      <div className="title-wrapper min-h-[40px]">
                        <p className="name product-title">
                          <a href="#">Richard Mille RM67-02 Black Carbon TPT Custom Modify</a>
                        </p>
                      </div>
                      <div className="price-wrapper mt-2">
                        <div className="star-rating flex justify-center space-x-1 mb-2">
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                        </div>
                        <span className="price font-serif font-bold text-lg">
                          <bdi>4.600 <span className="woocommerce-Price-currencySymbol">$</span></bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="product-small col has-hover product bg-white p-3 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="col-inner">
                    <div className="box-image mb-4 bg-gray-50 aspect-square relative group">
                      <div className="image-fade_in_back w-full h-full">
                        <a href="#">
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/07/13-247x247.png" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/07/z8006286682919_f8b17d8de483fd6eea96a18109486c17-247x247.jpg" className="back-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
                        </a>
                      </div>
                    </div>
                    <div className="box-text text-center">
                      <div className="title-wrapper min-h-[40px]">
                        <p className="name product-title">
                          <a href="#">Richard Mille RM67-02 Full Black Carbon TPT Custom Modify</a>
                        </p>
                      </div>
                      <div className="price-wrapper mt-2">
                        <div className="star-rating flex justify-center space-x-1 mb-2">
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                        </div>
                        <span className="price font-serif font-bold text-lg">
                          <bdi>4.600 <span className="woocommerce-Price-currencySymbol">$</span></bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="product-small col has-hover product bg-white p-3 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="col-inner">
                    <div className="box-image mb-4 bg-gray-50 aspect-square relative group">
                      <div className="image-fade_in_back w-full h-full">
                        <a href="#">
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-247x247.webp" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/06/z7906650067246_19d6570c08bbd3dbe99f9dd1c5ebe25a-247x247.webp" className="back-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
                        </a>
                      </div>
                    </div>
                    <div className="box-text text-center">
                      <div className="title-wrapper min-h-[40px]">
                        <p className="name product-title">
                          <a href="#">Richard Mille RM67-01 Extra-Flat Titanium Handcrafted</a>
                        </p>
                      </div>
                      <div className="price-wrapper mt-2">
                        <div className="star-rating flex justify-center space-x-1 mb-2">
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                        </div>
                        <span className="price font-serif font-bold text-lg">
                          <bdi>3.600 <span className="woocommerce-Price-currencySymbol">$</span></bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="product-small col has-hover product bg-white p-3 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="col-inner">
                    <div className="box-image mb-4 bg-gray-50 aspect-square relative group">
                      <div className="image-fade_in_back w-full h-full">
                        <a href="#">
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-247x247.png" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/z7832313171371_7d87d006d198f4ebf69985070e6c4af7-247x247.webp" className="back-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
                        </a>
                      </div>
                    </div>
                    <div className="box-text text-center">
                      <div className="title-wrapper min-h-[40px]">
                        <p className="name product-title">
                          <a href="#">Patek Philippe Nautilus 5711A Green 40mm Custom Modify</a>
                        </p>
                      </div>
                      <div className="price-wrapper mt-2">
                        <div className="star-rating flex justify-center space-x-1 mb-2">
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                        </div>
                        <span className="price font-serif font-bold text-lg">
                          <bdi>5.600 <span className="woocommerce-Price-currencySymbol">$</span></bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 5 */}
                <div className="product-small col has-hover product bg-white p-3 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="col-inner">
                    <div className="box-image mb-4 bg-gray-50 aspect-square relative group">
                      <div className="image-fade_in_back w-full h-full">
                        <a href="#">
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-14-247x247.png" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Dong-ho-nam-Rolex-Day-Date-Rep-11-mat-xanh-ombre-nang-212-gram-bo-may-calibre-3255-xuong-RC-40mm-1-600x600-1-247x247.jpg" className="back-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
                        </a>
                      </div>
                    </div>
                    <div className="box-text text-center">
                      <div className="title-wrapper min-h-[40px]">
                        <p className="name product-title">
                          <a href="#">Rolex Day Date 228239-0076 VIP Version</a>
                        </p>
                      </div>
                      <div className="price-wrapper mt-2">
                        <div className="star-rating flex justify-center space-x-1 mb-2">
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                        </div>
                        <span className="price font-serif font-bold text-lg">
                          <bdi>920 <span className="woocommerce-Price-currencySymbol">$</span></bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 6 */}
                <div className="product-small col has-hover product bg-white p-3 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="col-inner">
                    <div className="box-image mb-4 bg-gray-50 aspect-square relative group">
                      <div className="image-fade_in_back w-full h-full">
                        <a href="#">
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png" className="back-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
                        </a>
                      </div>
                    </div>
                    <div className="box-text text-center">
                      <div className="title-wrapper min-h-[40px]">
                        <p className="name product-title">
                          <a href="#">Rolex Datejust 36 M126234-0057 VIP Version</a>
                        </p>
                      </div>
                      <div className="price-wrapper mt-2">
                        <div className="star-rating flex justify-center space-x-1 mb-2">
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                        </div>
                        <span className="price font-serif font-bold text-lg">
                          <bdi>820 <span className="woocommerce-Price-currencySymbol">$</span></bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 7 */}
                <div className="product-small col has-hover product bg-white p-3 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="col-inner">
                    <div className="box-image mb-4 bg-gray-50 aspect-square relative group">
                      <div className="image-fade_in_back w-full h-full">
                        <a href="#">
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-9-247x247.png" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-9-247x247.png" className="back-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
                        </a>
                      </div>
                    </div>
                    <div className="box-text text-center">
                      <div className="title-wrapper min-h-[40px]">
                        <p className="name product-title">
                          <a href="#">Rolex Datejust 126233-0017 VIP Version</a>
                        </p>
                      </div>
                      <div className="price-wrapper mt-2">
                        <div className="star-rating flex justify-center space-x-1 mb-2">
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                        </div>
                        <span className="price font-serif font-bold text-lg">
                          <bdi>820 <span className="woocommerce-Price-currencySymbol">$</span></bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 8 */}
                <div className="product-small col has-hover product bg-white p-3 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="col-inner">
                    <div className="box-image mb-4 bg-gray-50 aspect-square relative group">
                      <div className="image-fade_in_back w-full h-full">
                        <a href="#">
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-2-247x247.png" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" alt="Product" />
                          <img width="247" height="247" src="https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-2-247x247.png" className="back-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" alt="Product Hover" />
                        </a>
                      </div>
                    </div>
                    <div className="box-text text-center">
                      <div className="title-wrapper min-h-[40px]">
                        <p className="name product-title">
                          <a href="#">Rolex Datejust 126334-0010 Green Ombre New 2026 VIP</a>
                        </p>
                      </div>
                      <div className="price-wrapper mt-2">
                        <div className="star-rating flex justify-center space-x-1 mb-2">
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                          <Star size={12} fill="black" />
                        </div>
                        <span className="price font-serif font-bold text-lg">
                          <bdi>720 <span className="woocommerce-Price-currencySymbol">$</span></bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="text-center mt-8">
                <a href="#" className="button white is-outline inline-flex items-center">
                  <span>SHOP ALL COLLECTION</span> <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </section>

          {/* HANDCRAFTED CNC GALLERY */}
          <section className="section py-16 bg-white border-t border-gray-200">
            <div className="container mx-auto max-w-[1200px]">
              <div className="section-title-container mb-10 text-center">
                <h3 className="section-title justify-center font-serif text-2xl font-bold">
                  <Menu size={24} className="mr-3" /> HANDCRAFTED CNC
                </h3>
              </div>
              
              <div className="banner-grid row row-grid hide-for-small row-small grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 px-4 h-[600px]">
                
                {/* Large Block */}
                <div className="col md:col-span-2 md:row-span-2 relative overflow-hidden group cursor-pointer h-full">
                  <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-67-02-sebastien-ogier-carbon-tpt-2024-richard-mille-43740914483444.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="RICHARD MILLE" />
                  <div className="overlay absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-10 left-10 z-10 text-white">
                    <h2 className="uppercase font-serif text-3xl font-bold mb-1">RICHARD MILLE</h2>
                    <h3 className="font-sans text-lg">Watches</h3>
                  </div>
                </div>

                {/* Medium Block 1 */}
                <div className="col md:col-span-1 md:row-span-1 relative overflow-hidden group cursor-pointer h-full">
                  <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126711chnr-root-beer-stainless-steel-rose-gold-black-dial-2021-rolex-1221882571.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ROLEX" />
                  <div className="overlay absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 z-10 text-white">
                    <h2 className="uppercase font-serif text-xl font-bold mb-1">ROLEX</h2>
                    <h3 className="font-sans text-sm">Watches</h3>
                  </div>
                </div>

                {/* Medium Block 2 */}
                <div className="col md:col-span-1 md:row-span-1 relative overflow-hidden group cursor-pointer h-full">
                  <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/4b821a59ae889469621bc9a95aa24e66.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="HUBLOT" />
                  <div className="overlay absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 z-10 text-white">
                    <h2 className="uppercase font-serif text-xl font-bold mb-1">HUBLOT</h2>
                    <h3 className="font-sans text-sm">Watches</h3>
                  </div>
                </div>

                {/* Medium Block 3 */}
                <div className="col md:col-span-1 md:row-span-1 relative overflow-hidden group cursor-pointer h-full">
                  <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5711-1a-010-tiffany-co-stainless-steel-blue-dial-2018-patek-philippe-1202180049.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="PATEK PHILIPPE" />
                  <div className="overlay absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 z-10 text-white">
                    <h2 className="uppercase font-serif text-xl font-bold mb-1">PATEK PHILIPPE</h2>
                    <h3 className="font-sans text-sm">Watches</h3>
                  </div>
                </div>

                {/* Medium Block 4 */}
                <div className="col md:col-span-1 md:row-span-1 relative overflow-hidden group cursor-pointer h-full">
                  <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/audemars-piguet-royal-oak-selfwinding-15510st-oo-1320st-09-stainless-steel-green-dial-2025-audemars-piguet-1195982415.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="AUDEMARS PIGUET" />
                  <div className="overlay absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 z-10 text-white">
                    <h2 className="uppercase font-serif text-xl font-bold mb-1">AUDEMARS PIGUET</h2>
                    <h3 className="font-sans text-sm">Watches</h3>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SOCIAL & VALUE PROPS */}
          <section className="section py-20 bg-[#f8f8f8] border-t border-gray-200">
            <div className="container mx-auto max-w-[1200px] px-6">
              
              <div className="row grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                
                {/* Intro */}
                <div className="col medium-3 small-12 large-3">
                  <div className="col-inner text-left">
                    <h2 className="font-serif text-2xl font-bold mb-4 flex items-center">
                      <Menu className="mr-2" size={24} /> HY ON SOCIAL
                    </h2>
                    <p className="font-sans text-gray-700 leading-relaxed mb-4">
                      Follow <strong>HY Watches</strong> on <strong>TikTok</strong>, <strong>Instagram</strong>, and <strong>Facebook</strong> for real unboxing videos, detailed product reviews, new arrivals updates and watch insights.
                    </p>
                    <p className="font-sans text-gray-700 leading-relaxed">
                      Every piece you see is filmed honestly — so you can observe the finishing, proportions and wrist presence before making your decision.
                    </p>
                  </div>
                </div>

                {/* Video Block 1 */}
                <div className="col medium-3 small-12 large-3 group cursor-pointer relative overflow-hidden bg-black aspect-[3/4] shadow-md rounded-md">
                  <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/2b2e1b0541f39a9e492d207fbee49c43.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="TikTok" />
                  <div className="absolute top-4 left-4 z-10">
                    <h4 className="text-white font-serif uppercase tracking-wider font-bold flex items-center">
                      <Play size={16} className="mr-2" /> TIKTOK
                    </h4>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-all text-white group-hover:text-black">
                       <Play size={24} className="ml-1" />
                     </div>
                  </div>
                </div>

                {/* Video Block 2 */}
                <div className="col medium-3 small-12 large-3 group cursor-pointer relative overflow-hidden bg-black aspect-[3/4] shadow-md rounded-md">
                  <img src="https://lucytimepieces.com/wp-content/uploads/2026/06/Snapinsta.app_449296172_325308890635793_4868141041585460502_n_1080.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Instagram" />
                  <div className="absolute top-4 left-4 z-10">
                    <h4 className="text-white font-serif uppercase tracking-wider font-bold flex items-center">
                      <Instagram size={16} className="mr-2" /> INSTA
                    </h4>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-all text-white group-hover:text-black">
                       <Play size={24} className="ml-1" />
                     </div>
                  </div>
                </div>

                {/* Video Block 3 */}
                <div className="col medium-3 small-12 large-3 group cursor-pointer relative overflow-hidden bg-black aspect-[3/4] shadow-md rounded-md">
                  <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/4b821a59ae889469621bc9a95aa24e66.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Facebook" />
                  <div className="absolute top-4 left-4 z-10">
                    <h4 className="text-white font-serif uppercase tracking-wider font-bold flex items-center">
                      <Facebook size={16} className="mr-2" /> FACEBOOK
                    </h4>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-all text-white group-hover:text-black">
                       <Play size={24} className="ml-1" />
                     </div>
                  </div>
                </div>

              </div>

              {/* Trust Badges */}
              <div className="row grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-300 pt-16 mt-8">
                <div className="col text-center flex flex-col items-center">
                  <Package size={50} strokeWidth={1} className="text-black mb-4" />
                  <strong className="font-serif text-xl uppercase mb-2">Free Shipping</strong>
                  <p className="font-sans text-gray-600 max-w-[280px]">Free worldwide shipping via <strong>FedEx, DHL, UPS</strong>, delivered within <strong>7-14 days</strong>.</p>
                </div>
                <div className="col text-center flex flex-col items-center">
                  <CreditCard size={50} strokeWidth={1} className="text-black mb-4" />
                  <strong className="font-serif text-xl uppercase mb-2">Pay Before Delivery</strong>
                  <p className="font-sans text-gray-600 max-w-[280px]">Easy and secure payments via <strong>PayPal, Crypto, Visa & MasterCard</strong>. 100% safe and protected.</p>
                </div>
                <div className="col text-center flex flex-col items-center">
                  <ShieldCheck size={50} strokeWidth={1} className="text-black mb-4" />
                  <strong className="font-serif text-xl uppercase mb-2">Warranty & Returns</strong>
                  <p className="font-sans text-gray-600 max-w-[280px]"><strong>2-5 year warranty</strong> on all products. <strong>100% replacement</strong> within <strong>7 days</strong> if any defects are found.</p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer id="footer" className="footer-wrapper w-full bg-[#f9f9f9] pt-16 border-t border-gray-200">
        <section className="section footer-section">
          <div className="container mx-auto max-w-[1200px] px-6">
            <div className="row grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
              
              <div className="col cot1">
                <div className="col-inner">
                  <h3 className="font-serif uppercase tracking-[1px] text-lg font-bold mb-4 text-black">HY WATCHES</h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed pr-4">
                    Confidently operating from our headquarters in <strong>Boronia, VIC</strong>, we are proud to be trusted and selected to distribute <strong>finely crafted products of exceptional quality</strong> to customers worldwide, helping to elevate the luxury experience and make premium products more accessible than ever.
                  </p>
                </div>
              </div>

              <div className="col cot2">
                <div className="col-inner">
                  <h3 className="font-serif uppercase tracking-[1px] text-lg font-bold mb-4 text-black">CONTACT INFORMATION</h3>
                  <div className="font-sans text-gray-600 text-sm space-y-2">
                    <p><strong className="text-black">HY SYSTEMS Australia</strong><br/>80 Albert Avenue, Boronia, VIC 3155</p>
                    <p className="pt-2"><strong className="text-black">Email:</strong> support@hysystems.com.au</p>
                    <p><strong className="text-black">Zalo / WhatsApp:</strong> (+61) 400 000 000</p>
                    <p><strong className="text-black">Website:</strong> www.hysystems.com.au</p>
                  </div>
                  <div className="flex space-x-3 mt-6">
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"><Facebook size={18} /></a>
                  </div>
                </div>
              </div>

              <div className="col cot3">
                <div className="col-inner">
                  <h3 className="font-serif uppercase tracking-[1px] text-lg font-bold mb-4 text-black">MORE INFO</h3>
                  <ul className="space-y-3 font-sans text-sm font-medium">
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Social Media</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">How To Order</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Payment Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Shipping Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Service & Warranty</a></li>
                  </ul>
                </div>
              </div>

              <div className="col cot4">
                <div className="col-inner">
                  <h3 className="font-serif uppercase tracking-[1px] text-lg font-bold mb-4 text-black">COLLECTIONS</h3>
                  <ul className="space-y-3 font-sans text-sm font-medium columns-2">
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">All Collections</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Hublot</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Rolex</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Cartier</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Omega</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Tudor</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Patek Philippe</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Audemars Piguet</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Vacheron</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-[#dbaf56] transition-colors block">Richard Mille</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="absolute-footer bg-[#f1f1f1] py-6 border-t border-gray-300 text-center">
          <div className="container mx-auto">
            <div className="font-sans text-xs text-gray-500 uppercase tracking-widest font-medium">
              ©2026, HY WATCHES™ BY HY SYSTEMS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
