import React, { useState, useEffect, useMemo } from 'react';
import { 
  Gamepad2, Menu, X, ChevronDown, Zap, ShieldCheck, Gem, Trophy, Users, ArrowRight, ArrowLeft,
  TrendingDown, SearchX, Lock, Route, Target, MessageSquareText, ListChecks, Facebook, Instagram,
  Linkedin, Twitter, ShoppingBag, CreditCard, UserCheck, Star, Check, Plus, Minus, HelpCircle,
  MousePointerClick, Smartphone, Gift, Filter, SlidersHorizontal, ArrowUpDown, Copy, Info
} from 'lucide-react';

// ==========================================
// *** DATA EDITING SECTION (အချက်အလက်များပြင်ရန်) ***
// ==========================================

// 1. Premium Accounts Data (Max 3 Cards)
const PREMIUM_ACCOUNTS_DATA = [
    {
        id: 1,
        title: "Roger Prime & M3",
        subtitle: "Mythic Glory 100+",
        description: "Includes Roger M3 Prime, 5 Collector Skins, and Max Emblems. Full access transfer available immediately.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60", 
        badges: ["Prime Skin", "Verified"],
        rank: "Mythic Glory",
        rarity: "Prime",
        price: 250000,
        formattedPrice: "250,000 Ks"
    },
    {
        id: 2,
        title: "World Collector",
        subtitle: "300+ Total Skins",
        description: "The ultimate collection. Includes 12 Collector skins, 5 Legend skins. Perfect for collectors.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=60",
        badges: ["Collector", "High End"],
        rank: "Mythical Immortal",
        rarity: "Collector",
        price: 550000,
        formattedPrice: "550,000 Ks"
    },
    {
        id: 3,
        title: "Ling All Skins",
        subtitle: "Serene Plume & Collector",
        description: "Specialized Assassin account. Ling Serene Plume, Night Shade, and M-World skins included.",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&auto=format&fit=crop&q=60",
        badges: ["Assassin Main", "Rare"],
        rank: "Honor",
        rarity: "Collector",
        price: 180000,
        formattedPrice: "180,000 Ks"
    }
];

// 2. Featured/Services Data (6 Cards)
const FEATURED_SERVICES_DATA = [
    {
        id: 1,
        title: "Smurf Account",
        desc: "High Win Rate, Low Rank",
        price: "15,000 Ks",
        image: "https://images.unsplash.com/photo-1611996991210-2e213b67272a?w=800&q=80",
        detail: "Fresh account with high win rate history. Perfect for practicing new heroes."
    },
    {
        id: 2,
        title: "Epic Skin Gift",
        desc: "Send skins to friends",
        price: "Various",
        image: "https://images.unsplash.com/photo-1593305841991-05c29736cec7?w=800&q=80",
        detail: "Gift any buyable skin to your friends. Fast process, no login required."
    },
    {
        id: 3,
        title: "Starlight Member",
        desc: "Premium monthly pass",
        price: "8,500 Ks",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
        detail: "Unlock exclusive skins, weekly rewards, and more benefits with Starlight Membership."
    },
    {
        id: 4,
        title: "Mythic Grading",
        desc: "Rank boosting service",
        price: "Negotiate",
        image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=800&q=80",
        detail: "Professional pilot service to boost your rank to Mythic quickly and safely."
    },
    {
        id: 5,
        title: "Tournament Acc",
        desc: "Full emblem unlocked",
        price: "80,000 Ks",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80",
        detail: "Ready-to-compete accounts with maxed emblems and essential meta heroes."
    },
    {
        id: 6,
        title: "Squad Creation",
        desc: "Verified Squad with Name",
        price: "20,000 Ks",
        image: "https://images.unsplash.com/photo-1614680376573-0526bd9501d7?w=800&q=80",
        detail: "Create your own verified squad with a custom name and logo verification."
    }
];

