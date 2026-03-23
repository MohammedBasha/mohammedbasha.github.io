export interface Testimonial {
    name: { en: string; ar: string };
    role: { en: string; ar: string };
    content: { en: string; ar: string };
    lang: "en" | "ar" | "both";
    rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        name: { en: "", ar: "مانع" },
        role: { en: "", ar: "عميل من مستقل" },
        content: {
            en: "",
            ar: "شخص مهتم ومحترف والله يبارك له",
        },
        lang: "ar",
        rating: 5,
    },
    {
        name: { en: "Ayman", ar: "Ayman" },
        role: {
            en: "",
            ar: "عميل من مستقل",
        },
        content: {
            en: "",
            ar: "استاذ محمد متعاون جدا ومحترف في عمله ومهتم بالتفاصيل وارشح بشدة العمل معه",
        },
        lang: "ar",
        rating: 5,
    },
    {
        name: { en: "Omar Farouq", ar: "Omar" },
        role: {
            en: "",
            ar: "عميل من مستقل",
        },
        content: {
            en: "",
            ar: "انجاز المشروع وفق المطلوب، تواصل ممتاز، خبرة في المجال ماشاء الله",
        },
        lang: "ar",
        rating: 4.5,
    },
    {
        name: { en: "Fahad", ar: "Fahad" },
        role: {
            en: "",
            ar: "عميل من مستقل",
        },
        content: {
            en: "",
            ar: "أود أن أعبر عن كامل امتناني وشكري لك، استاذ محمد، على العمل الرائع الذي قمت به في إنشاء الموقع. لقد أظهرت مهاراتك الفنية والإبداعية في تحويل رؤيتي إلى واقع رقمي مدهش. .....",
        },
        lang: "ar",
        rating: 5,
    },
    {
        name: { en: "Qanas", ar: "Qanas" },
        role: {
            en: "",
            ar: "عميل من خمسات",
        },
        content: {
            en: "",
            ar: "تسلم ايدك شغل ممتاز",
        },
        lang: "ar",
        rating: 5,
    },
    {
        name: { en: "Muslim", ar: "Muslim" },
        role: {
            en: "",
            ar: "عميل من خمسات",
        },
        content: {
            en: "",
            ar: "مبدع ماجنتو منه انا تعلمت",
        },
        lang: "ar",
        rating: 5,
    },
    {
        name: { en: "Mohamed Eldimardash", ar: "" },
        role: {
            en: "Full-Stack Developer",
            ar: "",
        },
        content: {
            en: "Mohamed is very attentive and always provided extra material where I could learn, he does more than it's required ....",
            ar: "",
        },
        lang: "en",
        rating: 5,
    },
    {
        name: { en: "Ahmad Hattab", ar: "" },
        role: {
            en: "Technology Manager",
            ar: "",
        },
        content: {
            en: "Mohammed is a talented Frontend Developer and great to work with. Not only is he an amazing developer but he has great final touches. ....",
            ar: "",
        },
        lang: "en",
        rating: 5,
    },
    {
        name: { en: "Elsayed Kerkesh", ar: "" },
        role: {
            en: "Full Stack Web Developer",
            ar: "",
        },
        content: {
            en: "I highly recommend Mohamed Basha as a Senior Frontend Developer I worked with him on the same team, and he is skilled ....",
            ar: "",
        },
        lang: "en",
        rating: 5,
    },
    {
        name: { en: "Ehab Mohammed", ar: "" },
        role: {
            en: "Software QA Engineer",
            ar: "",
        },
        content: {
            en: "I highly recommend Mohammed as a Magento Frontend Developer. He has strong expertise in Magento 2, theme customization .....",
            ar: "",
        },
        lang: "en",
        rating: 5,
    },
    {
        name: { en: "pvf_xx", ar: "" },
        role: {
            en: "Fiverr client",
            ar: "",
        },
        content: {
            en: "I was very satisfied with the level of professionalism and attention to detail. I would recommend Mohammed.",
            ar: "",
        },
        lang: "en",
        rating: 5,
    },
];
