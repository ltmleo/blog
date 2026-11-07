import type {CSSProperties, ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Props = {
  to: string;
  title: string;
  icon: string;
  description?: ReactNode;
  meta?: string;
  /** Stagger for the scroll-reveal animation. */
  revealDelayMs?: number;
};

/** Card used on the homepage and on section index pages. */
export default function LinkCard({to, title, icon, description, meta, revealDelayMs = 0}: Props) {
  return (
    <Link
      to={to}
      className={styles.card}
      data-reveal
      style={{'--reveal-delay': `${revealDelayMs}ms`} as CSSProperties}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <Heading as="h3" className={styles.title}>
        {title}
      </Heading>
      {description && <p className={styles.description}>{description}</p>}
      {meta && <span className={styles.meta}>{meta}</span>}
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}
