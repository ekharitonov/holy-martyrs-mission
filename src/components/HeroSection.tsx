import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with sophisticated layering */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-deep-blue to-accent">
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_40%_12%_/_0.4)_100%)]" />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Decorative cross pattern - more subtle */}
        <div className="absolute inset-0 cross-pattern opacity-20" />
        
        {/* Gold accent lines - top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-[3px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Gold accent lines - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>

      {/* Elegant dome silhouette */}
      <div className="absolute bottom-0 left-0 right-0 opacity-[0.12]">
        <svg viewBox="0 0 1440 500" className="w-full h-auto" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="domeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(41, 65%, 48%)" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="hsl(41, 65%, 48%)" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Main dome - more elegant proportions */}
          <path
            d="M720 80 Q720 30 720 30 L720 20 L720 30 Q720 30 720 80 Q660 120 620 190 Q580 260 580 340 L580 500 L860 500 L860 340 Q860 260 820 190 Q780 120 720 80"
            fill="url(#domeGradient)"
          />
          {/* Orthodox cross on dome - more detailed */}
          <g stroke="hsl(41, 65%, 55%)" strokeWidth="3" fill="none" opacity="0.8">
            <path d="M720 20 L720 75" />
            <path d="M705 35 L735 35" />
            <path d="M710 55 L730 55" />
            <path d="M708 65 L732 65" transform="rotate(-10, 720, 65)" />
          </g>
          {/* Side domes - refined */}
          <path
            d="M520 180 Q520 140 520 140 Q490 170 475 220 Q460 270 460 340 L460 500 L580 500 L580 340 Q580 270 565 220 Q550 170 520 180"
            fill="url(#domeGradient)"
            opacity="0.6"
          />
          <path
            d="M920 180 Q920 140 920 140 Q890 170 875 220 Q860 270 860 340 L860 500 L980 500 L980 340 Q980 270 965 220 Q950 170 920 180"
            fill="url(#domeGradient)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Orthodox cross icon with glow */}
        <div className="mb-10 opacity-0 animate-fade-up">
          <div className="inline-flex items-center justify-center">
            <span 
              className="text-primary text-6xl md:text-7xl lg:text-8xl animate-pulse-glow"
              style={{ textShadow: '0 0 40px hsl(41 65% 48% / 0.4)' }}
            >
              ☦
            </span>
          </div>
        </div>

        {/* Church name - elegant typography */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-medium mb-6 opacity-0 animate-fade-up delay-100 leading-tight tracking-subtle">
          {t('hero.title')}
        </h1>
        
        {/* Subtitle with refined styling */}
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-primary italic mb-8 opacity-0 animate-fade-up delay-200 tracking-wide-elegant">
          {t('hero.subtitle')}
        </p>

        {/* Ornate divider */}
        <div className="flex items-center justify-center gap-4 mb-10 opacity-0 animate-fade-up delay-300">
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-2 h-2 rotate-45 border border-primary/50" />
          <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Tagline - more refined */}
        <p className="font-body text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-14 max-w-2xl mx-auto opacity-0 animate-fade-up delay-400 leading-relaxed tracking-wide font-light">
          {t('hero.tagline')}
        </p>

        {/* CTA Buttons - premium styling */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center opacity-0 animate-fade-up delay-500">
          <a href="#donate" className="btn-gold">
            {t('hero.donate')}
          </a>
          <a href="#story" className="btn-outline-gold">
            {t('hero.story')}
          </a>
        </div>
      </div>

      {/* Scroll indicator - refined */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
        <a href="#progress" className="flex flex-col items-center gap-3 text-primary-foreground/50 hover:text-primary transition-colors duration-500 group">
          <span className="font-body text-xs tracking-elegant uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-primary-foreground/30 flex items-start justify-center p-1 group-hover:border-primary/50 transition-colors">
            <div className="w-1 h-2 rounded-full bg-primary-foreground/50 animate-bounce group-hover:bg-primary transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;