// ==========================================
// *** END OF DATA EDITING ***
// ==========================================

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-6 z-50 px-4">
      <div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-lg tracking-tight font-semibold text-white flex items-center gap-2 drop-shadow-md">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
            <Gamepad2 size={18} />
          </div>
          DRIVE X<span className="text-zinc-500">.STORE</span>
        </a>

        {/* Centered Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-2xl">
          <a href="#accounts" className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">Accounts</a>
          <a href="#diamonds" className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">Diamonds</a>
          <a href="#featured" className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</a>
          <a href="#about" className="px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
        </div>

        {/* CTA */}
        <a href="#topup-form" className="hidden md:flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/25 transition-all text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 border-orange-400/20 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-md">
          Order Now
        </a>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-300 p-2 bg-zinc-900/80 rounded-full backdrop-blur-md border border-white/10">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex flex-col gap-4 shadow-2xl z-50">
          <a href="#accounts" onClick={() => setIsOpen(false)} className="text-zinc-400">Accounts</a>
          <a href="#diamonds" onClick={() => setIsOpen(false)} className="text-zinc-400">Diamonds</a>
          <a href="#featured" onClick={() => setIsOpen(false)} className="text-zinc-400">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-zinc-400">About</a>
          <a href="#topup-form" onClick={() => setIsOpen(false)} className="text-white font-medium bg-orange-500/20 p-2 rounded text-center">Order Now</a>
        </div>
      )}
    </nav>
  );
};

