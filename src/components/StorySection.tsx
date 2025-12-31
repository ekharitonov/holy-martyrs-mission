import { useLanguage } from '@/contexts/LanguageContext';
import { Church, Users, Star, Building, Home, Cross } from 'lucide-react';

const StorySection = () => {
  const { t } = useLanguage();

  const timeline = [
    { year: '2020', icon: Church, text: t('story.timeline.2020') },
    { year: '2022', icon: Users, text: t('story.timeline.2022') },
    { year: '2023', icon: Star, text: t('story.timeline.2023') },
    { year: '2024', icon: Building, text: t('story.timeline.2024') },
    { year: '2025', icon: Home, text: t('story.timeline.2025') },
    { year: '∞', icon: Cross, text: t('story.timeline.future') },
  ];

  return (
    <section id="story" className="section-padding bg-background">
      <div className="container-orthodox">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
            {t('story.title')}
          </h2>
          <div className="divider-orthodox max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Story Text */}
          <div className="space-y-6">
            <p className="font-body text-lg leading-relaxed text-foreground">
              {t('story.intro')}
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              {t('story.paragraph2')}
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              {t('story.paragraph3')}
            </p>

            {/* Decorative quote */}
            <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="font-display text-xl italic text-foreground">
                "Come, let us worship and fall down before Christ."
              </p>
              <p className="font-body text-sm text-muted-foreground mt-2">
                — Divine Liturgy
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              {t('story.timeline.title')}
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Icon container */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-cream transition-all duration-300 shadow-lg">
                      <item.icon size={20} className="text-primary group-hover:text-cream transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <span className="font-display text-xl font-bold text-primary">
                        {item.year}
                      </span>
                      <p className="font-body text-foreground mt-1">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
