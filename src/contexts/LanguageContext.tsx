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
    'story.title': 'Our History',
    'story.intro': 'By the blessing of His Eminence Peter, Archbishop of Chicago and Mid-America, the Mission of Holy Martyrs Faith, Hope, Love and their mother Sophia was founded in northwest Chicago on September 5, 2023.',
    'story.paragraph2': 'On the feast of Holy Martyrs Faith, Hope, Love and their mother Sophia (September 30, 2023), Fr. Anthony Alexeenko served a moleben and held the first church council meeting. The mission was established and its original vision to build an Orthodox temple and open an Orthodox cemetery in northwest Chicago was confirmed.',
    'story.paragraph3': 'The history of the mission goes back to the summer of 2020. A group of faithful Orthodox believers founded St. Nicholas of Myra Orthodox Church on July 12, 2020, the feast day of Sts. Peter and Paul. On this day, the first liturgy was served in a tent on a farm in Woodstock, IL. People came every Sunday to the liturgy on the farm for the rest of the summer. They were drawn by the Christian joy and love, and one could say the believers "were of one heart and one soul" (Acts 4:32). And they had a vision to build their own Orthodox temple.',
    'story.paragraph4': 'As fall was drawing near, one of the church members graciously offered his personal property to the church. The parish temporarily moved to the building with great joy and gratitude to God. Altar gates, candle stands, and many other church items were donated. One of the donations was an icon with the relics of St. Nicholas, which signified the favor and protection of the parish by the Saint himself.',
    'story.paragraph5': 'The parish has been growing little by little. On the Easter night of 2022, for the first time there was not enough room for everyone in the dining hall for the blessing with holy water.',
    'story.timeline.title': 'Key Milestones',
    'story.timeline.2020': 'July 12 — First Divine Liturgy in a tent on a farm in Woodstock, IL on the feast of Sts. Peter and Paul',
    'story.timeline.2022': 'Easter — Parish outgrew its temporary space; there was not enough room for all during the blessing with holy water',
    'story.timeline.2023': 'September 5 — Official founding of the mission by the blessing of Archbishop Peter. September 30 — First moleben and church council meeting',
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
    'story.title': 'Наша история',
    'story.intro': 'По благословению Его Преосвященства Петра, Архиепископа Чикагского и Средне-Американского миссия святых мучениц Веры, Надежды, Любви и их матери Софии была основана на северо-западе Чикаго 5 сентября 2023 года.',
    'story.paragraph2': 'В праздник святых Веры, Надежды, Любви и их матери Софии 30 сентября 2023 года о. Антоний Алексеенко отслужил молебен и провёл первое церковное собрание. Миссия была основана, и её первоначальное видение — построить православный храм и открыть православное кладбище на северо-западе — было подтверждено.',
    'story.paragraph3': 'История миссии восходит к лету 2020 года. Группа верующих православных христиан основала храм святителя Николая Мирликийского 12 июля 2020 года, в праздник святых апостолов Петра и Павла. В этот день первая литургия была совершена в палатке на ферме в Вудстоке, штат Иллинойс. Люди приходили каждое воскресенье на литургию на ферме до конца лета. Их привлекала христианская радость и любовь, и можно сказать, что верующие «были одного сердца и одной души» (Деян. 4:32). И у них было видение построить свой собственный православный храм.',
    'story.paragraph4': 'С приближением осени один из прихожан любезно предоставил свою личную собственность церкви. Приход с великой радостью и благодарением Богу временно переехал в это здание. Царские врата, подсвечники и многие другие церковные предметы были пожертвованы храму. Одним из даров была икона с мощами святителя Николая, что означало покровительство и защиту прихода самим Святителем.',
    'story.paragraph5': 'Приход постепенно рос. В пасхальную ночь 2022 года впервые не хватило места для всех в трапезной во время освящения святой водой.',
    'story.timeline.title': 'Ключевые события',
    'story.timeline.2020': '12 июля — Первая Божественная Литургия в палатке на ферме в Вудстоке, штат Иллинойс, в праздник святых апостолов Петра и Павла',
    'story.timeline.2022': 'Пасха — Приход перерос своё временное помещение; не хватило места для всех во время освящения святой водой',
    'story.timeline.2023': '5 сентября — Официальное основание миссии по благословению Архиепископа Петра. 30 сентября — Первый молебен и церковное собрание',
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
