import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

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
    <section id="progress" ref={sectionRef} className="section-padding bg-cream-dark cross-pattern">
      <div className="container-orthodox">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
            {t('progress.title')}
          </h2>
          <div className="divider-orthodox max-w-xs mx-auto" />
        </div>

        {/* Main Progress Card */}
        <div className="card-orthodox max-w-4xl mx-auto p-8 md:p-12">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {t('progress.raised')}
              </p>
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">
                {formatCurrency(currentAmount)}
              </p>
            </div>
            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {t('progress.goal')}
              </p>
              <p className="font-display text-4xl md:text-5xl font-bold text-foreground">
                {formatCurrency(goalAmount)}
              </p>
            </div>
            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {t('progress.donors')}
              </p>
              <div className="flex items-center justify-center gap-2">
                <Heart className="text-burgundy" fill="currentColor" size={28} />
                <p className="font-display text-4xl md:text-5xl font-bold text-burgundy">
                  {donorCount}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-8">
            {/* Bar background */}
            <div className="h-8 md:h-10 bg-muted rounded-full overflow-hidden shadow-inner relative">
              {/* Progress fill */}
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                style={{
                  width: isVisible ? `${progressPercentage}%` : '0%',
                  background: 'linear-gradient(90deg, hsl(43, 80%, 45%), hsl(43, 70%, 55%), hsl(43, 80%, 45%))',
                  backgroundSize: '200% 100%',
                  animation: isVisible ? 'shimmer 2s linear infinite' : 'none',
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              {/* Percentage label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-body font-bold text-sm md:text-base text-deep-blue drop-shadow-sm">
                  {progressPercentage.toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Milestone markers */}
            <div className="relative mt-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2"
                  style={{ left: `${milestone.percentage}%` }}
                >
                  <div className={`w-3 h-3 rounded-full border-2 ${
                    progressPercentage >= milestone.percentage
                      ? 'bg-primary border-primary'
                      : 'bg-muted border-border'
                  }`} />
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                    <p className="font-body text-xs text-muted-foreground">
                      {formatCurrency(milestone.amount)}
                    </p>
                    <p className="font-body text-xs font-medium text-foreground hidden md:block">
                      {milestone.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile milestones */}
          <div className="grid grid-cols-2 gap-4 mt-16 md:hidden">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg text-center ${
                  progressPercentage >= milestone.percentage
                    ? 'bg-primary/10 border border-primary/30'
                    : 'bg-muted/50 border border-border/30'
                }`}
              >
                <p className="font-body text-sm font-bold">
                  {formatCurrency(milestone.amount)}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {milestone.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="#donate" className="btn-gold inline-block">
              {t('hero.donate')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
