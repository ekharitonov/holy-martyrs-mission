import { useLanguage } from '@/contexts/LanguageContext';
import { Church, Users, Star, Building, Home, Cross } from 'lucide-react';

const StorySection = () => {
  const { t, language } = useLanguage();

  const timeline = [
    { year: '2020', icon: Church, text: t('story.timeline.2020') },
    { year: '2022', icon: Users, text: t('story.timeline.2022') },
    { year: '2023', icon: Star, text: t('story.timeline.2023') },
    { year: '2024', icon: Building, text: t('story.timeline.2024') },
    { year: '2025', icon: Home, text: t('story.timeline.2025') },
    { year: '∞', icon: Cross, text: t('story.timeline.future') },
  ];

  return (
    <section id="story" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cream-dark/50 to-background" />
      
      <div className="container-orthodox relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-body text-xs uppercase tracking-elegant text-primary mb-4">
            {language === 'en' ? 'About Us' : 'О нас'}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-medium mb-6 tracking-subtle">
            {t('story.title')}
          </h2>
          <div className="divider-orthodox max-w-[200px] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Story Text */}
          <div className="space-y-8">
            <p className="font-body text-lg leading-relaxed text-foreground">
              {t('story.intro')}
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              {t('story.paragraph2')}
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              {t('story.paragraph3')}
            </p>

            {/* Decorative quote - refined */}
            <div className="mt-10 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="pl-8 py-6">
                <p className="font-heading text-xl md:text-2xl italic text-foreground leading-relaxed">
                  {language === 'en' 
                    ? '"Come, let us worship and fall down before Christ."'
                    : '«Приидите, поклонимся и припадём ко Христу.»'
                  }
                </p>
                <p className="font-body text-xs text-primary mt-4 uppercase tracking-elegant">
                  — {language === 'en' ? 'Divine Liturgy' : 'Божественная Литургия'}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline - premium styling */}
          <div className="card-orthodox p-10 md:p-12">
            <h3 className="font-display text-xl font-medium text-foreground mb-10 tracking-subtle text-center">
              {t('story.timeline.title')}
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-primary/10" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Icon container */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-background border border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500">
                      <item.icon size={16} className="text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <span className="font-display text-lg font-medium text-primary tracking-subtle">
                        {item.year}
                      </span>
                      <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
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