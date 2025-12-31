import { forwardRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const { t, language, setLanguage } = useLanguage();

  const quickLinks = [
    { href: '#story', label: t('nav.story') },
    { href: '#vision', label: t('nav.vision') },
    { href: '#donate', label: t('nav.donate') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <footer ref={ref} className="bg-deep-blue text-cream py-16">
      <div className="container-orthodox">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-4xl">☦</span>
              <div>
                <p className="font-display text-xl font-bold text-cream">
                  {language === 'en' ? 'Holy Martyrs' : 'Св. Мучениц'}
                </p>
                <p className="font-body text-sm text-cream/70">
                  {language === 'en'
                    ? 'Faith, Hope, Love & Sophia'
                    : 'Веры, Надежды, Любви и Софии'}
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-cream/70 mb-4">
              {t('footer.mission')}
              <br />
              {t('footer.diocese')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-cream/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language & Social */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Language / Язык</h4>
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-md font-body text-sm transition-all ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-4 py-2 rounded-md font-body text-sm transition-all ${
                  language === 'ru'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                Русский
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-lg">
                    {social === 'facebook' && '📘'}
                    {social === 'instagram' && '📷'}
                    {social === 'youtube' && '📺'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-orthodox mb-8" />

        <div className="text-center">
          <p className="font-body text-sm text-cream/60">
            {t('footer.tax')}
          </p>
          <p className="font-body text-xs text-cream/40 mt-2">
            © {new Date().getFullYear()} Holy Martyrs Faith, Hope, Love & Sophia Orthodox Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
