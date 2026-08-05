import React, { useState, useEffect, createContext, useContext, ReactNode, useRef } from 'react';
import { 
  Search, Globe, ShoppingBag, Menu, X, Instagram, Facebook, 
  ChevronDown, ArrowRight, MessageCircle 
} from 'lucide-react';

// ==========================================
// 1. GLOBAL STATE & CONTEXT
// ==========================================

interface CartItem {
  id: string;
  brand: string;
  model: string;
  price: number;
  image: string;
}

interface AppContextType {
  currentRoute: string;
  navigate: (route: string) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (state: boolean) => void;
  isCartOpen: boolean;
  setCartOpen: (state: boolean) => void;
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  cartTotal: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
}

function AppProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState('HOME');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const navigate = (route: string) => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentRoute(route);
  };

  const addToCart = (item: CartItem) => {
    setCartItems(prev => [...prev, item]);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <AppContext.Provider value={{
      currentRoute, navigate,
      isMobileMenuOpen, setMobileMenuOpen,
      isCartOpen, setCartOpen,
      cartItems, addToCart, removeFromCart, cartTotal
    }}>
      {children}
    </AppContext.Provider>
  );
}

// ==========================================
// 2. GLOBAL ANIMATION HOOKS
// ==========================================

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.reveal-target').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useParallax() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        document.querySelectorAll('.parallax-layer').forEach(el => {
          const speed = (el as HTMLElement).dataset.speed || '1';
          (el as HTMLElement).style.transform = `translate(calc(-50% + ${x * parseFloat(speed)}px), calc(-50% + ${y * parseFloat(speed)}px))`;
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
}

