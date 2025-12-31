import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const ProgressSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const currentAmount = 23000;
  const goalAmount = 250000;
  const donorCount = 47;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  const milestones = [
    { amount: 48000, label: t('progress.milestone.downpayment'), percentage: (48000 / goalAmount) * 100 },
    { amount: 100000, label: t('progress.milestone.land'), percentage: (100000 / goalAmount) * 100 },
    { amount: 175000, label: t('progress.milestone.construction'), percentage: (175000 / goalAmount) * 100 },
    { amount: 250000, label: t('progress.milestone.complete'), percentage: 100 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="progress" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dark via-background to-cream-dark" />
      <div className="absolute inset-0 cross-pattern" />
      
      <div className="container-orthodox relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-elegant text-primary mb-4">
            Building Fund
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-medium mb-6 tracking-subtle">
            {t('progress.title')}
          </h2>
          <div className="divider-orthodox max-w-[200px] mx-auto" />
        </ScrollReveal>

        {/* Main Progress Card */}
        <ScrollReveal delay={200} animation="scale-in" className="card-orthodox max-w-4xl mx-auto p-10 md:p-14 ornate-frame">
          {/* Stats - refined layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            <div className="text-center">
              <p className="font-body text-[10px] text-muted-foreground uppercase tracking-elegant mb-3">
                {t('progress.raised')}
              </p>
              <p className="font-display text-4xl md:text-5xl font-medium text-primary tracking-subtle">
                {formatCurrency(currentAmount)}
              </p>
            </div>
            <div className="text-center relative">
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
              <p className="font-body text-[10px] text-muted-foreground uppercase tracking-elegant mb-3">
                {t('progress.goal')}
              </p>
              <p className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-subtle">
                {formatCurrency(goalAmount)}
              </p>
            </div>
            <div className="text-center">
              <p className="font-body text-[10px] text-muted-foreground uppercase tracking-elegant mb-3">
                {t('progress.donors')}
              </p>
              <div className="flex items-center justify-center gap-3">
                <Heart className="text-burgundy" fill="hsl(var(--burgundy))" size={24} />
                <p className="font-display text-4xl md:text-5xl font-medium text-burgundy tracking-subtle">
                  {donorCount}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar - elegant styling */}
          <div className="relative mb-10">
            {/* Bar background */}
            <div className="h-4 bg-muted rounded-full overflow-hidden relative shadow-inset border border-border/50">
              {/* Progress fill */}
              <div
                className="h-full rounded-full transition-all duration-[2000ms] ease-out relative overflow-hidden"
                style={{
                  width: isVisible ? `${progressPercentage}%` : '0%',
                  background: 'linear-gradient(90deg, hsl(38 75% 38%), hsl(41 65% 48%), hsl(45 80% 62%), hsl(41 65% 48%), hsl(38 75% 38%))',
                  backgroundSize: '400% 100%',
                  animation: isVisible ? 'shimmer 4s linear infinite' : 'none',
                }}
              >
                {/* Inner highlight */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
              </div>
            </div>

            {/* Percentage indicator */}
            <div 
              className="absolute top-full mt-3 transition-all duration-[2000ms] ease-out"
              style={{ left: isVisible ? `${progressPercentage}%` : '0%' }}
            >
              <div className="relative -translate-x-1/2">
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-primary mx-auto" />
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-sm">
                  <span className="font-body font-semibold text-sm">
                    {progressPercentage.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone markers - refined */}
          <div className="relative mt-16 pt-4">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="flex justify-between">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="text-center flex-1"
                  style={{ maxWidth: '25%' }}
                >
                  <div className={`w-3 h-3 mx-auto mb-3 rotate-45 transition-all duration-500 ${
                    progressPercentage >= milestone.percentage
                      ? 'bg-primary border-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]'
                      : 'bg-muted border border-border'
                  }`} />
                  <p className="font-body text-xs font-medium text-foreground mb-1">
                    {formatCurrency(milestone.amount)}
                  </p>
                  <p className="font-body text-[10px] text-muted-foreground hidden md:block leading-tight">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14 pt-8 border-t border-border/50">
            <a href="#donate" className="btn-gold inline-block">
              {t('hero.donate')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProgressSection;