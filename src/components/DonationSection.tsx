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
    <section id="donate" className="section-padding bg-background">
      <div className="container-orthodox">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
            {t('donate.title')}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t('donate.subtitle')}
          </p>
          <div className="divider-orthodox max-w-xs mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-orthodox p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* One-time / Monthly Toggle */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex bg-muted rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setIsMonthly(false)}
                    className={`px-6 py-3 rounded-md font-body font-semibold transition-all ${
                      !isMonthly
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {t('donate.onetime')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMonthly(true)}
                    className={`px-6 py-3 rounded-md font-body font-semibold transition-all ${
                      isMonthly
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {t('donate.monthly')}
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {(isMonthly ? monthlyTiers : oneTimeAmounts.map(a => ({ amount: a, tier: '' }))).map(
                  ({ amount, tier }) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`relative p-4 rounded-lg border-2 transition-all ${
                        selectedAmount === amount
                          ? 'border-primary bg-primary/10 shadow-md'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {selectedAmount === amount && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <Check size={12} className="text-cream" />
                        </div>
                      )}
                      <p className="font-display text-2xl font-bold text-foreground">
                        ${amount}
                      </p>
                      {tier && (
                        <p className="font-body text-xs text-primary mt-1">
                          {tier}
                        </p>
                      )}
                      {isMonthly && <p className="font-body text-xs text-muted-foreground">/mo</p>}
                    </button>
                  )
                )}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="font-body text-sm font-medium text-foreground block mb-2">
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
                    className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                  />
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">
                    {t('donate.form.phone')}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">
                    {t('donate.form.memory')}
                  </label>
                  <input
                    type="text"
                    value={formData.memory}
                    onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                    placeholder="In memory of... / In honor of..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="font-body text-sm font-medium text-foreground block mb-2">
                  {t('donate.form.message')}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body resize-none"
                />
              </div>

              {/* Anonymous checkbox */}
              <label className="flex items-center gap-3 mb-8 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
                <span className="font-body text-foreground">
                  {t('donate.form.anonymous')}
                </span>
              </label>

              {/* Submit Button */}
              <button type="submit" className="w-full btn-gold text-xl flex items-center justify-center gap-3">
                <CreditCard size={24} />
                {t('donate.submit')}
              </button>

              {/* Alternative payment */}
              <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Smartphone size={20} className="text-primary" />
                  <span className="font-body font-medium text-foreground">
                    {t('donate.alternative')}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground">
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