// ==========================================
// 3. GLOBAL STYLESHEET
// ==========================================

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    :root { 
      --gold-primary: #c5a059; 
      --gold-light: #e6c875;
      --gold-dark: #967431;
      --bg-dark: #030303; 
      --bg-panel: #0a0a0a;
    }
    body { 
      font-family: 'Sarabun', sans-serif; 
      background-color: var(--bg-dark); 
      color: #ffffff; 
      margin: 0; 
      padding: 0; 
      -webkit-font-smoothing: antialiased; 
    }
    h1, h2, h3, h4, h5, h6, .font-serif { 
      font-family: 'Roboto Condensed', sans-serif; 
    }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg-dark); }
    ::-webkit-scrollbar-thumb { background: #222; }
    ::-webkit-scrollbar-thumb:hover { background: var(--gold-primary); }
    
    .nav-link { position: relative; letter-spacing: 0.15em; font-size: 11px; font-weight: 600; text-transform: uppercase; padding: 10px 0; color: #fff; transition: color 0.3s ease; cursor: pointer; }
    .nav-link::before { content: ''; position: absolute; bottom: 0; left: 0; width: 0%; height: 1px; background-color: var(--gold-primary); transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }
    .nav-link:hover { color: var(--gold-primary); }
    .nav-link:hover::before { width: 100%; }
    
    .btn-gold { position: relative; display: inline-flex; align-items: center; justify-content: center; background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.2); padding: 16px 40px; letter-spacing: 3px; font-family: 'Roboto Condensed', sans-serif; font-weight: 500; font-size: 13px; text-transform: uppercase; overflow: hidden; transition: all 0.5s ease; cursor: pointer; }
    .btn-gold::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--gold-primary); transform: scaleX(0); transform-origin: right; transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1); z-index: -1; }
    .btn-gold:hover { border-color: var(--gold-primary); color: #000; box-shadow: 0 0 30px rgba(197, 160, 89, 0.3); }
    .btn-gold:hover::before { transform: scaleX(1); transform-origin: left; }
    
    .reveal-target { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
    .reveal-target.revealed { opacity: 1; transform: translateY(0); }
    
    .ken-burns { animation: kenBurns 30s infinite alternate linear; }
    @keyframes kenBurns { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
    
    .glass-panel { background: rgba(10, 10, 10, 0.85); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.05); }
    .shimmer-card { position: relative; overflow: hidden; }
    .shimmer-card::after { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent); transform: skewX(-20deg); transition: left 0.7s ease; }
    .shimmer-card:hover::after { left: 150%; }
    .ambient-light { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 0; opacity: 0.25; mix-blend-mode: screen; }
    
    .text-gradient-gold { background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold-dark) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  `}} />
);

// ==========================================
// 4. PERSISTENT LAYOUT COMPONENTS
// ==========================================

function Header() {
  const { navigate, setMobileMenuOpen, setCartOpen, cartItems } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${isScrolled ? 'h-[80px] bg-[#030303]/95 backdrop-blur-2xl shadow-2xl border-b border-white/5' : 'h-[120px] bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-[1600px] mx-auto w-full h-full px-6 md:px-12 flex justify-between items-center">
        
        <div className="flex-shrink-0 z-[110]">
          <a onClick={() => navigate('HOME')} className="cursor-pointer font-serif uppercase tracking-[6px] text-2xl font-bold text-white hover:text-[#c5a059] transition-colors flex items-center">
            HY WATCHES
          </a>
        </div>

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-full z-[105]">
          <ul className="flex space-x-12 items-center h-full m-0 p-0">
            <li className="h-full flex items-center"><a onClick={() => navigate('SHOP')} className="nav-link">SHOP INVENTORY</a></li>
            <li className="relative group h-full flex items-center">
              <a className="flex items-center nav-link cursor-pointer">
                BRANDS <ChevronDown size={14} className="ml-1.5 opacity-50 group-hover:rotate-180 transition-transform" />
              </a>
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 glass-panel min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4 translate-y-4 group-hover:translate-y-0 border-t-2 border-t-[#c5a059]">
                {['Richard Mille', 'Patek Philippe', 'Audemars Piguet', 'Rolex', 'Hublot'].map(brand => (
                  <a key={brand} onClick={() => navigate('SHOP')} className="block px-8 py-3 text-[11px] tracking-[2px] font-serif uppercase text-gray-400 hover:bg-white/5 hover:text-[#c5a059] transition-all cursor-pointer">
                    {brand}
                  </a>
                ))}
              </div>
            </li>
            <li className="h-full flex items-center"><a onClick={() => navigate('ABOUT')} className="nav-link">OUR LEGACY</a></li>
            <li className="h-full flex items-center"><a onClick={() => navigate('CONTACT')} className="nav-link">CLIENT RELATIONS</a></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-6 z-[110]">
          <div className="hidden md:flex items-center space-x-6 border-r border-white/20 pr-6">
            <button onClick={() => navigate('SHOP')} className="text-white hover:text-[#c5a059] transition-colors"><Search size={18} /></button>
            <button className="text-white hover:text-[#c5a059] transition-colors relative" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={18} />
              <span className="absolute -top-1.5 -right-2 bg-[#c5a059] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartItems.length}</span>
            </button>
          </div>
          <button className="flex items-center space-x-3 text-white hover:text-[#c5a059] transition-colors" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen, navigate } = useAppContext();

  return (
    <div className={`fixed inset-0 z-[200] flex transition-all duration-700 ${isMobileMenuOpen ? 'visible' : 'invisible delay-500'}`}>
      <div className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`relative w-[90%] max-w-[450px] h-full bg-[#050505] border-l border-white/5 shadow-2xl flex flex-col ml-auto transform transition-transform duration-700 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-8 border-b border-white/5">
          <span className="font-serif uppercase tracking-[4px] font-bold text-xl text-white">MENU</span>
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col py-8 px-8 flex-grow space-y-6">
          <div className="relative mb-8">
            <input type="text" placeholder="Search inventory..." className="w-full border-b border-white/20 bg-transparent py-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors" />
            <Search size={18} className="absolute right-0 top-4 text-gray-500" />
          </div>
          <a onClick={() => navigate('HOME')} className="font-serif uppercase text-2xl tracking-[2px] text-gray-300 hover:text-white hover:translate-x-2 transition-all cursor-pointer">HOME</a>
          <a onClick={() => navigate('SHOP')} className="font-serif uppercase text-2xl tracking-[2px] text-gray-300 hover:text-white hover:translate-x-2 transition-all cursor-pointer">SHOP INVENTORY</a>
          <a onClick={() => navigate('ABOUT')} className="font-serif uppercase text-2xl tracking-[2px] text-gray-300 hover:text-white hover:translate-x-2 transition-all cursor-pointer">OUR LEGACY</a>
          <a onClick={() => navigate('CONTACT')} className="font-serif uppercase text-2xl tracking-[2px] text-gray-300 hover:text-white hover:translate-x-2 transition-all cursor-pointer">CLIENT RELATIONS</a>
        </div>
      </div>
    </div>
  );
}

