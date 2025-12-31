import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import priestPhoto from '@/assets/contact-priest.jpg';
import churchwardenPhoto from '@/assets/contact-churchwarden.jpg';

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

  const clergy = [
    {
      name: 'Rev. Fr. Antony Alekseyenko',
      role: t('contact.clergy'),
      phone: '612-770-9212',
      photo: priestPhoto,
    },
    {
      name: 'Sergei Orzhynskyy',
      role: t('contact.churchwarden'),
      phone: '312-342-4845',
      photo: churchwardenPhoto,
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
            {/* Clergy Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {clergy.map((person, index) => (
                <div key={index} className="card-orthodox p-6 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <img 
                      src={person.photo} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {person.name}
                  </h3>
                  <p className="font-body text-sm text-primary uppercase tracking-wider mb-3">
                    {person.role}
                  </p>
                  <a
                    href={`tel:${person.phone.replace(/-/g, '')}`}
                    className="inline-flex items-center gap-2 font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={16} />
                    {person.phone}
                  </a>
                </div>
              ))}
            </div>

            {/* Addresses */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-orthodox p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {t('contact.address')}
                    </p>
                    <a
                      href="https://maps.google.com/?q=227+Barron+Blvd,+Grayslake,+IL+60030"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-foreground hover:text-primary transition-colors leading-relaxed"
                    >
                      227 Barron Blvd<br />
                      Grayslake, IL 60030
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-orthodox p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {t('contact.mailingAddress')}
                    </p>
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      333 Busse Hwy #171<br />
                      Park Ridge, IL 60068-3285
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Schedule */}
            <div className="card-orthodox p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary" size={24} />
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {t('contact.services')}
                </h3>
              </div>
              <div className="space-y-2 font-body">
                <p className="text-foreground">{t('contact.services.sunday')}</p>
                <p className="text-foreground">{t('contact.services.saturday')}</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.8!2d-88.0456!3d42.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9c4b5e5e5e5b%3A0x1234567890abcdef!2s227%20Barron%20Blvd%2C%20Grayslake%2C%20IL%2060030!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Holy Martyrs Orthodox Church Location"
              />
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