// --- FeaturedCarousel Component ---
const FeaturedCarousel = ({ onSelectProduct }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=80",
            title: "Weekly Diamond Pass",
            subtitle: "Best Value Deal",
            desc: "Get 220 Diamonds + Rewards over 7 days. The smartest way to spend.",
            badge: "Hot Deal",
            price: "3,800 Ks",
            type: "diamond",
            stats: [
                { label: "Savings", value: "450%" },
                { label: "Daily", value: "20💎" }
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600&auto=format&fit=crop&q=80",
            title: "Mythic Glory Accounts",
            subtitle: "Instant Delivery",
            desc: "Start your journey at the top. Verified high-rank accounts ready for action.",
            badge: "Verified",
            price: "View List",
            type: "link",
            target: "#accounts",
            stats: [
                { label: "Security", value: "100%" },
                { label: "Stock", value: "Limited" }
            ]
        },
        {
            image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=1600&auto=format&fit=crop&q=80",
            title: "Collector Skins",
            subtitle: "Rare Collection",
            desc: "Own the battlefield with limited time Collector and Legend skins.",
            badge: "Exclusive",
            price: "Inquire",
            type: "link",
            target: "#accounts",
            stats: [
                { label: "Rarity", value: "SSR" },
                { label: "Visuals", value: "Max" }
            ]
        }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleAction = () => {
        const slide = slides[currentSlide];
        if (slide.type === 'diamond') {
            onSelectProduct && onSelectProduct({ name: slide.title, price: slide.price });
             const form = document.getElementById('topup-form');
             if(form) form.scrollIntoView({ behavior: 'smooth' });
        } else {
             const section = document.querySelector(slide.target);
             if(section) section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full h-[550px] rounded-3xl overflow-hidden bg-[#050505] border border-white/10 group shadow-2xl shadow-orange-900/10">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none z-10"></div>
            
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-500/5 blur-[120px] rounded-full pointer-events-none z-10"></div>

            {/* Slides */}
            {slides.map((slide, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}>
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                </div>
            ))}

            {/* Content Container */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6 rounded-full animate-in fade-in zoom-in duration-500">
                    <div className="w-1.5 h-1.5 animate-pulse bg-orange-500 rounded-full"></div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400">
                        {slides[currentSlide].badge}
                    </span>
                </div>

                {/* Text */}
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-2 tracking-tight drop-shadow-2xl transition-all duration-700">
                    {slides[currentSlide].title}
                </h2>
                <p className="text-lg md:text-xl text-orange-500 font-medium mb-6 uppercase tracking-widest transition-all duration-700 delay-100">
                    {slides[currentSlide].subtitle}
                </p>
                <p className="text-zinc-400 max-w-lg text-base md:text-lg mb-8 leading-relaxed transition-all duration-700 delay-200">
                     {slides[currentSlide].desc}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 transition-all duration-700 delay-300">
                     <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 bg-black/20 hover:bg-orange-500 hover:border-orange-500 transition-all text-white backdrop-blur-sm group/btn">
                        <ArrowLeft size={20} className="group-hover/btn:-translate-x-0.5 transition-transform"/>
                     </button>
                     <button onClick={handleAction} className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2">
                        {slides[currentSlide].type === 'diamond' ? 'Buy Now' : 'View More'} <ArrowRight size={16}/>
                     </button>
                     <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 bg-black/20 hover:bg-orange-500 hover:border-orange-500 transition-all text-white backdrop-blur-sm group/btn">
                        <ArrowRight size={20} className="group-hover/btn:translate-x-0.5 transition-transform"/>
                     </button>
                </div>
            </div>

            {/* Bottom Tech Specs Strip */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/60 backdrop-blur-md flex divide-x divide-white/5 z-30">
                <div className="flex-1 py-4 px-6 text-center hover:bg-white/5 transition-colors group cursor-pointer">
                    <div className="text-2xl font-light text-white group-hover:text-orange-500 transition-colors">{slides[currentSlide].stats[0].value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">{slides[currentSlide].stats[0].label}</div>
                </div>
                <div className="flex-1 py-4 px-6 text-center hover:bg-white/5 transition-colors group cursor-pointer">
                    <div className="text-2xl font-light text-white group-hover:text-orange-500 transition-colors">{slides[currentSlide].stats[1].value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">{slides[currentSlide].stats[1].label}</div>
                </div>
                <div className="flex-1 py-4 px-6 text-center hover:bg-white/5 transition-colors group cursor-pointer hidden sm:block">
                    <div className="text-2xl font-light text-white group-hover:text-orange-500 transition-colors">Instant</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">Process</div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {slides.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'w-2 bg-zinc-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Hero Component ---
const Hero = ({ onSelectProduct }) => {
  return (
    <section className="overflow-hidden pt-40 pb-20 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[140%] h-[600px] bg-gradient-to-t from-orange-600/20 via-orange-900/10 to-transparent rounded-[100%] blur-[80px]"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white/40 rounded-full"></div>
        <div className="absolute top-40 left-10 w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-pulse"></div>
      </div>

      <div className="flex flex-col z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium tracking-wide mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Instant Delivery Active
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-center leading-[1] mb-6 text-white drop-shadow-2xl">
            Unlock Premium <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">MLB Accounts</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed mb-10 max-w-2xl text-center">
            The #1 trusted store for purchasing high-rank Mobile Legends accounts, rare skins, and instant diamond top-ups.
        </p>

        {/* UPDATED: Buttons with Equal Width and Smooth Scroll Linking */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto justify-center">
            <a href="#diamonds" className="w-full sm:w-56 inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-950 text-base font-semibold rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Buy Diamonds
            </a>
            
            <a href="#accounts" className="w-full sm:w-56 group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 bg-gradient-to-br from-zinc-900 to-black rounded-full border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 active:scale-95 active:translate-y-0 overflow-hidden">
                <span className="relative flex items-center gap-2 z-10">
                    View Accounts
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 text-zinc-400 group-hover:text-white" />
                </span>
                {/* Subtle sheen effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"></div>
            </a>
        </div>

        {/* Featured Slider (Replaces 3D Card) */}
        <div className="w-full mt-4 mb-16">
            <FeaturedCarousel onSelectProduct={onSelectProduct} />
        </div>

        {/* Logos */}
        <div className="mt-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 flex flex-wrap justify-center gap-10 md:gap-16">
             <div className="flex items-center gap-2 text-xl font-bold font-sans text-zinc-300"><CreditCard size={24}/> VISA</div>
             <div className="flex items-center gap-2 text-xl font-bold font-sans text-zinc-300"><CreditCard size={24}/> MASTERCARD</div>
             <div className="flex items-center gap-2 text-xl font-bold font-sans text-zinc-300">KBZ PAY</div>
             <div className="flex items-center gap-2 text-xl font-bold font-sans text-zinc-300">WAVE PAY</div>
        </div>
      </div>
    </section>
  );
};

// --- PremiumAccounts Component ---
const PremiumAccounts = () => {
    // USE DATA FROM TOP OF FILE
    const allAccounts = PREMIUM_ACCOUNTS_DATA;

    const [selectedRank, setSelectedRank] = useState('All');
    const [selectedRarity, setSelectedRarity] = useState('All');
    const [sortBy, setSortBy] = useState('Featured');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredAccounts = useMemo(() => {
        let result = allAccounts.filter(acc => {
            const matchRank = selectedRank === 'All' || acc.rank === selectedRank;
            const matchRarity = selectedRarity === 'All' || acc.rarity === selectedRarity;
            const matchPrice = acc.price >= priceRange.min && acc.price <= priceRange.max;
            return matchRank && matchRarity && matchPrice;
        });

        if (sortBy === 'Price: Low to High') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [selectedRank, selectedRarity, sortBy, priceRange, allAccounts]);

    return (
        <section className="bg-[#09090b] pt-24 pb-24 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6">
                
                {/* --- SEPARATED FILTER SECTION --- */}
                {/* Visual separation with margin and distinct background area if needed */}
                <div className="mb-20">
                     <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-zinc-900/80 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
                        
                        <button 
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="lg:hidden flex items-center gap-2 text-white font-medium bg-zinc-800 px-4 py-2 rounded-lg w-full justify-center"
                        >
                            <Filter size={18} /> {isFilterOpen ? "Hide Filters" : "Show Filters"}
                        </button>

                        <div className={`w-full lg:flex lg:flex-row flex-col gap-6 lg:items-center ${isFilterOpen ? 'flex' : 'hidden'}`}>
                            
                            <div className="flex items-center gap-3 text-white font-bold text-lg border-r border-white/10 pr-6 mr-2 hidden lg:flex">
                                <Filter size={20} className="text-orange-500" />
                                Filters
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Rank</label>
                                <div className="relative">
                                    <select 
                                        value={selectedRank}
                                        onChange={(e) => setSelectedRank(e.target.value)}
                                        className="appearance-none bg-black text-white text-sm pl-4 pr-10 py-2.5 rounded-lg border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none w-full lg:w-40 cursor-pointer"
                                    >
                                        <option value="All">All Ranks</option>
                                        <option value="Mythical Immortal">Mythical Immortal</option>
                                        <option value="Mythic Glory">Mythic Glory</option>
                                        <option value="Honor">Honor</option>
                                        <option value="Mythic">Mythic</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-3 text-zinc-400 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Skin Rarity</label>
                                <div className="relative">
                                    <select 
                                        value={selectedRarity}
                                        onChange={(e) => setSelectedRarity(e.target.value)}
                                        className="appearance-none bg-black text-white text-sm pl-4 pr-10 py-2.5 rounded-lg border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none w-full lg:w-40 cursor-pointer"
                                    >
                                        <option value="All">All Rarities</option>
                                        <option value="Prime">Prime</option>
                                        <option value="Collector">Collector</option>
                                        <option value="Legend">Legend</option>
                                        <option value="KOF">KOF</option>
                                        <option value="Aspirant">Aspirant</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-3 text-zinc-400 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                                <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider flex items-center gap-1">
                                    Price Range <span className="text-zinc-600 font-normal normal-case">(Ks)</span>
                                </label>
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="number" 
                                        placeholder="Min"
                                        value={priceRange.min === 0 ? '' : priceRange.min}
                                        onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                                        className="bg-black text-white text-sm px-3 py-2.5 rounded-lg border border-white/10 w-full focus:border-orange-500 outline-none placeholder-zinc-600"
                                    />
                                    <span className="text-zinc-500">-</span>
                                    <input 
                                        type="number" 
                                        placeholder="Max"
                                        value={priceRange.max === 1000000 ? '' : priceRange.max}
                                        onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value) || 1000000})}
                                        className="bg-black text-white text-sm px-3 py-2.5 rounded-lg border border-white/10 w-full focus:border-orange-500 outline-none placeholder-zinc-600"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-1.5 lg:ml-auto">
                                <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Sort By</label>
                                <div className="relative">
                                    <select 
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="appearance-none bg-black text-white text-sm pl-9 pr-10 py-2.5 rounded-lg border border-white/10 focus:border-orange-500 outline-none w-full lg:w-48 cursor-pointer"
                                    >
                                        <option value="Featured">Featured</option>
                                        <option value="Price: Low to High">Price: Low to High</option>
                                        <option value="Price: High to Low">Price: High to Low</option>
                                    </select>
                                    <SlidersHorizontal size={14} className="absolute left-3 top-3 text-orange-500 pointer-events-none" />
                                    <ChevronDown size={14} className="absolute right-3 top-3 text-zinc-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-center max-w-3xl mr-auto mb-12 ml-auto items-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[11px] font-semibold uppercase tracking-wider mb-6">
                        Limited Stock
                    </span>
                    
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Premium Accounts
                    </h2>
                    
                    <p className="text-lg text-zinc-400">
                        Top tier accounts. Only 3 available.
                    </p>
                </div>

                {/* --- Grid Results --- */}
                {filteredAccounts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAccounts.map((acc, index) => (
                            <div key={acc.id} className="group relative transition hover:border-orange-500/50 text-zinc-200 bg-zinc-900/50 border-white/10 border shadow-sm flex flex-col h-full">
                                {/* Decorators - REMOVED overflow-hidden on parent, now these will show */}
                                <span className="border-orange-500 absolute -left-px -top-px block size-2 border-l-2 border-t-2 z-20"></span>
                                <span className="border-orange-500 absolute -right-px -top-px block size-2 border-r-2 border-t-2 z-20"></span>
                                <span className="border-orange-500 absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 z-20"></span>
                                <span className="border-orange-500 absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 z-20"></span>

                                {/* Card Header */}
                                <div className="pt-6 px-6 pb-6">
                                    <div className="flex justify-between items-start">
                                         <span className="text-zinc-400 flex items-center gap-2">
                                            <ShieldCheck size={16} className="text-orange-500"/>
                                            <span className="text-sm font-medium text-orange-500 uppercase tracking-widest">{acc.subtitle}</span>
                                        </span>
                                        <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold px-2 py-1 rounded">{acc.formattedPrice}</span>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white/95">{acc.title}</h3>
                                    <p className="mt-2 text-zinc-400 text-sm line-clamp-2">{acc.description}</p>
                                </div>

                                {/* Content */}
                                <div className="relative border-dashed border-white/10 border-t flex-grow flex flex-col">
                                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(255,255,255,0.06)_100%)]"></div>
                                    
                                    {/* Image Wrapper - Aspect Video */}
                                    <div className="p-6">
                                        <div className="aspect-video w-full overflow-hidden border border-white/10 bg-zinc-900/40 relative">
                                            <img src={acc.image} alt={acc.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                             {/* Badges Overlay */}
                                            <div className="absolute top-2 right-2 flex gap-1 flex-wrap justify-end">
                                                {acc.badges.map((badge, i) => (
                                                    <span key={i} className="text-[10px] font-bold bg-black/80 backdrop-blur text-white px-2 py-0.5 rounded border border-white/10 shadow-lg">
                                                        {badge}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button Area */}
                                     <div className="px-6 pb-6 mt-auto relative z-10">
                                        <button className="w-full py-3 bg-white text-black font-bold text-sm rounded hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-2">
                                            View Details <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-xl bg-zinc-900/30">
                        <SearchX size={48} className="text-zinc-600 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No accounts found</h3>
                        <p className="text-zinc-400 max-w-sm">Try adjusting your price range or filters to find what you're looking for.</p>
                        <button 
                            onClick={() => {
                                setSelectedRank('All'); 
                                setSelectedRarity('All'); 
                                setPriceRange({min: 0, max: 1000000});
                            }}
                            className="mt-6 text-orange-500 hover:text-orange-400 font-medium text-sm"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

// --- FeaturedAccounts Component (Previously Removed, Now Restored & Updated) ---
const FeaturedAccounts = ({ onSelectProduct }) => {
    // USE DATA FROM TOP OF FILE
    const products = FEATURED_SERVICES_DATA;

    return (
      <section id="featured" className="bg-[#0c0c0e] pt-24 pb-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="uppercase block text-xs font-bold text-orange-500 tracking-widest mb-3">Professional Services</span>
                  <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight font-serif mb-6">Premium Gallery</h2>
                  <p className="text-zinc-400 text-lg">Hover over cards to reveal service details.</p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {products.map((item) => (
                    <div 
                        key={item.id}
                        onClick={() => {
                            onSelectProduct && onSelectProduct({ name: item.title, price: item.price });
                            const form = document.getElementById('topup-form');
                            if(form) form.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="relative overflow-hidden cursor-pointer transition-all duration-[600ms] hover:rotate-[-5deg] hover:scale-110 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full aspect-[3/2] rounded-xl group border border-white/5"
                    >
                        {/* Card Image */}
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-all duration-[600ms] group-hover:scale-110 group-hover:opacity-30" 
                        />
                        
                        {/* Card Content Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full p-6 bg-white opacity-0 group-hover:opacity-100 transition-all duration-[600ms] flex flex-col justify-center items-center text-center">
                            <p className="text-2xl text-gray-900 m-0 font-bold mb-2">{item.title}</p>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed font-light mb-4">
                                {item.detail}
                            </p>
                            <div className="mt-4 border-t border-gray-100 pt-4 w-full">
                                <span className="text-xl font-bold text-orange-600 block">{item.price}</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest mt-1 block">{item.desc}</span>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
              <p className="text-sm text-zinc-500 mt-12 text-center font-light">Hover over items to explore our gaming catalogue</p>
          </div>
      </section>
    );
};

// --- AboutSection (Restored) ---
const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-[#09090b] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-[60px]"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80" 
                            alt="Gaming Setup" 
                            className="relative rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full"
                        />
                         <div className="absolute bottom-6 right-6 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl">
                            <div className="text-3xl font-bold text-white mb-1">5+</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wider">Years Experience</div>
                        </div>
                    </div>
                    <div>
                        <span className="uppercase text-xs font-bold text-orange-500 tracking-widest mb-3 block">About Drive X Store</span>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                            Myanmar's Trusted <br/> Gaming Marketplace
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <p>
                                Drive X Store သည် မြန်မာနိုင်ငံရှိ Mobile Legends ကစားသမားများအတွက် ယုံကြည်စိတ်ချရဆုံးသော ဝန်ဆောင်မှုများကို ပေးစွမ်းနေသော Store တစ်ခုဖြစ်ပါသည်။
                            </p>
                            <p>
                                ကျွန်ုပ်တို့ထံတွင် Official Diamond Top-up များ၊ Rank မြင့် Account များနှင့် Rare Skin များကို အာမခံချက်အပြည့်ဖြင့် ဝယ်ယူရရှိနိုင်ပါသည်။ လူကြီးမင်းတို့၏ စိတ်ကျေနပ်မှုသည် ကျွန်ုပ်တို့၏ ပထမဦးစားပေးဖြစ်ပါသည်။
                            </p>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold text-white">10K+</span>
                                <span className="text-xs text-zinc-500 uppercase">Happy Customers</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold text-white">24/7</span>
                                <span className="text-xs text-zinc-500 uppercase">Fast Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- HowItWorks (Restored) ---
const HowItWorks = () => {
    const steps = [
        {
            icon: MousePointerClick,
            title: "1. Select Item (ပစ္စည်းရွေးချယ်ပါ)",
            desc: "မိမိလိုချင်သော Diamond ပမာဏ သို့မဟုတ် Account ကို နှိပ်၍ Order Now ကို နှိပ်ပါ။"
        },
        {
            icon: CreditCard,
            title: "2. Confirm Order (အော်ဒါတင်ပါ)",
            desc: "Checkout Form တွင် မိမိအသုံးပြုမည့် ငွေပေးချေမှုစနစ် (KBZ/Wave) ကိုရွေးချယ်ပါ။"
        },
        {
            icon: Gift,
            title: "3. Receive Item (ရယူပါ)",
            desc: "ငွေလွှဲအတည်ပြုပြီးပါက Diamonds/Account ကို ချက်ချင်း ပို့ဆောင်ပေးပါမည်။"
        }
    ];

    return (
        <section className="bg-[#0c0c0e] border-white/5 border-t pt-24 pb-24 relative overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="uppercase block text-xs font-bold text-orange-500 tracking-widest mb-3">Easy Process</span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">How It Works</h2>
                    <p className="text-zinc-400 text-lg">Simple steps to get your items.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group p-8 rounded-3xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-500">
                             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/50">
                                <step.icon size={28} className="text-orange-500" />
                             </div>
                             <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                             <p className="text-zinc-400 leading-relaxed text-sm">
                                {step.desc}
                             </p>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

// --- Testimonials (Restored) ---
const Testimonials = () => {
    return (
      <section id="testimonials" className="py-24 bg-[#09090b] relative overflow-hidden border-t border-white/5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
  
          <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">Community Feedback</span>
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Trusted by Top Players</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 hover:border-orange-500/20 transition-all">
                      <div className="flex gap-1 mb-6">
                           {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-orange-500 fill-orange-500" />)}
                      </div>
                      <p className="text-zinc-300 mb-6 leading-relaxed">"Transaction speed is insane. Got my diamonds in less than 30 seconds. Highly recommended for event rushers!"</p>
                      <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">AK</div>
                          <div>
                              <div className="text-white font-medium text-sm">Aung Kyaw</div>
                              <div className="text-zinc-500 text-xs">Mythical Immortal</div>
                          </div>
                      </div>
                  </div>
  
                  <div className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 hover:border-orange-500/20 transition-all relative">
                      <div className="flex gap-1 mb-6 relative z-10">
                           {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-orange-500 fill-orange-500" />)}
                      </div>
                      <p className="text-zinc-300 mb-6 leading-relaxed relative z-10">"Bought a Smurf account to play with friends. The account was exactly as described, clean bind. 10/10 service."</p>
                      <div className="flex items-center gap-3 relative z-10">
                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">HP</div>
                          <div>
                              <div className="text-white font-medium text-sm">Htet Paing</div>
                              <div className="text-zinc-500 text-xs">Honor Rank</div>
                          </div>
                      </div>
                  </div>
  
                  <div className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 hover:border-orange-500/20 transition-all">
                      <div className="flex gap-1 mb-6">
                           {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-orange-500 fill-orange-500" />)}
                      </div>
                      <p className="text-zinc-300 mb-6 leading-relaxed">"Customer support is very friendly. I made a mistake with my Zone ID, but they fixed it for me manually. Best store!"</p>
                      <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">SM</div>
                          <div>
                              <div className="text-white font-medium text-sm">Su Myat</div>
                              <div className="text-zinc-500 text-xs">Weekly Pass Buyer</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  };

// --- DiamondTopUp Component ---
const DiamondTopUp = ({ selectedProduct }: { selectedProduct: {name: string, price: string} | null }) => {
    const [userId, setUserId] = useState('');
    const [zoneId, setZoneId] = useState('');
    const [selectedPack, setSelectedPack] = useState<number | null>(null);

    const packs = [
        { id: 0, amount: 'Weekly Pass', bonus: 'Rewards', price: '3,800 Ks', tag: 'Best Value' },
        { id: 1, amount: '13', bonus: '2', price: '450 Ks' },
        { id: 2, amount: '53', bonus: '6', price: '1,500 Ks' },
        { id: 3, amount: '220', bonus: '25', price: '3,800 Ks', tag: 'Best Seller' },
        { id: 4, amount: '480', bonus: '45', price: '9,500 Ks' },
        { id: 5, amount: '1130', bonus: '125', price: '25,000 Ks' },
        { id: 6, amount: '2750', bonus: '350', price: '65,000 Ks' },
    ];

    // Auto-select based on carousel selection if applicable
    useEffect(() => {
        if (selectedProduct && (selectedProduct.name.includes("Diamond") || selectedProduct.name.includes("Weekly"))) {
             const matched = packs.find(p => selectedProduct.name.includes(p.amount) || selectedProduct.price === p.price);
             if (matched) setSelectedPack(matched.id);
        }
    }, [selectedProduct]);

    return (
        <section id="diamonds" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div id="topup-form" className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left: Info */}
                    <div>
                        <span className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-2 block">Instant Top-Up</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Diamonds List</h2>
                        <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5 mb-8">
                            <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                                <Users size={18} className="text-orange-500"/> User Info
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-[10px] text-zinc-500 font-bold uppercase">User ID</label>
                                    <input 
                                        type="text" 
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        placeholder="12345678"
                                        // FIXED: Reduced padding (py-2) and fixed height (h-10)
                                        className="w-full h-10 bg-black border border-white/10 rounded-lg px-3 py-1 text-white focus:border-orange-500 outline-none transition-all text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] text-zinc-500 font-bold uppercase">Zone ID</label>
                                    <input 
                                        type="text" 
                                        value={zoneId}
                                        onChange={(e) => setZoneId(e.target.value)}
                                        placeholder="1234"
                                        // FIXED: Reduced padding (py-2) and fixed height (h-10)
                                        className="w-full h-10 bg-black border border-white/10 rounded-lg px-3 py-1 text-white focus:border-orange-500 outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Packs */}
                    <div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                            {packs.map((pack) => (
                                <button
                                    key={pack.id}
                                    onClick={() => setSelectedPack(pack.id)}
                                    className={`relative p-4 rounded-xl border text-left transition-all duration-300 group
                                        ${selectedPack === pack.id 
                                            ? 'bg-orange-500/10 border-orange-500 shadow-lg scale-[1.02]' 
                                            : 'bg-zinc-900 border-white/10 hover:border-zinc-700'
                                        }`}
                                >
                                    {pack.tag && (
                                        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg z-10">
                                            {pack.tag}
                                        </span>
                                    )}
                                    <div className="flex items-center gap-1 mb-2">
                                        <Gem size={20} className={selectedPack === pack.id ? "text-orange-500" : "text-cyan-400"} />
                                        <span className="text-base font-bold text-white">{pack.amount}</span>
                                    </div>
                                    <div className="text-[10px] text-zinc-400 mb-2 group-hover:text-zinc-300 uppercase tracking-wide">
                                        + {pack.bonus}
                                    </div>
                                    <div className={`font-bold text-sm ${selectedPack === pack.id ? 'text-orange-500' : 'text-white'}`}>
                                        {pack.price}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

// --- FAQ Component ---
const FAQ = () => {
    const questions = [
        { q: "How long does delivery take?", a: "Diamond top-ups are instant (1-3 minutes). Account details are sent to your email immediately after purchase." },
        { q: "Is it safe to buy accounts?", a: "Yes. All accounts are verified and come with a 30-day warranty. We ensure full access transfer." },
        { q: "What payment methods do you accept?", a: "We accept KBZ Pay, Wave Pay, and all major Credit/Debit cards." }
    ];

    return (
        <section className="py-20 bg-black border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-lg p-6">
                            <h4 className="text-white font-medium mb-2">{item.q}</h4>
                            <p className="text-zinc-400 text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- OrderNow Section ---
const OrderNow = () => {
    return (
        <section className="py-20 bg-zinc-900/50 border-t border-white/5 relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent pointer-events-none"></div>
             
             <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Ready to Dominate?
                 </h2>
                 <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                    Get your dream skins and accounts today. Safe, fast, and trusted by thousands of players.
                 </p>
                 <a 
                    href="#topup-form"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-lg hover:shadow-orange-500/50"
                 >
                    Purchase Now <ArrowRight size={20} />
                 </a>
             </div>
        </section>
    );
};

// --- Footer Component ---
const Footer = () => {
    return (
        <footer id="footer" className="bg-zinc-950 py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-orange-600 flex items-center justify-center text-white">
                        <Gamepad2 size={18} />
                    </div>
                    <span className="text-white font-bold tracking-tight">DRIVE X</span>
                 </div>
                 <div className="text-zinc-500 text-sm">
                    © 2024 Drive X Store. All rights reserved.
                 </div>
                 <div className="flex gap-4">
                    <Facebook size={20} className="text-zinc-400 hover:text-white cursor-pointer"/>
                    <Instagram size={20} className="text-zinc-400 hover:text-white cursor-pointer"/>
                    <Twitter size={20} className="text-zinc-400 hover:text-white cursor-pointer"/>
                 </div>
            </div>
        </footer>
    );
};

// --- Main App Component ---
const App = () => {
  const [selectedProduct, setSelectedProduct] = useState<{name: string, price: string} | null>(null);

  const handleSelectProduct = (product: {name: string, price: string}) => {
    setSelectedProduct(product);
  };

  return (
    <div className="bg-black min-h-screen text-zinc-100 font-sans selection:bg-orange-500/30">
      <Navbar />
      <main>
        <Hero onSelectProduct={handleSelectProduct} />
        <div id="accounts">
          <PremiumAccounts />
        </div>
        <div id="diamonds">
          <DiamondTopUp selectedProduct={selectedProduct} />
        </div>
        <FeaturedAccounts onSelectProduct={handleSelectProduct} />
        <HowItWorks />
        <AboutSection />
        <div id="faq">
           <FAQ />
        </div>
        <Testimonials />
        <OrderNow />
      </main>
      <Footer />
    </div>
  );
};

export default App;