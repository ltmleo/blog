import type {CSSProperties, ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const illustrations = {
  vader: require('@site/static/img/darthVader.svg').default,
  rocket: require('@site/static/img/rocket.svg').default,
  rick: require('@site/static/img/rick.svg').default,
} as const;

type Props = {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
} & (
  | {illustration: keyof typeof illustrations; icon?: never}
  | {icon: string; illustration?: never}
);

/**
 * Header for section index pages. Use with `hide_title: true` in the doc's
 * front matter, since this renders the page <h1>.
 */
export default function PageHero({title, eyebrow, children, illustration, icon}: Props) {
  const Svg = illustration ? illustrations[illustration] : null;
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.text} data-reveal>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <Heading as="h1" className={styles.title}>
          {title}
        </Heading>
        {children && <div className={styles.description}>{children}</div>}
      </div>
      <div
        className={Svg ? styles.art : styles.iconArt}
        aria-hidden="true"
        data-reveal
        style={{'--reveal-delay': '120ms'} as CSSProperties}>
        {Svg ? <Svg className={styles.svg} /> : <span className={styles.emoji}>{icon}</span>}
      </div>
    </header>
  );
}
