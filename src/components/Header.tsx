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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/98 backdrop-blur-xl shadow-elegant py-4'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Top gold accent line when scrolled */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="container-orthodox flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 ${
            isScrolled 
              ? 'bg-primary/10 border border-primary/30' 
              : 'bg-primary/20 border border-primary/40'
          } group-hover:bg-primary/20 group-hover:border-primary/50`}>
            <span className="text-primary font-display text-xl">☦</span>
          </div>
          <div className="hidden sm:block">
            <span className={`font-display font-medium text-base tracking-subtle transition-colors duration-500 block ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}>
              {language === 'en' ? 'Holy Martyrs' : 'Св. Мучениц'}
            </span>
            <span className={`font-body text-[10px] uppercase tracking-elegant transition-colors duration-500 ${
              isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/60'
            }`}>
              Orthodox Church
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-xs font-medium uppercase tracking-elegant transition-all duration-300 hover:text-primary relative py-2 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground/90'
              }`}
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            className={`font-body text-[11px] font-semibold tracking-elegant uppercase px-4 py-2 transition-all duration-500 relative ${
              isScrolled
                ? 'text-primary hover:bg-primary/10'
                : 'text-primary-foreground/80 hover:text-primary'
            }`}
          >
            <span className="relative z-10">{language === 'en' ? 'RU' : 'EN'}</span>
            <div className={`absolute inset-0 border transition-all duration-500 ${
              isScrolled ? 'border-primary/40' : 'border-primary-foreground/30'
            }`} />
            <div className={`absolute inset-[3px] border transition-all duration-500 ${
              isScrolled ? 'border-primary/20' : 'border-primary-foreground/15'
            }`} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground hover:text-primary'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background backdrop-blur-xl shadow-elegant border-t border-border/50 z-50">
          <nav className="container-orthodox py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-sm font-medium uppercase tracking-elegant text-foreground hover:text-primary transition-all duration-300 py-4 border-b border-border/30 flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="w-4 h-px bg-primary/0 group-hover:bg-primary group-hover:w-8 transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;