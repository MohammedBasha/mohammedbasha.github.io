import { useI18n } from '@/lib/i18n';

const items = [
  'Magento 2',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Make.com',
  'API Integration',
  'eCommerce',
  'MERN Stack',
  'Automation',
  'Drupal',
  'WordPress',
];

export default function Marquee() {
  const { t } = useI18n();

  return (
    <div className="relative py-8 border-y border-border overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-xl md:text-3xl font-display font-bold text-muted-foreground/20 uppercase tracking-[0.1em] select-none"
          >
            {item}
            <span className="mx-8 text-primary/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
