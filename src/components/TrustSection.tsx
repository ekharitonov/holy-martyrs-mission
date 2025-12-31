import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const TrustSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container-orthodox">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
            {t('trust.title')}
          </h2>
          <div className="divider-orthodox max-w-xs mx-auto" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Archbishop's Blessing */}
          <ScrollReveal animation="slide-left" className="card-orthodox p-8 bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-cream text-2xl">☦</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t('trust.blessing')}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  His Eminence Archbishop Peter
                </p>
              </div>
            </div>
            <blockquote className="font-display text-lg italic text-foreground leading-relaxed border-l-4 border-primary pl-4">
              {t('trust.blessing.quote')}
            </blockquote>
          </ScrollReveal>

          {/* Affiliations & Credentials */}
          <ScrollReveal animation="slide-right" delay={150} className="space-y-4">
            {/* ROCOR Affiliation */}
            <div className="card-orthodox p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-deep-blue/10 flex items-center justify-center flex-shrink-0">
                <Shield className="text-deep-blue" size={24} />
              </div>
              <div className="flex-1">
                <p className="font-body text-foreground">
                  {t('trust.affiliation')}
                </p>
                <a
                  href="https://www.chicagodiocese.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-body text-sm text-primary hover:underline mt-1"
                >
                  Visit Diocese Website
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* 501(c)(3) */}
            <div className="card-orthodox p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                <Award className="text-burgundy" size={24} />
              </div>
              <div className="flex-1">
                <p className="font-body text-foreground font-medium">
                  {t('trust.501c3')}
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Tax ID available upon request
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Community Photos Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground"
            >
              <div className="text-center p-4">
                <span className="text-4xl mb-2 block">📷</span>
                <span className="font-body text-sm">Community Photo {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
