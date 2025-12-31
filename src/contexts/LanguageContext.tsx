import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.story': 'Our Story',
    'nav.vision': 'Our Vision',
    'nav.donate': 'Donate',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Holy Martyrs Faith, Hope, Love & Sophia',
    'hero.subtitle': 'Orthodox Church',
    'hero.tagline': 'Help us build a home for Orthodox faith in Chicago',
    'hero.donate': 'Donate Now',
    'hero.story': 'Learn Our Story',
    
    // Progress
    'progress.title': 'Building Fund Progress',
    'progress.raised': 'Raised',
    'progress.goal': 'Goal',
    'progress.donors': 'Generous Donors',
    'progress.milestone.downpayment': 'Down Payment',
    'progress.milestone.land': 'Land Secured',
    'progress.milestone.construction': 'Construction',
    'progress.milestone.complete': 'Complete',
    
    // Story
    'story.title': 'Our Mission',
    'story.intro': 'Under the blessing of His Eminence Archbishop Peter of Chicago and Mid-America, our small but growing mission was established in 2023 to serve the Orthodox faithful of northwest Chicago.',
    'story.paragraph2': 'As a parish of the Russian Orthodox Church Outside of Russia (ROCOR), we maintain the traditions passed down through centuries while welcoming all who seek the ancient Christian faith.',
    'story.paragraph3': 'Now we need your help to acquire land and build our first permanent church home—a sacred space where generations can worship, grow in faith, and find spiritual community.',
    'story.timeline.title': 'Development Stages',
    'story.timeline.2020': 'Community founding. A group of Orthodox believers began regular services in a Chicago suburb',
    'story.timeline.2022': 'Parish formation. Community grew to 40+ regular parishioners, with organized regular services and feasts',
    'story.timeline.2023': 'Canonical establishment. By the blessing of His Eminence Peter, Archbishop of Chicago and Mid-America, the mission was officially established under ROCOR jurisdiction',
    'story.timeline.2024': 'Building fund launch. Raised $23,000. Building committee formed, land search initiated',
    'story.timeline.2025': 'Land acquisition. Goal: 6-8 acre site in northwest Chicago for church complex',
    'story.timeline.future': 'Construction. Fellowship hall for services → Orthodox church for 250-300 → Parish cemetery',
    
    // Vision
    'vision.title': 'Our Vision',
    'vision.subtitle': 'Building for generations to come',
    'vision.phase1.title': 'Phase 1: Land',
    'vision.phase1.desc': 'Acquire 6-8 acres in northwest Chicago for our church campus',
    'vision.phase2.title': 'Phase 2: Modular Building',
    'vision.phase2.desc': 'Initial worship space for 50-100 faithful',
    'vision.phase3.title': 'Phase 3: Permanent Church',
    'vision.phase3.desc': 'Traditional Orthodox church for 250-300 worshippers',
    'vision.cemetery': 'Including the first Russian Orthodox cemetery in Chicagoland',
    
    // Donation
    'donate.title': 'Support Our Mission',
    'donate.subtitle': 'Every gift brings us closer to our permanent home',
    'donate.onetime': 'One-Time',
    'donate.monthly': 'Monthly',
    'donate.custom': 'Custom Amount',
    'donate.tier.friend': 'Friend',
    'donate.tier.supporter': 'Supporter',
    'donate.tier.builder': 'Builder',
    'donate.tier.benefactor': 'Benefactor',
    'donate.tier.founder': 'Founder',
    'donate.form.name': 'Full Name',
    'donate.form.email': 'Email Address',
    'donate.form.phone': 'Phone (optional)',
    'donate.form.message': 'Message (optional)',
    'donate.form.anonymous': 'Make my donation anonymous',
    'donate.form.memory': 'In memory of / In honor of (optional)',
    'donate.submit': 'Complete Donation',
    'donate.alternative': 'Alternative: Send via Zelle to 312-342-4845',
    'donate.tax': 'All donations are tax-deductible. Tax ID available upon request.',
    
    // Ways to Help
    'help.title': 'Other Ways to Help',
    'help.volunteer.title': 'Volunteer',
    'help.volunteer.desc': 'Join our community events and construction projects',
    'help.inkind.title': 'In-Kind Donations',
    'help.inkind.desc': 'Donate building materials, furniture, or professional services',
    'help.spread.title': 'Spread the Word',
    'help.spread.desc': 'Share our mission with friends and family',
    'help.pray.title': 'Pray for Us',
    'help.pray.desc': 'Your prayers sustain our mission',
    'help.legacy.title': 'Legacy Giving',
    'help.legacy.desc': 'Include our mission in your estate planning',
    
    // Trust
    'trust.title': 'Our Foundation',
    'trust.blessing': 'Archbishop Peter\'s Blessing',
    'trust.blessing.quote': '"May this mission flourish and bring many souls to Christ through the beauty of Orthodox worship and community."',
    'trust.affiliation': 'Affiliated with the Russian Orthodox Church Outside of Russia, Diocese of Chicago and Mid-America',
    'trust.501c3': 'Registered 501(c)(3) Non-Profit Organization',
    
    // Gallery
    'gallery.title': 'Our Community',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Service Location',
    'contact.mailingAddress': 'Mailing Address (for checks)',
    'contact.services': 'Service Schedule',
    'contact.services.sunday': 'Sunday Divine Liturgy: 10:00 AM',
    'contact.services.saturday': 'Saturday Vespers: 6:00 PM',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.clergy': 'Clergy',
    'contact.churchwarden': 'Churchwarden',
    
    // Footer
    'footer.mission': 'Russian Orthodox Church Outside of Russia',
    'footer.diocese': 'Diocese of Chicago and Mid-America',
    'footer.tax': 'A 501(c)(3) tax-exempt organization',
  },
  ru: {
    // Navigation
    'nav.story': 'Наша история',
    'nav.vision': 'Наше видение',
    'nav.donate': 'Пожертвовать',
    'nav.gallery': 'Галерея',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'Святых Мучениц Веры, Надежды, Любви и Софии',
    'hero.subtitle': 'Православная Церковь',
    'hero.tagline': 'Помогите нам построить дом православной веры в Чикаго',
    'hero.donate': 'Пожертвовать',
    'hero.story': 'Узнать больше',
    
    // Progress
    'progress.title': 'Сбор на строительство',
    'progress.raised': 'Собрано',
    'progress.goal': 'Цель',
    'progress.donors': 'Щедрых жертвователей',
    'progress.milestone.downpayment': 'Первый взнос',
    'progress.milestone.land': 'Земля',
    'progress.milestone.construction': 'Строительство',
    'progress.milestone.complete': 'Завершение',
    
    // Story
    'story.title': 'Наша миссия',
    'story.intro': 'По благословению Его Высокопреосвященства Архиепископа Петра Чикагского и Средне-Американского, наша небольшая, но растущая миссия была основана в 2023 году для служения православным верующим северо-западного Чикаго.',
    'story.paragraph2': 'Как приход Русской Православной Церкви Заграницей (РПЦЗ), мы храним традиции, передаваемые веками, приветствуя всех, кто ищет древнюю христианскую веру.',
    'story.paragraph3': 'Теперь нам нужна ваша помощь для приобретения земли и строительства нашего первого постоянного храма — священного пространства, где поколения смогут молиться, возрастать в вере и обретать духовную общину.',
    'story.timeline.title': 'Этапы развития',
    'story.timeline.2020': 'Основание общины. Группа православных верующих начала регулярные богослужения в пригороде Чикаго',
    'story.timeline.2022': 'Формирование прихода. Община выросла до 40+ постоянных прихожан, организованы регулярные службы и праздники',
    'story.timeline.2023': 'Каноническое учреждение. По благословению Высокопреосвященнейшего Петра, Архиепископа Чикагского и Средне-Американского, миссия официально учреждена в юрисдикции РПЦЗ',
    'story.timeline.2024': 'Запуск строительного фонда. Собрано $23,000. Сформирован строительный комитет, начат поиск земельных участков',
    'story.timeline.2025': 'Приобретение земли. Цель: участок 2,5–3,5 га на северо-западе Чикаго для строительства храмового комплекса',
    'story.timeline.future': 'Строительство. Трапезная для богослужений → Православный храм на 250–300 человек → Приходское кладбище',
    
    // Vision
    'vision.title': 'Наше видение',
    'vision.subtitle': 'Строим для будущих поколений',
    'vision.phase1.title': 'Фаза 1: Земля',
    'vision.phase1.desc': 'Приобретение 2,5-3,5 га в северо-западном Чикаго для церковного комплекса',
    'vision.phase2.title': 'Фаза 2: Модульное здание',
    'vision.phase2.desc': 'Первоначальное молитвенное пространство на 50-100 верующих',
    'vision.phase3.title': 'Фаза 3: Постоянный храм',
    'vision.phase3.desc': 'Традиционный православный храм на 250-300 молящихся',
    'vision.cemetery': 'Включая первое русское православное кладбище в Чикаголенде',
    
    // Donation
    'donate.title': 'Поддержите нашу миссию',
    'donate.subtitle': 'Каждый дар приближает нас к нашему постоянному дому',
    'donate.onetime': 'Разовый',
    'donate.monthly': 'Ежемесячный',
    'donate.custom': 'Другая сумма',
    'donate.tier.friend': 'Друг',
    'donate.tier.supporter': 'Помощник',
    'donate.tier.builder': 'Строитель',
    'donate.tier.benefactor': 'Благотворитель',
    'donate.tier.founder': 'Основатель',
    'donate.form.name': 'Полное имя',
    'donate.form.email': 'Электронная почта',
    'donate.form.phone': 'Телефон (необязательно)',
    'donate.form.message': 'Сообщение (необязательно)',
    'donate.form.anonymous': 'Сделать пожертвование анонимным',
    'donate.form.memory': 'В память / В честь (необязательно)',
    'donate.submit': 'Завершить пожертвование',
    'donate.alternative': 'Альтернатива: отправьте через Zelle на 312-342-4845',
    'donate.tax': 'Все пожертвования освобождены от налогов. Налоговый номер предоставляется по запросу.',
    
    // Ways to Help
    'help.title': 'Другие способы помочь',
    'help.volunteer.title': 'Волонтёрство',
    'help.volunteer.desc': 'Присоединяйтесь к мероприятиям и строительным проектам',
    'help.inkind.title': 'Дары в натуре',
    'help.inkind.desc': 'Пожертвуйте стройматериалы, мебель или профессиональные услуги',
    'help.spread.title': 'Расскажите о нас',
    'help.spread.desc': 'Поделитесь нашей миссией с друзьями и семьёй',
    'help.pray.title': 'Молитесь о нас',
    'help.pray.desc': 'Ваши молитвы поддерживают нашу миссию',
    'help.legacy.title': 'Наследственные дары',
    'help.legacy.desc': 'Включите нашу миссию в планирование наследства',
    
    // Trust
    'trust.title': 'Наше основание',
    'trust.blessing': 'Благословение Архиепископа Петра',
    'trust.blessing.quote': '«Да процветает эта миссия и приведёт многие души ко Христу через красоту православного богослужения и общины.»',
    'trust.affiliation': 'Принадлежит Русской Православной Церкви Заграницей, Чикагская и Средне-Американская епархия',
    'trust.501c3': 'Зарегистрированная некоммерческая организация 501(c)(3)',
    
    // Gallery
    'gallery.title': 'Наша община',
    
    // Contact
    'contact.title': 'Связаться с нами',
    'contact.email': 'Эл. почта',
    'contact.phone': 'Телефон',
    'contact.address': 'Адрес богослужений',
    'contact.mailingAddress': 'Почтовый адрес (для чеков)',
    'contact.services': 'Расписание богослужений',
    'contact.services.sunday': 'Воскресная Божественная Литургия: 10:00',
    'contact.services.saturday': 'Субботняя Вечерня: 18:00',
    'contact.form.subject': 'Тема',
    'contact.form.message': 'Ваше сообщение',
    'contact.form.send': 'Отправить',
    'contact.clergy': 'Духовенство',
    'contact.churchwarden': 'Староста',
    
    // Footer
    'footer.mission': 'Русская Православная Церковь Заграницей',
    'footer.diocese': 'Чикагская и Средне-Американская епархия',
    'footer.tax': 'Некоммерческая организация 501(c)(3)',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'ru') return saved;
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('ru') ? 'ru' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
