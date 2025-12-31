import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Gift, Share2, Heart, FileHeart } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const WaysToHelpSection = () => {
  const { t } = useLanguage();

  const ways = [
    {
      icon: Users,
      title: t('help.volunteer.title'),
      description: t('help.volunteer.desc'),
    },
    {
      icon: Gift,
      title: t('help.inkind.title'),
      description: t('help.inkind.desc'),
    },
    {
      icon: Share2,
      title: t('help.spread.title'),
      description: t('help.spread.desc'),
    },
    {
      icon: Heart,
      title: t('help.pray.title'),
      description: t('help.pray.desc'),
    },
    {
      icon: FileHeart,
      title: t('help.legacy.title'),
      description: t('help.legacy.desc'),
    },
  ];

  return (
    <section className="section-padding bg-cream-dark cross-pattern">
      <div className="container-orthodox">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
            {t('help.title')}
          </h2>
          <div className="divider-orthodox max-w-xs mx-auto" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ways.map((way, index) => (
            <ScrollReveal
              key={index}
              delay={index * 100}
              className="card-orthodox p-6 text-center group hover:bg-primary/5"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-cream transition-all duration-300">
                <way.icon size={24} className="text-primary group-hover:text-cream transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {way.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {way.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Share Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          {['Facebook', 'Twitter', 'Email'].map((platform) => (
            <button
              key={platform}
              className="px-6 py-2 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all font-body text-sm"
            >
              Share on {platform}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToHelpSection;
