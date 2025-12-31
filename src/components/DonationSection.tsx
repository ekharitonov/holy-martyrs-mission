import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, CreditCard, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DonationSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    memory: '',
  });

  const oneTimeAmounts = [25, 50, 100, 250, 500];
  const monthlyTiers = [
    { amount: 25, tier: t('donate.tier.friend') },
    { amount: 50, tier: t('donate.tier.supporter') },
    { amount: 100, tier: t('donate.tier.builder') },
    { amount: 250, tier: t('donate.tier.benefactor') },
    { amount: 500, tier: t('donate.tier.founder') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || Number(customAmount);
    toast({
      title: "Thank you for your generosity!",
      description: `Your ${isMonthly ? 'monthly' : 'one-time'} donation of $${amount} will help build our church.`,
    });
  };

  return (
    <section id="donate" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dark via-background to-cream-dark" />
      <div className="absolute inset-0 cross-pattern opacity-50" />
      
      <div className="container-orthodox relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-elegant text-primary mb-4">
            Support Our Mission
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-medium mb-6 tracking-subtle">
            {t('donate.title')}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            {t('donate.subtitle')}
          </p>
          <div className="divider-orthodox max-w-[200px] mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-orthodox p-10 md:p-14 ornate-frame">
            <form onSubmit={handleSubmit}>
              {/* One-time / Monthly Toggle - refined */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-muted/50 rounded-sm p-1 border border-border/50">
                  <button
                    type="button"
                    onClick={() => setIsMonthly(false)}
                    className={`px-8 py-3 rounded-sm font-body text-xs font-semibold uppercase tracking-elegant transition-all duration-500 ${
                      !isMonthly
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {t('donate.onetime')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMonthly(true)}
                    className={`px-8 py-3 rounded-sm font-body text-xs font-semibold uppercase tracking-elegant transition-all duration-500 ${
                      isMonthly
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {t('donate.monthly')}
                  </button>
                </div>
              </div>

              {/* Amount Selection - elegant cards */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                {(isMonthly ? monthlyTiers : oneTimeAmounts.map(a => ({ amount: a, tier: '' }))).map(
                  ({ amount, tier }) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`relative p-5 rounded-sm transition-all duration-500 group ${
                        selectedAmount === amount
                          ? 'bg-primary/10 border-2 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)]'
                          : 'bg-background border border-border hover:border-primary/50'
                      }`}
                    >
                      {selectedAmount === amount && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-lg">
                          <Check size={12} className="text-primary-foreground" />
                        </div>
                      )}
                      <p className="font-display text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                        ${amount}
                      </p>
                      {tier && (
                        <p className="font-body text-[10px] text-primary mt-1 uppercase tracking-wide">
                          {tier}
                        </p>
                      )}
                      {isMonthly && <p className="font-body text-[10px] text-muted-foreground">/mo</p>}
                    </button>
                  )
                )}
              </div>

              {/* Custom Amount - refined */}
              <div className="mb-10">
                <label className="font-body text-xs font-medium text-foreground uppercase tracking-elegant block mb-3">
                  {t('donate.custom')}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-muted-foreground">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-4 rounded-sm border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-body placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Form Fields - elegant styling */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div>
                  <label className="font-body text-xs font-medium text-foreground uppercase tracking-elegant block mb-3">
                    {t('donate.form.name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 rounded-sm border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-body"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground uppercase tracking-elegant block mb-3">
                    {t('donate.form.email')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 rounded-sm border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-body"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground uppercase tracking-elegant block mb-3">
                    {t('donate.form.phone')}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-4 rounded-sm border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-body"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground uppercase tracking-elegant block mb-3">
                    {t('donate.form.memory')}
                  </label>
                  <input
                    type="text"
                    value={formData.memory}
                    onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                    placeholder="In memory of... / In honor of..."
                    className="w-full px-4 py-4 rounded-sm border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-body placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="font-body text-xs font-medium text-foreground uppercase tracking-elegant block mb-3">
                  {t('donate.form.message')}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 rounded-sm border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-body resize-none"
                />
              </div>

              {/* Anonymous checkbox - refined */}
              <label className="flex items-center gap-4 mb-10 cursor-pointer group">
                <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-all ${
                  isAnonymous ? 'bg-primary border-primary' : 'border-border group-hover:border-primary/50'
                }`}>
                  {isAnonymous && <Check size={14} className="text-primary-foreground" />}
                </div>
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="sr-only"
                />
                <span className="font-body text-sm text-foreground">
                  {t('donate.form.anonymous')}
                </span>
              </label>

              {/* Submit Button */}
              <button type="submit" className="w-full btn-gold flex items-center justify-center gap-3 py-5">
                <CreditCard size={20} />
                <span>{t('donate.submit')}</span>
              </button>

              {/* Alternative payment - refined */}
              <div className="mt-10 p-6 bg-muted/30 rounded-sm border border-border/50 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Smartphone size={18} className="text-primary" />
                  <span className="font-body text-sm font-medium text-foreground">
                    {t('donate.alternative')}
                  </span>
                </div>
                <p className="font-body text-xs text-muted-foreground">
                  {t('donate.tax')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;