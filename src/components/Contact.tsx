import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Linkedin,
    Github,
    Send,
    ArrowUpRight,
    AlertCircle,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/data/contact";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { trackEvent } from "./Analytics";

const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name too long"),
    email: z
        .string()
        .trim()
        .email("Invalid email address")
        .max(255, "Email too long"),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters")
        .max(2000, "Message too long"),
});

const MIN_SUBMIT_TIME_MS = 3000;

export default function Contact() {
    const { t, lang } = useI18n();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [inputf, setInputf] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");
    const [mountTime] = useState(Date.now());

    const validate = () => {
        const result = contactSchema.safeParse(formState);
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.errors.forEach((err) => {
                if (err.path[0])
                    fieldErrors[err.path[0] as string] = err.message;
            });
            setErrors(fieldErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (inputf) return;

        if (Date.now() - mountTime < MIN_SUBMIT_TIME_MS) {
            setStatus("error");
            return;
        }

        if (!validate()) return;

        setStatus("sending");

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey) {
                await emailjs.send(
                    serviceId,
                    templateId,
                    {
                        from_name: formState.name,
                        from_email: formState.email,
                        message: formState.message,
                        to_email: CONTACT.email,
                    },
                    publicKey,
                );
            } else {
                // Fallback to mailto
                const subject = encodeURIComponent(
                    `Portfolio Contact: ${formState.name}`,
                );
                const body = encodeURIComponent(
                    `From: ${formState.name} (${formState.email})\n\n${formState.message}`,
                );
                window.open(
                    `mailto:${CONTACT.email}?subject=${subject}&body=${body}`,
                    "_self",
                );
            }

            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const links = [
        { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
        { icon: Phone, label: CONTACT.phone, href: `tel:${CONTACT.phone}` },
        { icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin },
        { icon: Github, label: "GitHub", href: CONTACT.github },
    ];

    return (
        <section id="contact" className="section-spacing">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.25em] text-primary mb-6 block font-medium">
                        {t("Contact", "تواصل")}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05] max-w-2xl">
                        {t("Have a Project, Idea, ", "هل لديك مشروع أو فكرة ")}
                        <span className="text-primary">
                            {t("or System to Build?", "أو نظام ترغب في بنائه؟")}
                        </span>
                    </h2>
                    <p className="font-display mt-6">
                        {t(
                            "I help businesses build high-performance web applications, scalable eCommerce platforms, and automation systems.",
                            "أساعد الشركات في بناء تطبيقات ويب عالية الأداء، ومنصات تجارة إلكترونية قابلة للتطوير، وأنظمة أتمتة.",
                        )}
                    </p>
                    <p className="font-display">
                        {t(
                            "If you're looking to improve performance, automate workflows, or build a modern web product - let's talk.",
                            "إذا كنت تتطلع إلى تحسين الأداء، أو أتمتة سير العمل، أو بناء منتج ويب حديث - فلنتحدث.",
                        )}
                    </p>
                    <p className="font-display mt-10">
                        {t(
                            "Tell me about your project - I usually respond within 24 hours.",
                            "أخبرني عن مشروعك - عادةً ما أرد خلال 24 ساعة.",
                        )}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5"
                        noValidate
                    >
                        <input
                            type="text"
                            name="website"
                            value={inputf}
                            onChange={(e) => setInputf(e.target.value)}
                            className="absolute -left-[9999px] opacity-0 h-0 w-0"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                        />

                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder={t("Your Name *", "اسمك *")}
                                value={formState.name}
                                onChange={(e) => {
                                    setFormState({
                                        ...formState,
                                        name: e.target.value,
                                    });
                                    setErrors({ ...errors, name: "" });
                                }}
                                className={`w-full px-0 py-4 bg-transparent border-0 border-b text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none transition-colors duration-300 ${
                                    errors.name
                                        ? "border-destructive"
                                        : "border-border focus:border-primary"
                                }`}
                            />
                            {errors.name && (
                                <p className="flex items-center gap-1 text-xs text-destructive mt-1.5">
                                    <AlertCircle className="w-3 h-3" />{" "}
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder={t(
                                    "Your Email *",
                                    "بريدك الإلكتروني *",
                                )}
                                value={formState.email}
                                onChange={(e) => {
                                    setFormState({
                                        ...formState,
                                        email: e.target.value,
                                    });
                                    setErrors({ ...errors, email: "" });
                                }}
                                className={`w-full px-0 py-4 bg-transparent border-0 border-b text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none transition-colors duration-300 ${
                                    errors.email
                                        ? "border-destructive"
                                        : "border-border focus:border-primary"
                                }`}
                            />
                            {errors.email && (
                                <p className="flex items-center gap-1 text-xs text-destructive mt-1.5">
                                    <AlertCircle className="w-3 h-3" />{" "}
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                placeholder={t(
                                    "Briefly describe your project, goals, or the problem you're trying to solve... *",
                                    "صف بإيجاز مشروعك، أو أهدافك، أو المشكلة التي تحاول حلها... *",
                                )}
                                value={formState.message}
                                onChange={(e) => {
                                    setFormState({
                                        ...formState,
                                        message: e.target.value,
                                    });
                                    setErrors({ ...errors, message: "" });
                                }}
                                className={`w-full px-0 py-4 bg-transparent border-0 border-b text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none transition-colors duration-300 resize-none ${
                                    errors.message
                                        ? "border-destructive"
                                        : "border-border focus:border-primary"
                                }`}
                            />
                            {errors.message && (
                                <p className="flex items-center gap-1 text-xs text-destructive mt-1.5">
                                    <AlertCircle className="w-3 h-3" />{" "}
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            onClick={() =>
                                trackEvent(
                                    "contact_click",
                                    "Start a Conversation Button",
                                )
                            }
                            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:scale-105 transition-transform duration-300 mt-4 disabled:opacity-50 disabled:hover:scale-100"
                        >
                            <Send
                                className={`w-4 h-4 ${lang === "ar" ? "rotate-[-90deg]" : ""}`}
                                strokeWidth={1.5}
                            />
                            {status === "sending"
                                ? t("Sending...", "جاري الإرسال...")
                                : t("Start a Conversation", "ابدأ محادثة")}
                            <span
                                className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${lang === "ar" ? "rotate-[-180deg]" : ""}`}
                            >
                                →
                            </span>
                        </button>

                        {status === "success" && (
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-primary"
                            >
                                {t(
                                    "Message sent successfully!",
                                    "تم إرسال الرسالة بنجاح!",
                                )}
                            </motion.p>
                        )}
                        {status === "error" && (
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-destructive"
                            >
                                {t(
                                    "Something went wrong. Please try again.",
                                    "حدث خطأ. يرجى المحاولة مرة أخرى.",
                                )}
                            </motion.p>
                        )}
                    </motion.form>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-3"
                    >
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-glow"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                                        <link.icon
                                            className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                        {link.label}
                                    </span>
                                </div>
                                <ArrowUpRight
                                    className={`w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 ${lang === "ar" ? "rotate-[-90deg]" : ""}`}
                                />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
