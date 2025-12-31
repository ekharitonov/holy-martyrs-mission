import { useLanguage } from '@/contexts/LanguageContext';

const StorySection = () => {
  const { t, language } = useLanguage();

  const timeline = [
    { year: '2020', text: t('story.timeline.2020') },
    { year: '2022', text: t('story.timeline.2022') },
    { year: '2023', text: t('story.timeline.2023') },
    { year: '2024', text: t('story.timeline.2024') },
    { year: '2025–2026', text: t('story.timeline.2025') },
    { year: '2027+', text: t('story.timeline.future') },
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

          {/* Timeline - Table format */}
          <div className="card-orthodox p-8 md:p-10">
            <h3 className="font-display text-xl font-medium text-foreground mb-8 tracking-subtle text-center">
              {t('story.timeline.title')}
            </h3>
            
            {/* Table Header */}
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 mb-4 pb-3 border-b-2 border-primary/30">
              <span className="font-body text-xs uppercase tracking-elegant text-primary font-semibold">
                {language === 'en' ? 'Year' : 'Год'}
              </span>
              <span className="font-body text-xs uppercase tracking-elegant text-primary font-semibold">
                {language === 'en' ? 'Stage' : 'Этап'}
              </span>
            </div>

            {/* Table Rows */}
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 py-4 group hover:bg-primary/5 transition-colors duration-300 ${
                    index !== timeline.length - 1 ? 'border-b border-border/50' : ''
                  }`}
                >
                  <span className="font-display text-base font-medium text-primary">
                    {item.year}
                  </span>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;