// ==========================================
// 1. HEADER SCROLL & MOBILE MENU
// ==========================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('smart-header');
    if (header && window.scrollY > 50) header.classList.add('scrolled');
    else if (header) header.classList.remove('scrolled');
});
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ==========================================
// 2. COMPLETE MULTI-LANGUAGE DICTIONARY 
// ==========================================
const translations = {
    en: {
        tagline: "VR University Event", nav_home: "Home", nav_about: "About", nav_features: "Features", nav_contact: "Contact", reg_btn: "Register",
        global_title: "GLOBAL VR University EVENT", hero_1: "STEP INTO THE FUTURE", hero_of: "of", hero_2: "ACADEMIA",
        description: "Ability to Develop Digital Skills: A high-performance VR/AR framework designed at the intersection of physical interaction and digital engineering.",
        btn_ala: "ADDS Registration", about_title: "ABOUT THE EVENT",
        about_desc_1: "Ability to Develop Digital Skills demonstrates how VR/AR design transforms any physical space into a responsive, interactive environment through logic-driven code.",
        about_subtitle_1: "Technical Core & Impact",
        about_desc_2: "<strong>Logic-Driven Immersion:</strong> Using C# and Python scripting to turn invisible concepts into tangible objects.",
        about_desc_3: "<strong>The Digital Sandbox:</strong> Allows for risk-free experimentation in a safe virtual environment.",
        about_desc_4: "<strong>Optimized Performance:</strong> Ensures 1:1 movement ratio, leading to 75% higher retention.",
        card_title: "PARTICIPATE & INNOVATE", card_desc: "Dive into an epic world of immersive gaming adventures!", btn_schedule: "EVENT SCHEDULE",
        features_title: "OUR FEATURES", feat_1_title: "VR DESIGN CHALLENGES", feat_1_item_1: "Architecture design support", feat_1_item_2: "Aerotechnic challenge",
        feat_2_title: "IMMERSIVE HAPTICS", feat_2_item_1: "Ultra high-end omni manipulation",
        feat_3_title: "CROSS-BORDER SYNC", feat_3_item_1: "Cloud based access from Paragon-site",
        partners_title: "OUR PARTNERS", partner_gd: "GameDev Club Ala-Too",
        info_title: "Contact Information", contact_location: "Bishkek, Kyrgyzstan", nav_partners: "Official Universities", uni_ala: "Ala-Too International University", uni_paragon: "Paragon University (Cambodia)",
        form_title: "Send us a Message", form_name_ph: "Your Name", form_email_ph: "Email Address", form_message_ph: "Tell us about your interest in the VR Event...", form_btn: "Send Message",
        footer_desc: "Global VR University Event. Synchronizing physical space with digital code through immersive technology.",
        footer_nav: "Navigation", footer_res: "Resources", res_guide: "Registration Guide", res_schedule: "Event Schedule", res_faq: "Technical FAQ",
        footer_rights: "&copy; 2026 ADDS - VR University Event. All rights reserved.", footer_privacy: "Privacy Policy", footer_terms: "Terms of Use"
    },
    ru: {
        tagline: "VR Университетское Событие", nav_home: "Главная", nav_about: "О нас", nav_features: "Функции", nav_contact: "Контакты", reg_btn: "Регистрация",
        global_title: "ГЛОБАЛЬНОЕ VR СОБЫТИЕ", hero_1: "ШАГНИТЕ В БУДУЩЕЕ", hero_of: "", hero_2: "АКАДЕМИИ",
        description: "Ability to Develop Digital Skills: Высокопроизводительная платформа VR/AR, разработанная на стыке физического взаимодействия и цифровой инженерии.",
        btn_ala: "Регистрация ADDS", about_title: "О МЕРОПРИЯТИИ",
        about_desc_1: "Ability to Develop Digital Skills демонстрирует, как дизайн VR/AR превращает любое физическое пространство в интерактивную среду с помощью кода.",
        about_subtitle_1: "Техническое Ядро и Влияние",
        about_desc_2: "<strong>Логическое погружение:</strong> Использование C# и Python для превращения концепций в осязаемые объекты.",
        about_desc_3: "<strong>Цифровая песочница:</strong> Позволяет проводить безопасные эксперименты в виртуальной среде.",
        about_desc_4: "<strong>Оптимизация:</strong> Обеспечивает соотношение движений 1:1, увеличивая удержание на 75%.",
        card_title: "УЧАСТВУЙ И СОЗДАВАЙ", card_desc: "Погрузитесь в эпический мир захватывающих игровых приключений!", btn_schedule: "РАСПИСАНИЕ",
        features_title: "НАШИ ВОЗМОЖНОСТИ", feat_1_title: "VR ДИЗАЙН", feat_1_item_1: "Поддержка архитектурного дизайна", feat_1_item_2: "Аэротехнические задачи",
        feat_2_title: "ИММЕРСИВНАЯ ТАКТИЛЬНОСТЬ", feat_2_item_1: "Ультрасовременные манипуляции",
        feat_3_title: "СИНХРОНИЗАЦИЯ", feat_3_item_1: "Облачный доступ с сайта Paragon",
        partners_title: "НАШИ ПАРТНЕРЫ", partner_gd: "GameDev Club Ala-Too",
        info_title: "Контактная информация", contact_location: "Бишкек, Кыргызстан", nav_partners: "Официальные Университеты", uni_ala: "Международный Университет Ала-Тоо", uni_paragon: "Paragon University (Камбоджа)",
        form_title: "Отправьте нам сообщение", form_name_ph: "Ваше Имя", form_email_ph: "Эл. Почта", form_message_ph: "Расскажите нам о вашем интересе к VR событию...", form_btn: "Отправить",
        footer_desc: "Глобальное VR Университетское Событие. Синхронизация физического пространства с цифровым кодом.",
        footer_nav: "Навигация", footer_res: "Ресурсы", res_guide: "Гайд по регистрации", res_schedule: "Расписание событий", res_faq: "Технический FAQ",
        footer_rights: "&copy; 2026 ADDS - VR Университетское Событие. Все права защищены.", footer_privacy: "Политика конфиденциальности", footer_terms: "Условия использования"
    },
    ky: {
        tagline: "VR Университет Иш-чарасы", nav_home: "Башкы", nav_about: "Биз жөнүндө", nav_features: "Өзгөчөлүктөр", nav_contact: "Байланыш", reg_btn: "Каттоо",
        global_title: "ГЛОБАЛДЫК VR ИШ-ЧАРАСЫ", hero_1: "КЕЛЕЧЕККЕ КАДАМ", hero_of: "", hero_2: "ТАШТАҢЫЗ",
        description: "Ability to Develop Digital Skills: Физикалык өз ара аракеттенүү жана санариптик инженериянын кесилишинде иштелип чыккан жогорку натыйжалуу VR/AR алкагы.",
        btn_ala: "ADDS Каттоо", about_title: "ИШ-ЧАРА ЖӨНҮНДӨ",
        about_desc_1: "Ability to Develop Digital Skills VR/AR дизайны физикалык мейкиндикти код аркылуу интерактивдүү чөйрөгө кантип айландырарын көрсөтөт.",
        about_subtitle_1: "Техникалык Негиз жана Таасир",
        about_desc_2: "<strong>Логикалык чөмүлүү:</strong> C# жана Python аркылуу концепцияларды реалдуу объекттерге айландыруу.",
        about_desc_3: "<strong>Санариптик кумкоргон:</strong> Виртуалдык чөйрөдө коопсуз эксперименттерди жүргүзүүгө мүмкүндүк берет.",
        about_desc_4: "<strong>Оптималдаштыруу:</strong> Кыймылдын 1:1 катышын камсыздап, катышууну 75% га жогорулатат.",
        card_title: "КАТЫШ ЖАНА ЖАРАТ", card_desc: "Кызыктуу оюн укмуштуу окуялар дүйнөсүнө чөмүлүңүз!", btn_schedule: "ЖҮГҮРТМӨ",
        features_title: "БИЗДИН ӨЗГӨЧӨЛҮКТӨР", feat_1_title: "VR ДИЗАЙН МАСЕЛЕЛЕРИ", feat_1_item_1: "Архитектуралык дизайнды колдоо", feat_1_item_2: "Аэротехникалык чакырык",
        feat_2_title: "ИММЕРСИВДҮҮ ТАКТИЛДИК", feat_2_item_1: "Ультра жогорку манипуляция",
        feat_3_title: "ЧЕК АРА СИНХРОНИЗАЦИЯСЫ", feat_3_item_1: "Paragon сайтынан булут аркылуу кирүү",
        partners_title: "БИЗДИН ӨНӨКТӨШТӨР", partner_gd: "GameDev Club Ala-Too",
        info_title: "Байланыш Маалыматы", contact_location: "Бишкек, Кыргызстан", nav_partners: "Расмий Университеттер", uni_ala: "Ала-Тоо Эл аралык Университети", uni_paragon: "Paragon University (Камбоджа)",
        form_title: "Бизге билдирүү жөнөтүңүз", form_name_ph: "Сиздин Атыңыз", form_email_ph: "Электрондук Почта", form_message_ph: "VR иш-чарасына болгон кызыгууңуз жөнүндө айтып бериңиз...", form_btn: "Жөнөтүү",
        footer_desc: "Глобалдык VR Университет Иш-чарасы. Физикалык мейкиндикти санариптик код менен синхрондоштуруу.",
        footer_nav: "Навигация", footer_res: "Ресурстар", res_guide: "Каттоо боюнча колдонмо", res_schedule: "Иш-чаралардын графиги", res_faq: "Техникалык FAQ",
        footer_rights: "&copy; 2026 ADDS - VR Университет Иш-чарасы. Бардык укуктар корголгон.", footer_privacy: "Купуялык саясаты", footer_terms: "Колдонуу шарттары"
    },
    km: {
        tagline: "ព្រឹត្តិការណ៍សាកលវិទ្យាល័យ VR", nav_home: "ផ្ទះ", nav_about: "អំពីយើង", nav_features: "លក្ខណៈពិសេស", nav_contact: "ទំនាក់ទំនង", reg_btn: "ចុះឈ្មោះ",
        global_title: "ព្រឹត្តិការណ៍ VR សកល", hero_1: "បោះជំហានទៅកាន់អនាគត", hero_of: "", hero_2: "នៃបណ្ឌិត្យសភា",
        description: "Ability to Develop Digital Skills: ក្របខ័ណ្ឌ VR/AR ដែលមានប្រសិទ្ធភាពខ្ពស់ត្រូវបានរចនាឡើងនៅចំនុចប្រសព្វនៃអន្តរកម្មរូបវន្ត និងវិស្វកម្មឌីជីថល។",
        btn_ala: "ការចុះឈ្មោះ ADDS", about_title: "អំពីព្រឹត្តិការណ៍",
        about_desc_1: "Ability to Develop Digital Skills បង្ហាញពីរបៀបដែលការរចនា VR/AR ផ្លាស់ប្តូរកន្លែងណាមួយទៅជាបរិស្ថានអន្តរកម្មតាមរយៈកូដ។",
        about_subtitle_1: "បច្ចេកវិទ្យា និងផលប៉ះពាល់",
        about_desc_2: "<strong>ការជ្រមុជទឹកដោយតក្កវិជ្ជា:</strong> ការប្រើប្រាស់ C# និង Python ដើម្បីប្រែក្លាយគំនិតទៅជាវត្ថុជាក់ស្តែង។",
        about_desc_3: "<strong>পারফরমেន্স:</strong> অনুমতি দেয় নিরাপদে পরীক্ষা করতে পারেন।",
        about_desc_4: "<strong>ដំណើរការប្រសើរឡີ່:</strong> ធານານິວສຳລັບສຳລັບການຮັກສາການເຄຶ່ອນໄຫວ 1:1 ທີ່ໃຫ້ມີການຮັກສາທີ່ສູງຂຶ້ນຈາກ 75%.",
        card_title: "ចូលរួម និងច្នៃប្រឌិត", card_desc: "ចូលទៅក្នុងពិភពវីរភាពនៃការលេងហ្គេមដ៏អស្ចារ្យ!", btn_schedule: "កាលវិភាគព្រឹត្តិការណ៍",
        features_title: "លក្ខណៈពិសេសរបស់យើង", feat_1_title: "ការរចនា VR", feat_1_item_1: "ការគាំទ្រការរចនាស្ថាបត្យកម្ម", feat_1_item_2: "បញ្ហាប្រឈមផ្នែកអាកាស",
        feat_2_title: "ការប៉ះដ៏អស្ចារ្យ", feat_2_item_1: "ការគ្រប់គ្រងកម្រិតខ្ពស់",
        feat_3_title: "ការធ្វើសមកាលកម្ម", feat_3_item_1: "ការចូលប្រើប្រាស់ពី Paragon",
        partners_title: "ដៃគូរបស់យើង", partner_gd: "GameDev Club Ala-Too",
        info_title: "ព័ត៌មានទំនាក់ទំនង", contact_location: "ប៊ីស្កេក ប្រទេសកៀហស៊ីស្ថាន", nav_partners: "សាកលវិទ្យាល័យផ្លូវការ", uni_ala: "សាកលវិទ្យាល័យអនតរជាৎអាធូ", uni_paragon: "សាកលវិទ្យាល័យផារ៉ាហន (កម্পুচা)",
        form_title: "ផ្ញើសារមកយើង", form_name_ph: "ឈ្មោះ​របស់​អ្នក", form_email_ph: "អ៊ីមែល", form_message_ph: "ប្រាប់យើងពីចំណាប់អារម្មណ៍របស់អ្នកចំពោះព្រឹត្តិការណ៍ VR...", form_btn: "ផ្ញើសារ",
        footer_desc: "ព្រឹត្តិការណ៍សាកលវិទ្យាល័យ VR សកល។ ការធ្វើសមកាលកម្មលំហរូបវន្តជាមួយកូដឌីជីថល។",
        footer_nav: "ការរុករក", footer_res: "ធនធាន", res_guide: "ការណែនាំអំពីការចុះឈ្មោះ", res_schedule: "កាលវិភាគ", res_faq: "សំណួរគេសួរញឹកញាប់",
        footer_rights: "&copy; 2026 ADDS - ព្រឹត្តិការណ៍សាកលវិទ្យាល័យ VR។ រក្សា​រ​សិទ្ធ​គ្រប់យ៉ាង។", footer_privacy: "គោលការណ៍​ភាព​ឯកជន", footer_terms: "លក្ខខណ្ឌនៃការប្រើប្រាស់"
    }
};

// ==========================================
// 3. LANGUAGE SWITCHER LOGIC
// ==========================================
const updateLanguage = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            if (el.hasAttribute('placeholder')) {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
};

const langSelect = document.getElementById('lang-select');
if (langSelect) {
    langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));
}

// ==========================================
// 4. FORM SUBMISSION MOCKUP
// ==========================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert("Thank you!");
        e.target.reset(); 
    });
}

// Initialize default language on load
window.addEventListener('DOMContentLoaded', () => {
    const defaultLang = langSelect ? langSelect.value : 'en';
    updateLanguage(defaultLang);
});