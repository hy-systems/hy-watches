import React, { useState, useEffect, createContext, useContext, ReactNode, useRef } from 'react';
import { 
  Search, Globe, ShoppingBag, Menu, ChevronLeft, ChevronRight, 
  Star, Play, Package, CreditCard, ShieldCheck, X, Instagram, 
  Facebook, ArrowRight, ArrowUpRight, Watch, Clock, Shield,
  Mail, MapPin, Phone, CheckCircle, AlertCircle, Filter, SlidersHorizontal,
  MessageCircle
} from 'lucide-react';

const WATCH_DATABASE = [
  { id: 'RM-01', brand: 'Richard Mille', model: 'RM67-02 Black Carbon TPT "BLUE TIFFANY"', price: 4600, category: 'Carbon', description: 'Engineered for optimal performance on the wrist of elite athletes. The RM 67-02 weighs a mere 32 grams, utilizing TPT composite materials and a grade 5 titanium baseplate. The blue Tiffany accents provide a striking contrast against the dark carbon matrix.', specs: { material: 'Carbon TPT', movement: 'Automatic CRMA7', reserve: '50 Hours', waterResist: '30m', diameter: '38.7mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png', images: ['https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png', 'https://lucytimepieces.com/wp-content/uploads/2026/07/14-247x247.png'], tag: 'LIMITED' },
  { id: 'RM-02', brand: 'Richard Mille', model: 'RM67-02 Full Black Carbon TPT NEW 2026', price: 4600, category: 'Carbon', description: 'A stealth interpretation of the ultimate sports watch. The full black carbon construction absorbs light while showcasing the unique damascene patterns inherent to the TPT manufacturing process.', specs: { material: 'Carbon TPT', movement: 'Automatic CRMA7', reserve: '50 Hours', waterResist: '30m', diameter: '38.7mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/07/z8006286682919_f8b17d8de483fd6eea96a18109486c17-247x247.jpg', images: ['https://lucytimepieces.com/wp-content/uploads/2026/07/13-247x247.png', 'https://lucytimepieces.com/wp-content/uploads/2026/07/z8006286682919_f8b17d8de483fd6eea96a18109486c17-247x247.jpg'], tag: 'NEW' },
  { id: 'RM-03', brand: 'Richard Mille', model: 'RM67-01 Extra-Flat Titanium Handcrafted', price: 3600, category: 'Titanium', description: 'The RM 67-01 continues the legacy of the extra-flat watch, an exercise in extreme minimalism without sacrificing the characteristic Richard Mille tonneau shape.', specs: { material: 'Grade 5 Titanium', movement: 'Automatic CRMA6', reserve: '50 Hours', waterResist: '30m', diameter: '38.7mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-247x247.webp', images: ['https://lucytimepieces.com/wp-content/uploads/2026/06/richard-mille-titanium-rm-67-01-richard-mille-40267223892212-247x247.webp', 'https://lucytimepieces.com/wp-content/uploads/2026/06/z7906650067246_19d6570c08bbd3dbe99f9dd1c5ebe25a-247x247.webp'], tag: 'HOT' },
  { id: 'PP-01', brand: 'Patek Philippe', model: 'Nautilus 5711/1A Green 40mm Custom', price: 5600, category: 'Steel', description: 'The definitive luxury sports watch, reinvented with a highly sought-after olive green sunburst dial. The integrated stainless steel bracelet and porthole case design represent the peak of 1970s Gerald Genta design.', specs: { material: 'Stainless Steel', movement: 'Automatic 26-330 S C', reserve: '45 Hours', waterResist: '120m', diameter: '40mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-247x247.png', images: ['https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-49-247x247.png', 'https://lucytimepieces.com/wp-content/uploads/2026/05/z7832313171371_7d87d006d198f4ebf69985070e6c4af7-247x247.webp'], tag: 'EXCLUSIVE' },
  { id: 'RX-01', brand: 'Rolex', model: 'Day-Date 228239-0076 VIP Version', price: 920, category: 'White Gold', description: 'The ultimate watch of prestige. Cast in 18kt white gold, this Day-Date features a mesmerizing blue ombre dial that transitions from bright center to dark edges.', specs: { material: '18kt White Gold', movement: 'Automatic 3255', reserve: '70 Hours', waterResist: '100m', diameter: '40mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Dong-ho-nam-Rolex-Day-Date-Rep-11-mat-xanh-ombre-nang-212-gram-bo-may-calibre-3255-xuong-RC-40mm-1-600x600-1-247x247.jpg', images: ['https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-14-247x247.png', 'https://lucytimepieces.com/wp-content/uploads/2026/05/Dong-ho-nam-Rolex-Day-Date-Rep-11-mat-xanh-ombre-nang-212-gram-bo-may-calibre-3255-xuong-RC-40mm-1-600x600-1-247x247.jpg'], tag: 'RESTOCKED' },
  { id: 'RX-02', brand: 'Rolex', model: 'Datejust 36 M126234-0057 VIP Version', price: 820, category: 'Steel & Gold', description: 'A timeless classic in a versatile 36mm case. Combining Oystersteel and 18kt white gold, this Datejust features the signature fluted bezel and a comfortable Jubilee bracelet.', specs: { material: 'Oystersteel & White Gold', movement: 'Automatic 3235', reserve: '70 Hours', waterResist: '100m', diameter: '36mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png', images: ['https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png', 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-10-247x247.png'], tag: 'CLASSIC' },
  { id: 'RX-03', brand: 'Rolex', model: 'Datejust 126233-0017 VIP Version', price: 820, category: 'Two-Tone', description: 'The quintessential Rolex aesthetic. Yellow Rolesor pairs the strength of Oystersteel with the luxury of 18kt yellow gold. The champagne dial and fluted bezel create a warm presence.', specs: { material: 'Yellow Rolesor', movement: 'Automatic 3235', reserve: '70 Hours', waterResist: '100m', diameter: '36mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-9-247x247.png', images: ['https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-9-247x247.png', 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-1-9-247x247.png'], tag: 'POPULAR' },
  { id: 'RX-04', brand: 'Rolex', model: 'Datejust 126334-0010 Green Ombre New 2026', price: 720, category: 'Steel', description: 'A modern interpretation of the Datejust in a larger 41mm format. The dial features a captivating green ombre finish, transitioning to deep black at the periphery.', specs: { material: 'Oystersteel & White Gold', movement: 'Automatic 3235', reserve: '70 Hours', waterResist: '100m', diameter: '41mm' }, image: 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-2-247x247.png', images: ['https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-2-247x247.png', 'https://lucytimepieces.com/wp-content/uploads/2026/05/Thiet-ke-chua-co-ten-2-247x247.png'], tag: 'TRENDING' },
];

const popularCollections = [
  { id: 1, title: 'LUCY PICKS', subtitle: 'HY EXCLUSIVE', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-yacht-master-42-226627-rlx-titanium-black-dial-2024-rolex-1193996764.jpg', desc: 'Curated selection of our most coveted and precisely engineered timepieces.' },
  { id: 2, title: 'DAYTONA', subtitle: 'MOTORSPORT', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-daytona-116500ln-stainless-steel-white-panda-dial-2018-rolex-1212087379.jpg', desc: 'Born to race. The ultimate tool watch for those with a passion for driving.' },
  { id: 3, title: 'GMT-MASTER II', subtitle: 'AVIATION', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126710blnr-batgirl-stainless-steel-black-dial-jubilee-2021-rolex-1206409323.jpg', desc: 'Cross time zones with unparalleled precision and unmistakable aesthetic.' },
  { id: 4, title: 'DATEJUST', subtitle: 'CLASSIC', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-datejust-41-126334-stainless-steel-blue-diamond-dial-jubilee-2021-rolex-1197074364.jpg', desc: 'The archetype of the classic watch. Timeless elegance and functionality.' }
];

const collectionGrid = [
  { colSpan: 'md:col-span-2 md:row-span-2', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/richard-mille-rm-67-02-sebastien-ogier-carbon-tpt-2024-richard-mille-43740914483444.jpg', title: 'RICHARD MILLE', subtitle: 'THE RACING MACHINE' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/rolex-gmt-master-ii-126711chnr-root-beer-stainless-steel-rose-gold-black-dial-2021-rolex-1221882571.jpg', title: 'ROLEX', subtitle: 'THE CROWN' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/4b821a59ae889469621bc9a95aa24e66.jpg', title: 'HUBLOT', subtitle: 'THE ART OF FUSION' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/patek-philippe-nautilus-5711-1a-010-tiffany-co-stainless-steel-blue-dial-2018-patek-philippe-1202180049.jpg', title: 'PATEK PHILIPPE', subtitle: 'GENEVA TRADITION' },
  { colSpan: 'md:col-span-1 md:row-span-1', img: 'https://lucytimepieces.com/wp-content/uploads/2026/03/audemars-piguet-royal-oak-selfwinding-15510st-oo-1320st-09-stainless-steel-green-dial-2025-audemars-piguet-1195982415.jpg', title: 'AUDEMARS PIGUET', subtitle: 'LE BRASSUS' }
];

const socialMediaVideos = [
  { type: 'TIKTOK', icon: <Play size={16} strokeWidth={2.5} />, videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-adjusting-his-wristwatch-4245-large.mp4', link: '#' },
  { type: 'INSTAGRAM', icon: <Instagram size={16} strokeWidth={2.5} />, videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-luxury-watch-on-a-mans-wrist-4246-large.mp4', link: '#' },
  { type: 'FACEBOOK', icon: <Facebook size={16} strokeWidth={2.5} />, videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-man-putting-on-a-luxury-watch-4244-large.mp4', link: '#' }
];

interface CartItem {
  id: string;
  brand: string;
  model: string;
  price: number;
  image: string;
  images?: string[];
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
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
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
    if (typeof window === 'undefined') return;
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

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        dotRef.current.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
      }
    };

    const handleHover = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('scale-150', 'bg-[#c5a059]/10', 'border-[#c5a059]');
        cursorRef.current.classList.remove('border-white/30');
      }
    };

    const handleLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('scale-150', 'bg-[#c5a059]/10', 'border-[#c5a059]');
        cursorRef.current.classList.add('border-white/30');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none z-[9999]">
      <div ref={cursorRef} className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 mix-blend-difference transition-all duration-300 ease-out will-change-transform"></div>
      <div ref={dotRef} className="fixed top-0 left-0 w-1 h-1 bg-[#c5a059] rounded-full mix-blend-difference will-change-transform"></div>
    </div>
  );
}

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
                  <img src={item.image || (item.images && item.images[0])} alt={item.model} className="w-20 h-20 object-contain bg-[#111]" />
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
              <li><a className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('WARRANTY')}>Warranty</a></li>
              <li><a className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('TERMS')}>Terms of Service</a></li>
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

export function ProductModal({ product, isOpen, onClose }: { product: any, isOpen: boolean, onClose: () => void }) {
  const { addToCart } = useAppContext();
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      setActiveImage(0);
    } else if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
    return () => { if (typeof document !== 'undefined') document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-[fadeIn_0.3s_ease-out]" onClick={onClose}></div>
      <div className="relative w-full max-w-[1200px] max-h-[90vh] bg-[#050505] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row overflow-hidden animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        <button onClick={onClose} className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md">
          <X size={20} />
        </button>
        <div className="w-full md:w-1/2 bg-[#0a0a0a] relative flex flex-col border-r border-white/5">
          <div className="absolute top-6 left-6 z-10 flex gap-2">
            <span className="bg-[#c5a059] text-black text-[10px] font-bold px-3 py-1.5 uppercase tracking-[2px] shadow-lg">{product.tag}</span>
            <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold px-3 py-1.5 uppercase tracking-[2px]">In Stock</span>
          </div>
          <div className="relative flex-grow flex items-center justify-center p-12 cursor-crosshair overflow-hidden group" onMouseEnter={() => setIsZoomed(true)} onMouseLeave={() => setIsZoomed(false)} onMouseMove={handleMouseMove}>
            <img src={(product.images && product.images[activeImage]) || product.image} alt={product.model} className={`w-full h-full object-contain transition-transform duration-300 ${isZoomed ? 'opacity-0' : 'opacity-100'}`} />
            {isZoomed && (
              <div className="absolute inset-0 bg-no-repeat transition-opacity duration-300 opacity-100 z-20" style={{ backgroundImage: `url(${(product.images && product.images[activeImage]) || product.image})`, backgroundPosition: `${mousePos.x}% ${mousePos.y}%`, backgroundSize: '250%' }} />
            )}
          </div>
          <div className="flex p-6 gap-4 border-t border-white/5 bg-[#050505] overflow-x-auto">
            {(product.images || [product.image]).map((img: string, idx: number) => (
              <button key={idx} onClick={() => setActiveImage(idx)} className={`w-20 h-20 flex-shrink-0 border bg-[#111] transition-all p-2 ${activeImage === idx ? 'border-[#c5a059]' : 'border-white/10 hover:border-white/30'}`}>
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col bg-[#050505] overflow-y-auto">
          <div className="p-8 md:p-12">
            <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif mb-3 block">{product.brand}</span>
            <h2 className="text-2xl md:text-3xl font-mono font-light text-white mb-6 leading-tight">{product.model}</h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-3xl font-bold text-white tracking-wide">${product.price},000</span>
              <div className="h-6 w-[1px] bg-white/20"></div>
              <div className="flex items-center text-[#c5a059]">{[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-current" />)}</div>
            </div>
            <p className="text-gray-400 font-light text-sm leading-[1.8] mb-10 pb-10 border-b border-white/10">{product.description}</p>
            <h3 className="font-serif uppercase tracking-[2px] text-xs font-bold text-white mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12">
              <div className="flex flex-col border-l-2 border-[#c5a059] pl-4">
                <span className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-1">Material</span><span className="text-sm text-gray-200 font-light">{product.specs?.material}</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#c5a059] pl-4">
                <span className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-1">Caliber</span><span className="text-sm text-gray-200 font-light">{product.specs?.movement}</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#c5a059] pl-4">
                <span className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-1">Dimensions</span><span className="text-sm text-gray-200 font-light">{product.specs?.diameter}</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#c5a059] pl-4">
                <span className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-1">Resistance</span><span className="text-sm text-gray-200 font-light">{product.specs?.waterResist}</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <button className="w-full bg-[#c5a059] text-black font-bold uppercase tracking-[3px] text-sm py-5 hover:bg-white transition-colors flex items-center justify-center group" onClick={() => { addToCart(product); onClose(); }}>
                Acquire Asset <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SecureCheckout({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { cartItems, cartTotal, setCartOpen } = useAppContext();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    if (isOpen && typeof document !== 'undefined') document.body.style.overflow = 'hidden';
    else if (typeof document !== 'undefined') document.body.style.overflow = 'unset';
    return () => { if (typeof document !== 'undefined') document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 3000);
  };

  const closeAndReset = () => {
    setStep(1);
    setOrderComplete(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity animate-[fadeIn_0.3s_ease-out]"></div>
      <div className="relative w-full max-w-[1000px] h-[100dvh] md:h-[85vh] bg-[#050505] md:border border-white/10 md:shadow-2xl flex flex-col animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/10 bg-[#0a0a0a]">
          <span className="font-serif uppercase tracking-[4px] text-lg font-bold text-white flex items-center">
            <ShieldCheck size={20} className="text-[#c5a059] mr-3" /> Secure Gateway
          </span>
          {!isProcessing && !orderComplete && <button onClick={closeAndReset} className="text-gray-400 hover:text-white transition-colors"><X size={24} /></button>}
        </div>
        {orderComplete ? (
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-blend-overlay">
            <div className="w-24 h-24 rounded-full border-2 border-[#c5a059] flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 border-2 border-[#c5a059] rounded-full animate-ping opacity-50"></div>
              <CheckCircle size={40} className="text-[#c5a059]" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-[4px] mb-4 text-white font-bold">Acquisition Secured</h2>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-[500px] mb-12 leading-relaxed">Your mandate has been successfully logged. An acquisition specialist will contact your registered coordinates within 2 hours to finalize logistics.</p>
            <button className="btn-gold" onClick={() => { closeAndReset(); setCartOpen(false); }}><span className="relative z-10 text-xs">RETURN TO INVENTORY</span></button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
            <div className="w-full md:w-3/5 p-6 md:p-12 overflow-y-auto">
              <div className="flex items-center justify-between mb-12 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/10 z-0"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#c5a059] z-0 transition-all duration-500" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors duration-300 ${step >= num ? 'bg-[#c5a059] text-black border-[#c5a059]' : 'bg-[#111] text-gray-500 border border-white/20'}`}>{num}</div>
                ))}
              </div>
              {step === 1 && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <h3 className="font-serif uppercase tracking-[2px] text-xl text-white mb-8 border-l-4 border-[#c5a059] pl-4">1. Client Identification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <input type="text" placeholder="First Legal Name" className="bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors w-full" />
                    <input type="text" placeholder="Last Legal Name" className="bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors w-full" />
                  </div>
                  <input type="email" placeholder="Secure Email Address" className="bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors w-full mb-6" />
                  <input type="tel" placeholder="Mobile Coordinate (WhatsApp Active)" className="bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors w-full mb-10" />
                  <button className="btn-gold w-full" onClick={() => setStep(2)}><span className="relative z-10 text-xs">PROCEED TO LOGISTICS</span></button>
                </div>
              )}
              {step === 2 && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <h3 className="font-serif uppercase tracking-[2px] text-xl text-white mb-8 border-l-4 border-[#c5a059] pl-4">2. Secure Logistics</h3>
                  <input type="text" placeholder="Primary Address Line" className="bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors w-full mb-6" />
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <input type="text" placeholder="City / Municipality" className="bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors w-full" />
                    <input type="text" placeholder="State / Province" className="bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors w-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <input type="text" placeholder="Postal Code" className="bg-[#111] border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors w-full" />
                    <select className="bg-[#111] border border-white/10 p-4 text-sm text-gray-400 focus:outline-none focus:border-[#c5a059] transition-colors w-full appearance-none">
                      <option>Australia</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>United Arab Emirates</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <button className="w-1/3 border border-white/20 text-white hover:bg-white/5 uppercase tracking-[2px] text-xs font-bold transition-colors" onClick={() => setStep(1)}>Back</button>
                    <button className="btn-gold w-2/3" onClick={() => setStep(3)}><span className="relative z-10 text-xs">PROCEED TO CAPITAL</span></button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <h3 className="font-serif uppercase tracking-[2px] text-xl text-white mb-8 border-l-4 border-[#c5a059] pl-4">3. Capital Transfer</h3>
                  <div className="space-y-4 mb-10">
                    <label className="flex items-center p-4 border border-[#c5a059] bg-[#c5a059]/10 cursor-pointer">
                      <div className="w-4 h-4 rounded-full border border-[#c5a059] flex items-center justify-center mr-4"><div className="w-2 h-2 bg-[#c5a059] rounded-full"></div></div>
                      <span className="font-serif uppercase tracking-[2px] text-sm text-white flex-grow">Bank Wire Transfer</span>
                      <span className="text-[10px] text-[#c5a059] tracking-[1px] uppercase font-bold">-0% Fee</span>
                    </label>
                  </div>
                  <div className="flex gap-4">
                    <button className="w-1/3 border border-white/20 text-white hover:bg-white/5 uppercase tracking-[2px] text-xs font-bold transition-colors" onClick={() => setStep(2)} disabled={isProcessing}>Back</button>
                    <button className="btn-gold w-2/3" onClick={handleProcess} disabled={isProcessing}><span className="relative z-10 flex items-center text-xs">{isProcessing ? 'ESTABLISHING LINK...' : 'INITIATE PROTOCOL'}</span></button>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full md:w-2/5 bg-[#0a0a0a] border-l border-white/5 flex flex-col p-6 md:p-12">
              <h3 className="font-serif uppercase tracking-[2px] text-sm text-gray-500 mb-8 font-bold">Acquisition Ledger</h3>
              <div className="flex-grow overflow-y-auto space-y-6 mb-8 pr-2">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-[#111] border border-white/5 flex-shrink-0 flex items-center justify-center p-2"><img src={item.image || (item.images && item.images[0])} className="w-full h-full object-contain" alt="" /></div>
                    <div>
                      <p className="text-[9px] text-[#c5a059] tracking-[2px] uppercase font-serif mb-1">{item.brand}</p>
                      <p className="text-xs font-mono text-gray-300 line-clamp-2 leading-snug mb-2">{item.model}</p>
                      <p className="font-bold text-sm text-white">${item.price},000</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex justify-between text-xs text-gray-400 uppercase tracking-[1px]"><span>Subtotal</span><span>${cartTotal},000</span></div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center mt-4">
                  <span className="font-serif uppercase tracking-[2px] text-sm text-white">Total Commitment</span>
                  <span className="font-serif text-2xl font-bold text-white">${cartTotal},000</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function HomePage() {
  const { navigate } = useAppContext();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeCollectionSlide, setActiveCollectionSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  useScrollReveal();
  useParallax();

  useEffect(() => {
    videoRefs.current.forEach(video => { if (video) video.play().catch(() => {}); });
    const updateView = () => setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    if (typeof window !== 'undefined') {
      updateView();
      window.addEventListener('resize', updateView);
      return () => window.removeEventListener('resize', updateView);
    }
  }, []);

  const nextCollectionSlide = () => setActiveCollectionSlide((prev) => (prev + 1) % popularCollections.length);
  const prevCollectionSlide = () => setActiveCollectionSlide((prev) => (prev - 1 + popularCollections.length) % popularCollections.length);

  return (
    <div className="w-full flex flex-col">
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
            <button onClick={() => navigate('SHOP')} className="btn-gold group"><span className="relative z-10 flex items-center">EXPLORE THE VAULT <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-1 transition-transform" /></span></button>
          </div>
        </div>
      </div>
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
            <div className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: `translateX(-${activeCollectionSlide * (100 / itemsPerView)}%)` }}>
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
        </div>
      </section>
      <section className="relative w-full py-32 bg-[#030303] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal-target">
            <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif block mb-4">Latest Arrivals</span>
            <h3 className="font-serif uppercase text-4xl md:text-5xl text-white font-bold tracking-[2px]">RECENT ACQUISITIONS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WATCH_DATABASE.slice(0, 4).map((product, index) => (
              <div key={product.id} className={`group cursor-pointer flex flex-col bg-transparent p-4 transition-all duration-500 reveal-target delay-${(index % 4) * 100}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a] mb-6 rounded-sm border border-white/5 group-hover:border-white/20 transition-colors">
                  <img src={product.image} className="absolute inset-0 w-full h-full object-contain p-8 transition-all duration-700 opacity-100 group-hover:opacity-0 group-hover:scale-110 ease-out" alt={product.title} />
                  <img src={product.images?.[1] || product.image} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 scale-100 group-hover:scale-105 ease-out" alt={`${product.title} alt`} />
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-20"><span className="bg-white text-black text-[9px] font-bold px-3 py-1.5 uppercase tracking-[2px]">{product.tag}</span></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-sm" onClick={() => { const event = new CustomEvent('openProductModal', { detail: product }); window.dispatchEvent(event); }}>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center">
                      <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white mb-3 hover:bg-white hover:text-black transition-colors"><Search size={16} /></span>
                      <span className="font-serif text-xs uppercase tracking-[2px] text-white font-medium">Quick View</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow text-center px-2">
                  <span className="font-serif text-[10px] text-gray-500 uppercase tracking-[2px] mb-2 block">{product.specs.material}</span>
                  <h4 className="font-mono text-[13px] leading-[1.6] text-gray-300 transition-colors duration-300 group-hover:text-white line-clamp-2 mb-4 font-light">{product.model}</h4>
                  <p className="font-serif text-xl font-bold text-white mt-auto tracking-wide border-t border-white/10 pt-4">${product.price},000</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-20 reveal-target delay-200">
            <button onClick={() => navigate('SHOP')} className="btn-gold group"><span className="relative z-10 flex items-center">VIEW FULL INVENTORY <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-1 transition-transform" /></span></button>
          </div>
        </div>
      </section>
      <section className="relative w-full py-32 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-target">
            <div className="max-w-[600px]">
              <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif block mb-4">Brand Portfolio</span>
              <h3 className="font-serif uppercase text-4xl md:text-5xl text-white font-bold tracking-[2px] mb-6">MANUFACTURES</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px] reveal-target delay-200">
            {collectionGrid.map((item, idx) => (
              <div key={idx} className={`relative overflow-hidden group cursor-pointer bg-[#050505] ${item.colSpan} min-h-[350px] md:min-h-[auto]`}>
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[3s] ease-out group-hover:scale-110 group-hover:opacity-80" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-60"></div>
                <div className="absolute bottom-10 left-10 right-10 z-10 flex flex-col items-start transform transition-transform duration-500">
                  <span className="text-[#c5a059] text-[10px] md:text-[11px] tracking-[3px] uppercase mb-2 font-sans font-bold">{item.subtitle}</span>
                  <h2 className="font-serif text-white uppercase text-2xl md:text-3xl font-bold tracking-[3px] leading-tight">{item.title}</h2>
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
  useScrollReveal();

  return (
    <div className="w-full flex flex-col pt-[120px] bg-[#030303] min-h-screen">
      <div className="max-w-[1600px] mx-auto w-full px-6 py-12 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-[280px] flex-shrink-0 border-r border-white/5 pr-8 reveal-target">
          <h2 className="font-serif uppercase text-2xl tracking-[2px] mb-8 pb-4 border-b border-white/10 flex items-center"><SlidersHorizontal size={18} className="mr-3 text-[#c5a059]"/> INVENTORY</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-[2px] text-gray-500 mb-4 font-bold">Manufacture</h3>
              <ul className="space-y-3">
                {brands.map(b => (
                  <li key={b}><button onClick={() => setFilter(b)} className={`text-[13px] uppercase tracking-[1px] font-light transition-colors flex items-center ${filter === b ? 'text-[#c5a059]' : 'text-gray-400 hover:text-white'}`}><span className={`w-1.5 h-1.5 rounded-full mr-3 ${filter === b ? 'bg-[#c5a059]' : 'bg-transparent border border-gray-600'}`}></span>{b}</button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-8 reveal-target">
            <p className="text-sm text-gray-400 font-light uppercase tracking-[2px]">Displaying {filteredWatches.length} Assets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredWatches.map((watch, i) => (
              <div key={watch.id} className={`bg-[#0a0a0a] border border-white/5 p-5 group flex flex-col h-full reveal-target delay-${(i % 3) * 100}`}>
                <div className="relative aspect-square bg-[#111] mb-6 overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => { const event = new CustomEvent('openProductModal', { detail: watch }); window.dispatchEvent(event); }}>
                  <img src={watch.image} className="w-[80%] h-[80%] object-contain transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3"><span className="bg-white text-black text-[9px] font-bold px-2 py-1 uppercase tracking-[2px]">{watch.tag}</span></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"><Search size={16} /></span></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2"><span className="text-[#c5a059] text-[10px] tracking-[2px] uppercase font-serif">{watch.brand}</span><span className="text-gray-500 text-[10px] tracking-[1px] uppercase border border-gray-700 px-1">{watch.specs.diameter}</span></div>
                  <h4 className="text-[13px] font-mono font-light text-gray-200 mb-3 line-clamp-2 leading-relaxed">{watch.model}</h4>
                  <p className="text-[11px] text-gray-500 font-light mb-6 line-clamp-3">{watch.description}</p>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center border-t border-white/10 pt-4 mb-4"><span className="font-serif font-bold text-xl text-white">${watch.price},000</span></div>
                    <button className="w-full border border-[#c5a059] text-[#c5a059] py-3 text-xs uppercase tracking-[2px] font-bold hover:bg-[#c5a059] hover:text-black transition-all" onClick={() => addToCart(watch)}>Acquire Asset</button>
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
  useScrollReveal();

  return (
    <div className="w-full pt-[120px] bg-[#030303] text-white min-h-screen pb-32">
      <div className="max-w-[1000px] mx-auto px-6 pt-20 text-center reveal-target">
        <span className="text-[#c5a059] text-[11px] tracking-[4px] uppercase font-serif block mb-6">Our Legacy</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold uppercase tracking-[4px] mb-12">The Zenith of<br/>Horology</h1>
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#c5a059] to-transparent mx-auto mb-12"></div>
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
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  useScrollReveal();

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
            <div><h3 className="font-serif uppercase tracking-[2px] text-xl mb-6 text-white">Dispatch Headquarters</h3><p className="text-gray-400 font-light leading-relaxed text-sm">Boronia, Victoria<br/>Australia<br/></p></div>
            <div><h3 className="font-serif uppercase tracking-[2px] text-xl mb-6 text-white">Electronic Mail</h3><p className="text-gray-400 font-light text-sm"><a href="mailto:info.hywatches@gmail.com" className="hover:text-[#c5a059]">info.hywatches@gmail.com</a></p></div>
            <div><h3 className="font-serif uppercase tracking-[2px] text-xl mb-6 text-white">Encrypted Network</h3><p className="text-gray-400 font-light text-sm">WhatsApp / Telegram<br/><span className="text-[#c5a059]">+61 000 000 000</span></p></div>
          </div>
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-[#111] border border-[#c5a059]/30">
                <ShieldCheck size={64} className="text-[#c5a059] mb-6" />
                <h3 className="font-serif text-2xl uppercase tracking-[2px] mb-4">Transmission Secured</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col"><label className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">Designation</label><input required type="text" className="bg-transparent border-b border-white/20 pb-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})}/></div>
                  <div className="flex flex-col"><label className="text-[10px] uppercase tracking-[2px] text-gray-500 mb-2 font-bold">Return Address</label><input required type="email" className="bg-transparent border-b border-white/20 pb-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})}/></div>
                </div>
                <button type="submit" className="btn-gold self-start mt-4"><span className="relative z-10 flex items-center">TRANSMIT DIRECTIVE <ArrowRight size={16} className="ml-3"/></span></button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WarrantyPage() {
  useScrollReveal();
  return (
    <div className="w-full pt-[120px] bg-[#030303] text-white min-h-screen pb-32">
      <div className="max-w-[1000px] mx-auto px-6 py-20 text-center"><h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-[2px]">WARRANTY MATRIX</h1></div>
    </div>
  );
}

export function TermsPage() {
  useScrollReveal();
  return (
    <div className="w-full pt-[120px] bg-[#030303] text-white min-h-screen pb-32">
      <div className="max-w-[1000px] mx-auto px-6 py-20 text-center"><h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-[2px]">TERMS OF SERVICE</h1></div>
    </div>
  );
}

export function Layout() {
  const { currentRoute, isCartOpen, setCartOpen } = useAppContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [preloaderActive, setPreloaderActive] = useState(true);

  useEffect(() => {
    const handleOpenModal = (e: CustomEvent) => { setSelectedProduct(e.detail); setModalOpen(true); };
    if (typeof window !== 'undefined') window.addEventListener('openProductModal' as any, handleOpenModal as any);
    return () => { if (typeof window !== 'undefined') window.removeEventListener('openProductModal' as any, handleOpenModal as any); };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPreloaderActive(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderRoute = () => {
    switch (currentRoute) {
      case 'HOME': return <HomePage />;
      case 'SHOP': return <ShopPage />;
      case 'ABOUT': return <AboutPage />;
      case 'CONTACT': return <ContactPage />;
      case 'WARRANTY': return <WarrantyPage />;
      case 'TERMS': return <TermsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      <div className={`fixed inset-0 z-[9999] bg-[#030303] flex items-center justify-center transition-opacity duration-1000 ${preloaderActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center">
          <div className="w-[2px] h-12 bg-white/20 relative overflow-hidden mb-6"><div className="absolute top-0 left-0 w-full h-full bg-[#c5a059] animate-[slideDown_1.5s_ease-in-out_infinite]"></div></div>
          <span className="font-serif text-[#c5a059] tracking-[8px] text-sm uppercase">HY Watches</span>
        </div>
      </div>
      <Header />
      <MobileMenu />
      <CartDrawer />
      <ProductModal isOpen={modalOpen} product={selectedProduct} onClose={() => setModalOpen(false)} />
      <SecureCheckout isOpen={isCartOpen && currentRoute === 'CHECKOUT'} onClose={() => setCartOpen(false)} />
      <main className="flex-grow flex flex-col min-h-screen relative z-10">{renderRoute()}</main>
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
