import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Home, Church } from 'lucide-react';

const VisionSection = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: MapPin,
      title: t('vision.phase1.title'),
      description: t('vision.phase1.desc'),
      number: '01',
    },
    {
      icon: Home,
      title: t('vision.phase2.title'),
      description: t('vision.phase2.desc'),
      number: '02',
    },
    {
      icon: Church,
      title: t('vision.phase3.title'),
      description: t('vision.phase3.desc'),
      number: '03',
    },
  ];

  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cream-dark to-background" />
      <div className="absolute inset-0 cross-pattern" />
      
      <div className="container-orthodox relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-body text-xs uppercase tracking-elegant text-primary mb-4">
            Our Path Forward
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-medium mb-6 tracking-subtle">
            {t('vision.title')}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-6">
            {t('vision.subtitle')}
          </p>
          <div className="divider-orthodox max-w-[200px] mx-auto" />
        </div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connector line */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px">
                  <div className="h-full bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-primary/50" />
                </div>
              )}
              
              <div className="card-orthodox p-10 text-center h-full">
                {/* Phase number */}
                <div className="inline-block mb-8">
                  <span className="font-display text-6xl font-medium text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                    {phase.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                  <phase.icon size={32} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-medium text-foreground mb-4 tracking-subtle">
                  {phase.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cemetery mention - refined */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-sm border border-burgundy/20 bg-burgundy/5">
            <span className="text-burgundy text-2xl">✝</span>
            <span className="font-body text-sm font-medium text-burgundy tracking-wide">
              {t('vision.cemetery')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;