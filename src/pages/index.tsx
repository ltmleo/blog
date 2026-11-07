import type {CSSProperties} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LinkCard from '@site/src/components/LinkCard';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Section = {
  title: string;
  description: string;
  to: string;
  icon: string;
};

const sections: Section[] = [
  {
    title: 'Learning',
    description: 'Notas de estudo: Data Science, IA, Golang, OCI e livros.',
    to: '/learning',
    icon: '📚',
  },
  {
    title: 'Projects',
    description: 'Projetos pessoais, experimentos e ferramentas open source.',
    to: '/projects',
    icon: '🛠️',
  },
  {
    title: 'Blog',
    description: 'Reflexões, experiências e aprendizados ao longo da jornada.',
    to: '/blog/blog',
    icon: '✍️',
  },
];

const delay = (ms: number) => ({'--reveal-delay': `${ms}ms`}) as CSSProperties;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroInner}>
          <span className={styles.badge} data-reveal style={delay(0)}>
            {siteConfig.title} · Leonardo Montero
          </span>
          <Heading as="h1" className={styles.title} data-reveal style={delay(80)}>
            Um caderno aberto de{' '}
            <span className={styles.gradientText}>estudos, projetos e ideias</span>
          </Heading>
          <p className={styles.subtitle} data-reveal style={delay(160)}>
            Aqui registro o que estou aprendendo — Data Science, IA, Golang, cloud e livros —
            e compartilho projetos e reflexões da minha jornada. Tudo aberto, e qualquer
            pessoa pode contribuir.
          </p>
          <div className={styles.buttons} data-reveal style={delay(240)}>
            <Link className={`button button--lg ${styles.ctaPrimary}`} to="/learning">
              Explorar notas
            </Link>
            <Link className={`button button--lg ${styles.ctaSecondary}`} to="/blog/blog">
              Ler o blog →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function SectionCards() {
  return (
    <section className={styles.sections}>
      <div className="container">
        <div className={styles.sectionHeader} data-reveal>
          <span className={styles.eyebrow}>Explorar</span>
          <Heading as="h2" className={styles.sectionHeading}>
            Por onde começar
          </Heading>
        </div>
        <div className={styles.sectionGrid}>
          {sections.map(({title, description, to, icon}, i) => (
            <LinkCard
              key={title}
              to={to}
              title={title}
              icon={icon}
              description={description}
              revealDelayMs={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="ltmleo" description="Blog de LTMLEO">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <SectionCards />
      </main>
    </Layout>
  );
}
