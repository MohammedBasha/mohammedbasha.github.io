import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 start-6 z-50 w-12 h-12 rounded-full border border-border bg-card/90 backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
