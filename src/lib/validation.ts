import { z } from "zod";
import type { Lang } from "@/lib/i18n";

export const createContactSchema = (lang: Lang) => {
    const messages = {
        nameMin:
            lang === "ar"
                ? "الاسم يجب أن يكون 2 أحرف على الأقل"
                : "Name must be at least 2 characters",
        nameMax: lang === "ar" ? "الاسم طويل جداً" : "Name too long",
        emailInvalid:
            lang === "ar"
                ? "عنوان بريد إلكتروني غير صحيح"
                : "Invalid email address",
        emailMax:
            lang === "ar" ? "البريد الإلكتروني طويل جداً" : "Email too long",
        messageMin:
            lang === "ar"
                ? "الرسالة يجب أن تكون 10 أحرف على الأقل"
                : "Message must be at least 10 characters",
        messageMax: lang === "ar" ? "الرسالة طويلة جداً" : "Message too long",
    };

    return z.object({
        name: z
            .string()
            .trim()
            .min(2, messages.nameMin)
            .max(100, messages.nameMax),
        email: z
            .string()
            .trim()
            .email(messages.emailInvalid)
            .max(255, messages.emailMax),
        message: z
            .string()
            .trim()
            .min(10, messages.messageMin)
            .max(2000, messages.messageMax),
    });
};
