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
// ==========================================
// DATA MAPPING & ASSETS
// ==========================================

const WATCH_DATABASE = [
  { id: 'RM-01', brand: 'Richard Mille', model: 'RM67-02 Black Carbon TPT "BLUE TIFFANY"', price: 4600, category: 'Carbon', description: 'Engineered for optimal performance on the wrist of elite athletes. The RM 67-02 weighs a mere 32 grams, utilizing TPT composite materials and a grade 5 titanium baseplate. The blue Tiffany accents provide a striking contrast against the dark carbon matrix.', specs: { material: 'Carbon TPT', movement: 'Automatic CRMA7', reserve: '50 Hours', waterResist: '30m', diameter: '38.7mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png', tag: 'LIMITED' },
  { id: 'RM-02', brand: 'Richard Mille', model: 'RM67-02 Full Black Carbon TPT NEW 2026', price: 4600, category: 'Carbon', description: 'A stealth interpretation of the ultimate sports watch. The full black carbon construction absorbs light while showcasing the unique damascene patterns inherent to the TPT manufacturing process.', specs: { material: 'Carbon TPT', movement: 'Automatic CRMA7', reserve: '50 Hours', waterResist: '30m', diameter: '38.7mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/07/z8006286682919_f8b17d8de483fd6eea96a18109486c17-247x247.jpg', tag: 'NEW' },
  { id: 'RM-03', brand: 'Richard Mille', model: 'RM67-01 Extra-Flat Titanium Handcrafted', price: 3600, category: 'Titanium', description: 'The RM 67-01 continues the legacy of the extra-flat watch, an exercise in extreme minimalism without sacrificing the characteristic Richard Mille tonneau shape.', specs: { material: 'Grade 5 Titanium', movement: 'Automatic CRMA6', reserve: '50 Hours', waterResist: '30m', diameter: '38.7mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-247x247.webp', tag: 'HOT' },
  { id: 'PP-01', brand: 'Patek Philippe', model: 'Nautilus 5711/1A Green 40mm Custom', price: 5600, category: 'Steel', description: 'The definitive luxury sports watch, reinvented with a highly sought-after olive green sunburst dial. The integrated stainless steel bracelet and porthole case design represent the peak of 1970s Gerald Genta design.', specs: { material: 'Stainless Steel', movement: 'Automatic 26-330 S C', reserve: '45 Hours', waterResist: '120m', diameter: '40mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-247x247.png', tag: 'EXCLUSIVE' },
  { id: 'RX-01', brand: 'Rolex', model: 'Day-Date 228239-0076 VIP Version', price: 920, category: 'White Gold', description: 'The ultimate watch of prestige. Cast in 18kt white gold, this Day-Date features a mesmerizing blue ombre dial that transitions from bright center to dark edges.', specs: { material: '18kt White Gold', movement: 'Automatic 3255', reserve: '70 Hours', waterResist: '100m', diameter: '40mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Dong-ho-nam-Rolex-Day-Date-Rep-11-mat-xanh-ombre-nang-212-gram-bo-may-calibre-3255-xuong-RC-40mm-1-600x600-1-247x247.jpg', tag: 'RESTOCKED' },
  { id: 'RX-02', brand: 'Rolex', model: 'Datejust 36 M126234-0057 VIP Version', price: 820, category: 'Steel & Gold', description: 'A timeless classic in a versatile 36mm case. Combining Oystersteel and 18kt white gold, this Datejust features the signature fluted bezel and a comfortable Jubilee bracelet.', specs: { material: 'Oystersteel & White Gold', movement: 'Automatic 3235', reserve: '70 Hours', waterResist: '100m', diameter: '36mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png', tag: 'CLASSIC' },
  { id: 'RX-03', brand: 'Rolex', model: 'Datejust 126233-0017 VIP Version', price: 820, category: 'Two-Tone', description: 'The quintessential Rolex aesthetic. Yellow Rolesor pairs the strength of Oystersteel with the luxury of 18kt yellow gold. The champagne dial and fluted bezel create a warm presence.', specs: { material: 'Yellow Rolesor', movement: 'Automatic 3235', reserve: '70 Hours', waterResist: '100m', diameter: '36mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-9-247x247.png', tag: 'POPULAR' },
  { id: 'RX-04', brand: 'Rolex', model: 'Datejust 126334-0010 Green Ombre New 2026', price: 720, category: 'Steel', description: 'A modern interpretation of the Datejust in a larger 41mm format. The dial features a captivating green ombre finish, transitioning to deep black at the periphery.', specs: { material: 'Oystersteel & White Gold', movement: 'Automatic 3235', reserve: '70 Hours', waterResist: '100m', diameter: '41mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-2-247x247.png', tag: 'TRENDING' },
];

const popularCollections = [
  { id: 1, title: 'LUCY PICKS', subtitle: 'HY EXCLUSIVE', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg', desc: 'Curated selection of our most coveted and precisely engineered timepieces.' },
  { id: 2, title: 'DAYTONA', subtitle: 'MOTORSPORT', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-daytona-116500ln-stainless-steel-white-panda-dial-2018-rolex-1212087379.jpg', desc: 'Born to race. The ultimate tool watch for those with a passion for driving.' },
  { id: 3, title: 'GMT-MASTER II', subtitle: 'AVIATION', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126710blnr-batgirl-stainless-steel-black-dial-jubilee-2021-rolex-1206409323.jpg', desc: 'Cross time zones with unparalleled precision and unmistakable aesthetic.' },
  { id: 4, title: 'DATEJUST', subtitle: 'CLASSIC', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-datejust-41-126334-stainless-steel-blue-diamond-dial-jubilee-2021-rolex-1197074364.jpg', desc: 'The archetype of the classic watch. Timeless elegance and functionality.' }
];

const socialMediaVideos = [
  { type: 'TIKTOK', icon: <Play size={16} strokeWidth={2.5} />, videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-adjusting-his-wristwatch-4245-large.mp4', link: '#' },
  { type: 'INSTAGRAM', icon: <Instagram size={16} strokeWidth={2.5} />, videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-luxury-watch-on-a-mans-wrist-4246-large.mp4', link: '#' },
  { type: 'FACEBOOK', icon: <Facebook size={16} strokeWidth={2.5} />, videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-man-putting-on-a-luxury-watch-4244-large.mp4', link: '#' }
];

// ==========================================
// PAGE COMPONENTS
// ==========================================

export function HomePage() {
  const { navigate, addToCart } = useAppContext();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeCollectionSlide, setActiveCollectionSlide] = useState(0);

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) video.play().catch(() => {});
    });
  }, []);

  const nextCollectionSlide = () => setActiveCollectionSlide((prev) => (prev + 1) % popularCollections.length);
  const prevCollectionSlide = () => setActiveCollectionSlide((prev) => (prev - 1 + popularCollections.length) % popularCollections.length);

  return (
    <div className="w-full flex flex-col">
      {/* HERO COMPONENT */}
      <div className="relative w-full h-screen bg-[#030303] overflow-hidden flex items-center justify-center">
        <div className="ambient-light bg-[#c5a059] w-[40vw] h-[40vw] top-[30%] left-[30%] parallax-layer" data-speed="0.5"></div>
        <div className="absolute inset-0 w-full h-full parallax-layer" data-speed="0.2">
          <video ref={el => videoRefs.current[0] = el} className="w-full h-full object-cover opacity-50 ken-burns" playsInline autoPlay muted loop>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-watch-on-a-dark-background-4240-large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#030303]"></div>
        <div className="relative z-10 w-full max-w-[1400px] px-6 mx-auto flex flex-col items-center text-center mt-20">
          <div className="flex items-center space-x-4 mb-8 reveal-target">
            <span className="w-12 h-[1px] bg-[#c5a059]"></span>
            <span className="text-[10px] md:text-[12px] tracking-[8px] uppercase text-[#c5a059] font-serif font-bold">2026 COLLECTION</span>
            <span className="w-12 h-[1px] bg-[#c5a059]"></span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-serif leading-[0.85] tracking-tighter mb-10 reveal-target delay-100">
            SERIES<br/>ALPHA
          </h1>
          <p className="max-w-[600px] text-gray-400 font-sans text-sm md:text-base leading-relaxed tracking-wide mb-12 reveal-target delay-200">
            Discover the pinnacle of horological engineering. Perfectly customized, authenticated, and delivered with uncompromising precision.
          </p>
          <div className="reveal-target delay-300">
            <button onClick={() => navigate('SHOP')} className="btn-gold group">
              <span className="relative z-10 flex items-center">EXPLORE THE VAULT <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-1 transition-transform" /></span>
            </button>
          </div>
        </div>
      </div>

      {/* DYNAMIC COLLECTIONS SLIDER */}
      <section className="relative w-full py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-target">
            <div>
              <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif block mb-4">Curated Selection</span>
              <h3 className="font-serif uppercase text-4xl md:text-5xl text-white font-bold tracking-[2px]">FEATURED SERIES</h3>
            </div>
            <div className="hidden md:flex space-x-4">
              <button onClick={prevCollectionSlide} className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all"><ChevronLeft size={20} /></button>
              <button onClick={nextCollectionSlide} className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition-all"><ChevronRight size={20} /></button>
            </div>
          </div>
          <div className="relative overflow-hidden w-full reveal-target delay-200">
            <div className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: `translateX(-${activeCollectionSlide * (100 / (window.innerWidth < 768 ? 1 : 3))}%)` }}>
              {popularCollections.map((item) => (
                <div key={item.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="relative group cursor-pointer overflow-hidden bg-[#111] h-[500px] md:h-[650px] rounded-sm shimmer-card">
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
                    <div className="absolute top-8 left-8 z-10"><span className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 text-[9px] uppercase tracking-[3px] text-white">{item.subtitle}</span></div>
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                      <h4 className="text-white text-3xl font-bold uppercase tracking-[2px] font-serif mb-3">{item.title}</h4>
                      <p className="font-sans text-gray-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                      <div className="w-0 h-[1px] bg-[#c5a059] mt-6 transition-all duration-700 ease-out group-hover:w-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-10 md:hidden">
            <button onClick={prevCollectionSlide} className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white active:bg-white active:text-black transition-all"><ChevronLeft size={20} /></button>
            <button onClick={nextCollectionSlide} className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white active:bg-white active:text-black transition-all"><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      {/* LATEST ARRIVALS */}
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden">
        <div className="ambient-light bg-[#c5a059] w-[40vw] h-[40vw] top-0 left-[-20vw] parallax-layer" data-speed="0.2"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal-target">
            <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif block mb-4">Latest Arrivals</span>
            <h3 className="font-serif uppercase text-4xl md:text-5xl text-white font-bold tracking-[2px]">RECENT ACQUISITIONS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WATCH_DATABASE.slice(0, 4).map((product, index) => (
              <div key={product.id} className={`group cursor-pointer flex flex-col bg-transparent p-4 transition-all duration-500 reveal-target delay-${(index % 4) * 100}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] mb-6 rounded-sm border border-white/5 group-hover:border-white/20 transition-colors">
                  <img src={product.image} className="absolute inset-0 w-full h-full object-contain p-8 transition-all duration-700 opacity-100 group-hover:scale-110 ease-out" alt={product.title} />
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-20"><span className="bg-white text-black text-[9px] font-bold px-3 py-1.5 uppercase tracking-[2px]">{product.tag}</span></div>
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-sm">
                    <button className="btn-gold !px-6 !py-3 !text-[10px]" onClick={() => addToCart(product)}>
                      <span className="relative z-10 font-bold tracking-[2px]">ACQUIRE ASSET</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col flex-grow text-center px-2">
                  <span className="font-serif text-[10px] text-gray-500 uppercase tracking-[2px] mb-2 block">{product.specs.material}</span>
                  <h4 className="font-mono text-[13px] leading-[1.6] text-gray-300 transition-colors duration-300 group-hover:text-white line-clamp-2 mb-4 font-light">{product.model}</h4>
                  <p className="font-serif text-lg font-bold text-white mt-auto tracking-wide border-t border-white/10 pt-4">${product.price},000</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20 reveal-target delay-200">
            <button onClick={() => navigate('SHOP')} className="btn-gold group">
              <span className="relative z-10 flex items-center">VIEW FULL INVENTORY <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-1 transition-transform" /></span>
            </button>
          </div>
        </div>
      </section>

      {/* SOCIAL SHOWCASE */}
      <section className="relative w-full py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
            <div className="flex flex-col justify-center lg:pr-12 reveal-target">
              <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif block mb-4">Digital Presence</span>
              <h3 className="font-serif uppercase text-4xl text-white font-bold mb-8 tracking-[2px] leading-tight">HY ON SOCIAL</h3>
              <div className="w-10 h-[1px] bg-white/20 mb-8"></div>
              <p className="font-sans text-gray-400 leading-[1.8] mb-6 text-[15px] font-light">Follow <strong className="text-white font-medium">HY Watches</strong> across digital platforms for unboxing sequences, macro reviews, and arrival alerts.</p>
              <p className="font-sans text-gray-400 leading-[1.8] text-[15px] font-light mb-8">Every piece is filmed raw, allowing you to observe finishing, proportions, and wrist presence.</p>
            </div>
            {socialMediaVideos.map((social, idx) => (
              <div key={idx} className={`flex flex-col reveal-target delay-${(idx + 1) * 100}`}>
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <span className="flex items-center text-white font-sans font-bold uppercase tracking-[2px] text-[11px]"><span className="mr-3 text-[#c5a059]">{social.icon}</span> {social.type}</span>
                  <span className="text-gray-600 text-[10px] tracking-widest font-mono">@HYWATCHES</span>
                </div>
                <div className="relative aspect-[9/16] bg-[#030303] overflow-hidden group cursor-pointer shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-sm border border-white/5">
                  <video ref={el => videoRefs.current[idx + 1] = el} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-[2s] ease-out group-hover:opacity-100" preload="auto" playsInline autoPlay muted loop>
                    <source src={social.videoSrc} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ShopPage() {
  const { addToCart } = useAppContext();
  const [filter, setFilter] = useState('ALL');
  const brands = ['ALL', 'Richard Mille', 'Rolex', 'Patek Philippe', 'Audemars Piguet', 'Hublot'];
  const filteredWatches = filter === 'ALL' ? WATCH_DATABASE : WATCH_DATABASE.filter(w => w.brand === filter);

  return (
    <div className="w-full flex flex-col pt-[120px] bg-[#030303] min-h-screen">
      <div className="max-w-[1600px] mx-auto w-full px-6 py-12 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-[280px] flex-shrink-0 border-r border-white/5 pr-8 reveal-target">
          <h2 className="font-serif uppercase text-2xl tracking-[2px] mb-8 pb-4 border-b border-white/10 flex items-center">INVENTORY</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-[2px] text-gray-500 mb-4 font-bold">Manufacture</h3>
              <ul className="space-y-3">
                {brands.map(b => (
                  <li key={b}>
                    <button onClick={() => setFilter(b)} className={`text-[13px] uppercase tracking-[1px] font-light transition-colors flex items-center ${filter === b ? 'text-[#c5a059]' : 'text-gray-400 hover:text-white'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-3 ${filter === b ? 'bg-[#c5a059]' : 'bg-transparent border border-gray-600'}`}></span>
                      {b}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[2px] text-gray-500 mb-4 font-bold">Material Matrix</h3>
              <ul className="space-y-3">
                {['Carbon TPT', 'Grade 5 Titanium', 'Oystersteel', '18kt Gold', 'Ceramic'].map(m => (
                  <li key={m} className="text-[13px] uppercase tracking-[1px] font-light text-gray-400 cursor-not-allowed opacity-50 flex items-center"><span className="w-1.5 h-1.5 rounded-full border border-gray-600 mr-3"></span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-8 reveal-target">
            <p className="text-sm text-gray-400 font-light uppercase tracking-[2px]">Displaying {filteredWatches.length} Assets</p>
            <button className="text-xs text-white border border-white/20 px-4 py-2 uppercase tracking-[1px] hover:bg-white hover:text-black transition-colors">Sort: Acquisition Date</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredWatches.map((watch, i) => (
              <div key={watch.id} className={`bg-[#0a0a0a] border border-white/5 p-5 group flex flex-col h-full reveal-target delay-${(i % 3) * 100}`}>
                <div className="relative aspect-square bg-[#111] mb-6 overflow-hidden flex items-center justify-center">
                  <img src={watch.image} className="w-[80%] h-[80%] object-contain transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3"><span className="bg-white text-black text-[9px] font-bold px-2 py-1 uppercase tracking-[2px]">{watch.tag}</span></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#c5a059] text-[10px] tracking-[2px] uppercase font-serif">{watch.brand}</span>
                    <span className="text-gray-500 text-[10px] tracking-[1px] uppercase border border-gray-700 px-1">{watch.specs.diameter}</span>
                  </div>
                  <h4 className="text-[13px] font-mono font-light text-gray-200 mb-3 line-clamp-2 leading-relaxed">{watch.model}</h4>
                  <p className="text-[11px] text-gray-500 font-light mb-6 line-clamp-3">{watch.description}</p>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center border-t border-white/10 pt-4 mb-4">
                      <span className="font-serif font-bold text-xl text-white">${watch.price},000</span>
                    </div>
                    <button className="w-full border border-[#c5a059] text-[#c5a059] py-3 text-xs uppercase tracking-[2px] font-bold hover:bg-[#c5a059] hover:text-black transition-all" onClick={() => addToCart(watch)}>
                      Acquire Asset
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="w-full pt-[120px] bg-[#030303] text-white min-h-screen pb-32">
      <div className="max-w-[1000px] mx-auto px-6 pt-20 text-center reveal-target">
        <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif block mb-6">Our Legacy</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold uppercase tracking-[4px] mb-12">The Zenith of<br/>Horology</h1>
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#c5a059] to-transparent mx-auto mb-12"></div>
        <p className="text-lg md:text-xl text-gray-400 font-light leading-[2] tracking-wide text-left md:text-center">
          Founded in Victoria, Australia, HY Systems was established with a singular directive: to provide unfiltered access to the world's most exclusive, technically profound, and aesthetically immaculate timepieces. We operate at the intersection of haute horlogerie and global logistics.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal-target">
        <div className="aspect-[4/5] bg-[#111] relative overflow-hidden glass-panel p-2">
          <img src="https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-67-02-sebastien-ogier-carbon-tpt-2024-richard-mille-43740914483444.jpg" className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"/>
        </div>
        <div className="flex flex-col space-y-12">
          <div>
            <h3 className="text-[#c5a059] font-serif uppercase tracking-[3px] text-xl mb-4 border-b border-white/10 pb-4">01. Precision Sourcing</h3>
            <p className="text-gray-400 font-light leading-[1.8] text-sm">Our global network of authorized dealers and private collectors allows us to bypass traditional waitlists, acquiring highly allocated references immediately upon client mandate.</p>
          </div>
          <div>
            <h3 className="text-[#c5a059] font-serif uppercase tracking-[3px] text-xl mb-4 border-b border-white/10 pb-4">02. Micro-Mechanical Authentication</h3>
            <p className="text-gray-400 font-light leading-[1.8] text-sm">Every acquisition undergoes a mandatory 48-hour diagnostic protocol. Master technicians verify escapement amplitude, water resistance margins, and case geometry integrity to guarantee absolute authenticity.</p>
          </div>
          <div>
            <h3 className="text-[#c5a059] font-serif uppercase tracking-[3px] text-xl mb-4 border-b border-white/10 pb-4">03. Bespoke Customization</h3>
            <p className="text-gray-400 font-light leading-[1.8] text-sm">For clients seeking unique expression, our CNC machining and gem-setting departments execute flawless aftermarket modifications utilizing VVS1 diamonds and proprietary carbon composite milling.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full pt-[120px] bg-[#030303] text-white min-h-screen pb-32">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-20 reveal-target">
          <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif block mb-4">Client Relations</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-[2px]">SECURE COMMUNICATIONS</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-[#0a0a0a] border border-white/5 p-8 md:p-16 reveal-target">
          <div className="lg:col-span-2 flex flex-col space-y-12 pr-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-white/10 pb-12 lg:pb-0">
            <div>
              <h3 className="font-serif uppercase tracking-[2px] text-xl mb-6 text-white flex items-center">Dispatch Headquarters</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">Boronia, Victoria<br/>Australia<br/><br/>(Visits strictly by private appointment only. Security protocols in effect.)</p>
            </div>
            <div>
              <h3 className="font-serif uppercase tracking-[2px] text-xl mb-6 text-white flex items-center">Electronic Mail</h3>
              <p className="text-gray-400 font-light text-sm"><a href="mailto:info.hywatches@gmail.com" className="hover:text-[#c5a059]">info.hywatches@gmail.com</a></p>
            </div>
            <div>
              <h3 className="font-serif uppercase tracking-[2px] text-xl mb-6 text-white flex items-center">Encrypted Network</h3>
              <p className="text-gray-400 font-light text-sm">WhatsApp / Telegram<br/><span className="text-[#c5a059]">+61 000 000 000</span></p>
            </div>
          </div>
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-[#111] border border-[#c5a059]/30">
                <ShieldCheck size={64} className="text-[#c5a059] mb-6" />
                <h3 className="font-serif text-2xl uppercase tracking-[2px] mb-4">Transmission Secured</h3>
                <p className="text-gray-400 font-light text-sm">A senior broker will review your mandate and establish contact within 12 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">Designation</label>
                    <input required type="text" className="bg-transparent border-b border-white/20 pb-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors" placeholder="Full Name" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})}/>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">Return Address</label>
                    <input required type="email" className="bg-transparent border-b border-white/20 pb-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors" placeholder="Email Address" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})}/>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">Acquisition Subject</label>
                  <select required className="bg-black border-b border-white/20 pb-3 text-sm text-gray-400 focus:outline-none focus:border-[#c5a059] transition-colors appearance-none" value={formData.subject} onChange={e=>setFormData({...formData, subject: e.target.value})}>
                    <option value="" disabled>Select Inquiry Type</option>
                    <option value="purchase">Acquire a Timepiece</option>
                    <option value="sell">Sell/Trade a Timepiece</option>
                    <option value="custom">Bespoke Customization</option>
                    <option value="support">Logistics/Support</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">Mandate Details</label>
                  <textarea required rows={5} className="bg-transparent border-b border-white/20 pb-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors resize-none" placeholder="Provide reference numbers, budget parameters, or specific requirements..." value={formData.message} onChange={e=>setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn-gold self-start mt-4"><span className="relative z-10 flex items-center">TRANSMIT DIRECTIVE <ArrowRight size={16} className="ml-3"/></span></button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-20 border border-white/5 p-8 bg-[#0a0a0a] flex items-start reveal-target">
          <Shield size={24} className="text-[#c5a059] mr-6 flex-shrink-0 mt-1"/>
          <div>
            <h4 className="font-serif uppercase tracking-[2px] text-sm mb-2 text-white">Security Notice</h4>
            <p className="text-xs text-gray-400 leading-[1.8] font-light max-w-[800px]">All communications regarding financial wire instructions are sent exclusively via our encrypted domains. HY Watches will never request payment via unsecured social media channels or text messages. Authenticate all routing parameters telephonically before initiating capital transfers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