function CartDrawer() {
  const { isCartOpen, setCartOpen, cartItems, removeFromCart, cartTotal, navigate } = useAppContext();

  return (
    <div className={`fixed inset-0 z-[200] flex transition-all duration-700 ${isCartOpen ? 'visible' : 'invisible delay-500'}`}>
      <div className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setCartOpen(false)}></div>
      <div className={`relative w-full max-w-[500px] h-full bg-[#050505] border-l border-white/5 shadow-2xl flex flex-col ml-auto transform transition-transform duration-700 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-8 border-b border-white/5">
          <span className="font-serif uppercase tracking-[4px] font-bold text-xl text-white">YOUR VAULT</span>
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors" onClick={() => setCartOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col flex-grow p-8 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingBag size={48} className="mb-4 opacity-50" />
              <p className="font-serif uppercase tracking-[2px]">Vault is Empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#0a0a0a] p-4 border border-white/5">
                  <img src={item.image} alt={item.model} className="w-20 h-20 object-contain bg-[#111]" />
                  <div className="flex-grow">
                    <p className="text-[10px] text-[#c5a059] tracking-[2px] uppercase font-serif mb-1">{item.brand}</p>
                    <p className="text-xs font-mono text-gray-300 line-clamp-2">{item.model}</p>
                    <p className="font-bold text-sm mt-2">${item.price},000</p>
                  </div>
                  <button onClick={() => removeFromCart(idx)} className="text-gray-500 hover:text-red-500 transition-colors">
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="p-8 border-t border-white/5 bg-[#0a0a0a]">
          <div className="flex justify-between items-center mb-6">
            <span className="font-serif uppercase tracking-[2px] text-sm text-gray-400">Total Estimation</span>
            <span className="font-bold text-xl">${cartTotal},000</span>
          </div>
          <button 
            className="btn-gold w-full" 
            onClick={() => { setCartOpen(false); navigate('CONTACT'); }}
            disabled={cartItems.length === 0}
            style={{ opacity: cartItems.length === 0 ? 0.5 : 1, cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer' }}
          >
            <span className="relative z-10">INITIATE SECURE CHECKOUT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const { navigate } = useAppContext();
  return (
    <footer className="w-full bg-[#000] pt-24 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          <div className="md:col-span-4 pr-8">
            <span className="font-serif uppercase tracking-[6px] text-2xl font-bold text-white mb-6 block">HY WATCHES</span>
            <p className="text-gray-500 text-[13px] leading-[2] font-light mb-8">
              Brokering and distributing finely crafted timepieces. Uncompromising quality control and white-glove client relations.
            </p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all cursor-pointer"><Instagram size={16} /></a>
              <a className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all cursor-pointer"><Facebook size={16} /></a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-sans uppercase tracking-[2px] text-[11px] font-bold mb-6 text-white/50">Services</h3>
            <ul className="space-y-4 text-[13px] font-light text-gray-400">
              <li><a className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('CONTACT')}>Procurement</a></li>
              <li><a className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('CONTACT')}>Global Shipping</a></li>
              <li><a className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('CONTACT')}>Warranty</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-sans uppercase tracking-[2px] text-[11px] font-bold mb-6 text-white/50">Explore</h3>
            <ul className="space-y-4 text-[13px] font-light text-gray-400">
              <li><a className="hover:text-[#c5a059] cursor-pointer transition-colors" onClick={() => navigate('SHOP')}>Shop Inventory</a></li>
              <li><a className="hover:text-[#c5a059] cursor-pointer transition-colors" onClick={() => navigate('ABOUT')}>Our Legacy</a></li>
              <li><a className="hover:text-[#c5a059] cursor-pointer transition-colors" onClick={() => navigate('CONTACT')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <div className="bg-[#0a0a0a] p-8 border border-white/5">
              <h3 className="font-serif uppercase tracking-[2px] text-sm font-bold mb-6 flex items-center">
                <div className="w-2 h-2 bg-[#c5a059] rounded-full mr-3 animate-pulse"></div> Headquarters
              </h3>
              <p className="text-gray-400 text-sm font-light mb-4">Boronia, Victoria<br/>Australia</p>
              <p className="text-gray-400 text-sm font-light mb-4"><strong className="text-white">Email:</strong> info.hywatches@gmail.com</p>
              <p className="text-[#c5a059] text-sm"><strong className="text-white">WhatsApp:</strong> +61 000 000 000</p>
            </div>
          </div>
          
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[2px]">
          <p>© 2026 HY WATCHES™ BY HY SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>SSL Secured</span>
            <span>Global Dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// 5. ROOT INJECTION
// ==========================================

function Layout() {
  const { currentRoute } = useAppContext();
  const [preloaderActive, setPreloaderActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPreloaderActive(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />
      
      {/* INITIAL LOAD SEQUENCE */}
      <div className={`fixed inset-0 z-[9999] bg-[#030303] flex items-center justify-center transition-opacity duration-1000 ${preloaderActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-12 bg-white/20 relative overflow-hidden mb-6">
            <div className="absolute top-0 left-0 w-full h-full bg-[#c5a059] animate-[slideDown_1.5s_ease-in-out_infinite]"></div>
          </div>
          <span className="font-serif text-[#c5a059] tracking-[8px] text-sm uppercase">HY Watches</span>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideDown { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        `}} />
      </div>

      <Header />
      <MobileMenu />
      <CartDrawer />
      
      <main className="flex-grow flex flex-col min-h-screen">
        {/* 
          AWAITING COMPONENT INJECTIONS
          Execute Step 2 to generate Home.tsx, Shop.tsx, About.tsx, Contact.tsx 
        */}
        <div className="w-full flex-grow flex items-center justify-center pt-[120px]">
          <div className="text-center">
            <h2 className="font-serif uppercase tracking-[4px] text-2xl text-gray-500 mb-4">Architecture Initialized</h2>
            <p className="font-sans font-light text-gray-600">Awaiting modular page injections for route: <strong className="text-white">{currentRoute}</strong></p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
