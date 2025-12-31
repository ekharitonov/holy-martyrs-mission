import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Home, Church } from 'lucide-react';

const VisionSection = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: MapPin,
      title: t('vision.phase1.title'),
      description: t('vision.phase1.desc'),
      accent: 'bg-primary/10 border-primary/30',
      iconColor: 'text-primary',
    },
    {
      icon: Home,
      title: t('vision.phase2.title'),
      description: t('vision.phase2.desc'),
      accent: 'bg-burgundy/10 border-burgundy/30',
      iconColor: 'text-burgundy',
    },
    {
      icon: Church,
      title: t('vision.phase3.title'),
      description: t('vision.phase3.desc'),
      accent: 'bg-deep-blue/10 border-deep-blue/30',
      iconColor: 'text-deep-blue',
    },
  ];

  return (
    <section id="vision" className="section-padding bg-cream-dark cross-pattern">
      <div className="container-orthodox">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
            {t('vision.title')}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t('vision.subtitle')}
          </p>
          <div className="divider-orthodox max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`card-orthodox p-8 text-center border-2 ${phase.accent} hover:border-primary/50 transition-all`}
            >
              {/* Phase number */}
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-cream font-display font-bold text-sm mb-6">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-background flex items-center justify-center shadow-md ${phase.iconColor}`}>
                <phase.icon size={36} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {phase.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {phase.description}
              </p>

              {/* Connector arrow (not on last) */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-primary/30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cemetery mention */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-burgundy/10 text-burgundy px-6 py-3 rounded-full">
            <span className="text-2xl">✝</span>
            <span className="font-body font-medium">
              {t('vision.cemetery')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
