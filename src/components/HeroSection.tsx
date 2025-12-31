import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-deep-blue">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/80 via-deep-blue/70 to-deep-blue/90" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 cross-pattern opacity-30" />
        
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </div>

      {/* Dome silhouette SVG */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg viewBox="0 0 1440 400" className="w-full h-auto" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="domeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(43, 70%, 47%)" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="hsl(43, 70%, 47%)" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Main dome */}
          <path
            d="M720 50 Q720 10 720 10 L720 0 L720 10 Q720 10 720 50 Q680 80 650 130 Q620 180 620 250 L620 400 L820 400 L820 250 Q820 180 790 130 Q760 80 720 50"
            fill="url(#domeGradient)"
          />
          {/* Cross on dome */}
          <path
            d="M720 10 L720 60 M710 25 L730 25"
            stroke="hsl(43, 70%, 47%)"
            strokeWidth="4"
            fill="none"
            opacity="0.6"
          />
          {/* Side domes */}
          <path
            d="M550 150 Q550 120 550 120 Q530 140 520 180 Q510 220 510 280 L510 400 L590 400 L590 280 Q590 220 580 180 Q570 140 550 150"
            fill="url(#domeGradient)"
            opacity="0.7"
          />
          <path
            d="M890 150 Q890 120 890 120 Q870 140 860 180 Q850 220 850 280 L850 400 L930 400 L930 280 Q930 220 920 180 Q910 140 890 150"
            fill="url(#domeGradient)"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Orthodox cross icon */}
        <div className="mb-8 opacity-0 animate-fade-up">
          <span className="text-primary text-6xl md:text-7xl filter drop-shadow-lg">☦</span>
        </div>

        {/* Church name */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream font-bold mb-4 opacity-0 animate-fade-up delay-100 leading-tight">
          {t('hero.title')}
        </h1>
        
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-primary mb-8 opacity-0 animate-fade-up delay-200">
          {t('hero.subtitle')}
        </p>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl lg:text-2xl text-cream/80 mb-12 max-w-3xl mx-auto opacity-0 animate-fade-up delay-300">
          {t('hero.tagline')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up delay-400">
          <a href="#donate" className="btn-gold text-lg">
            {t('hero.donate')}
          </a>
          <a href="#story" className="btn-outline-gold text-lg border-cream/50 text-cream hover:bg-cream/20 hover:text-cream">
            {t('hero.story')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <a href="#progress" className="flex flex-col items-center gap-2 text-cream/60 hover:text-primary transition-colors">
          <span className="font-body text-sm">Scroll</span>
          <ChevronDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
