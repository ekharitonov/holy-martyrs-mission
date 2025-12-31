import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#story', label: t('nav.story') },
    { href: '#vision', label: t('nav.vision') },
    { href: '#donate', label: t('nav.donate') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-orthodox flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center transition-all group-hover:bg-primary/30">
            <span className="text-primary font-display text-xl">☦</span>
          </div>
          <span className={`font-display font-semibold text-lg hidden sm:block transition-colors ${
            isScrolled ? 'text-foreground' : 'text-cream'
          }`}>
            {language === 'en' ? 'Holy Martyrs' : 'Св. Мучениц'}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                isScrolled ? 'text-foreground' : 'text-cream/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            className={`font-body text-sm font-semibold px-3 py-1.5 rounded-md border-2 transition-all ${
              isScrolled
                ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                : 'border-cream/50 text-cream hover:bg-cream/20'
            }`}
          >
            {language === 'en' ? 'RU' : 'EN'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-cream hover:bg-cream/20'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-xl animate-fade-in">
          <nav className="container-orthodox py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
