import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/contact";
import { useState, useEffect } from "react";
import { trackEvent } from "./Analytics";

export default function WhatsAppButton() {
    const [pulseCount, setPulseCount] = useState(0);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        if (pulseCount >= 6) return;

        const interval = setInterval(() => {
            setIsPulsing(true);
            setTimeout(() => setIsPulsing(false), 1000); // Pulse duration
            setPulseCount((prev) => prev + 1);
        }, 5000); // Every 5 seconds

        return () => clearInterval(interval);
    }, [pulseCount]);

    return (
        <AnimatePresence>
            <motion.a
                href={CONTACT.whatsapp}
                onClick={() => trackEvent("contact_click", "WhatsApp Button")}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{
                    scale: isPulsing ? [1, 1.2, 1] : 1,
                }}
                transition={{
                    delay: 2,
                    type: "spring",
                    stiffness: 200,
                    scale: isPulsing
                        ? {
                              duration: 1,
                              ease: "easeInOut",
                              repeat: 0,
                          }
                        : undefined,
                }}
                className="fixed bottom-6 end-6 z-50 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle
                    className="w-6 h-6 text-primary-foreground"
                    strokeWidth={2.3}
                />
                <span className="absolute -top-1 -end-1 w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            </motion.a>
        </AnimatePresence>
    );
}
