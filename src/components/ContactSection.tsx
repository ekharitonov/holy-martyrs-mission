import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'info@holymartyrsorthodox.org',
      href: 'mailto:info@holymartyrsorthodox.org',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '312-342-4845',
      href: 'tel:312-342-4845',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Northwest Chicago, IL',
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-orthodox">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
            {t('contact.title')}
          </h2>
          <div className="divider-orthodox max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-lg text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-lg text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Service Schedule */}
            <div className="card-orthodox p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary" size={24} />
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t('contact.services')}
                </h3>
              </div>
              <div className="space-y-2 font-body">
                <p className="text-foreground">{t('contact.services.sunday')}</p>
                <p className="text-foreground">{t('contact.services.saturday')}</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                <p className="font-body">Map coming soon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-orthodox p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">
                    {t('donate.form.name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">
                    {t('donate.form.email')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                />
              </div>

              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-gold flex items-center justify-center gap-2">
                <Send size={20} />
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
