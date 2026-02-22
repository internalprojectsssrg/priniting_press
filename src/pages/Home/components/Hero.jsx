import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Precision Print.",
    sub: "Premium Branding",
    accent: "Crafted to Perfection",
    img:"",
    theme: "gold",
    align: "left",
  },
  {
    id: 2,
    title: "Luxury Packaging.",
    sub: "The First Impression",
    accent: "Where Unboxing Becomes Art",
    img:"",
    theme: "silver",
    align: "right",
  },
  {
    id: 3,
    title: "Bespoke Labels.",
    sub: "Foil · Emboss · Die-Cut",
    accent: "Your Identity, Elevated",
    img: "",
    theme: "dark",
    align: "center",
  },
  {
    id: 4,
    title: "Bold Identity.",
    sub: "Brand Architecture",
    accent: "Systems That Scale",
    img: "",
    theme: "warm",
    align: "left",
  },
];

const themeStyles = {
  gold:   { overlay: "from-black/70 via-black/30 to-transparent", accent: "#c9a84c", accentDim: "#8a6820", bg: "from-amber-950 to-slate-900" },
  silver: { overlay: "from-black/80 via-black/40 to-transparent", accent: "#c0c0c0", accentDim: "#707070", bg: "from-slate-900 to-slate-950" },
  dark:   { overlay: "from-black/60 via-black/20 to-black/10",   accent: "#c9a84c", accentDim: "#8a6820", bg: "from-slate-950 to-black" },
  warm:   { overlay: "from-black/75 via-black/35 to-transparent", accent: "#e8a060", accentDim: "#a05820", bg: "from-orange-950 to-slate-900" },
};

const alignClass = {
  left:   "items-start text-left pl-[8vw]",
  right:  "items-end text-right pr-[8vw]",
  center: "items-center text-center",
};

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const DURATION = 6000;

  const startCycle = () => {
    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);
    setProgress(0);
    let start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
    }, 30);
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
      start = Date.now();
      setProgress(0);
    }, DURATION);
  };

  useEffect(() => {
    startCycle();
    return () => { clearInterval(intervalRef.current); clearInterval(progressRef.current); };
  }, []);

  const goTo = (i) => {
    setIndex(i);
    startCycle();
  };

  // Inquiry scroll function
  const handleInquiryScroll = () => {
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = slides[index];
  const theme = themeStyles[slide.theme];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-serif">

      {/* Slide background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`absolute inset-0 bg-gradient-to-br ${theme.bg}`}
        />
      </AnimatePresence>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className={`relative h-full flex flex-col justify-center ${alignClass[slide.align]} px-0`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } }, exit: {} }}
          >
            {/* Eyebrow rule */}
            <motion.div
              variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }, exit: { opacity: 0 } }}
              className="flex items-center gap-3 mb-4"
              style={{ transformOrigin: slide.align === 'right' ? 'right' : 'left' }}
            >
              <span className="block h-px w-12" style={{ background: theme.accent }} />
              <span className="uppercase tracking-[0.35em] text-xs font-sans font-semibold" style={{ color: theme.accent }}>
                {slide.sub}
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }, exit: { y: -20, opacity: 0 } }}
              className="text-white leading-[0.9] mb-6"
              style={{
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                fontFamily: "'Playfair Display', 'Book Antiqua', Palatino, serif",
                fontWeight: 700,
                letterSpacing: '-0.02em',
                textShadow: '0 4px 40px rgba(0,0,0,0.4)',
              }}
            >
              {slide.title}
            </motion.h1>

            {/* Accent line */}
            <motion.p
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } }, exit: { opacity: 0 } }}
              className="font-sans text-white/60 tracking-[0.15em] uppercase text-sm mb-10"
            >
              {slide.accent}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.1 } }, exit: { opacity: 0 } }}
              className="flex gap-4 flex-wrap"
            >
              <button
                className="px-8 py-3 text-xs tracking-[0.25em] uppercase font-sans font-semibold border transition-all duration-300 hover:bg-white/10"
                style={{
                  borderColor: 'rgba(255,255,255,0.4)',
                  color: 'rgba(255,255,255,0.85)',
                }}
                onClick={handleInquiryScroll}
              >
                Get a Quote
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide counter — top right */}
      <div className="absolute top-8 right-8 font-sans text-xs text-white/40 tracking-[0.2em]">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block"
            style={{ color: theme.accent }}
          >
            0{index + 1}
          </motion.span>
        </AnimatePresence>
        <span className="mx-2 text-white/20">/</span>
        <span>0{slides.length}</span>
      </div>

      {/* Bottom navigation dots with progress */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className="relative flex items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className="block rounded-full transition-all duration-500"
              style={{
                width: i === index ? 36 : 6,
                height: 6,
                background: i === index ? theme.accent : 'rgba(255,255,255,0.3)',
              }}
            />
            {/* Progress fill on active */}
            {i === index && (
              <motion.span
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ background: theme.accentDim, width: `${progress}%`, maxWidth: 36 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Left side vertical text */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 font-sans text-[10px] tracking-[0.4em] uppercase text-white/25 hidden md:block"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        SRI SAI DATTA GRAPHICS
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/30 hidden md:block"
          style={{ writingMode: 'vertical-rl', marginBottom: 8 }}>Scroll</span>
        <motion.div
          className="w-px h-12 origin-top"
          style={{ background: `linear-gradient(to bottom, ${theme.accent}, transparent)` }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Hero;