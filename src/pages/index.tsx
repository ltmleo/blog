import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
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

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroInner}>
          <img
            className={styles.avatar}
            src="https://github.com/ltmleo.png"
            alt="Leonardo Montero"
            width={96}
            height={96}
          />
          <span className={styles.badge}>Leonardo Montero · Personal blog</span>
          <Heading as="h1" className={styles.title}>
            <span className={styles.gradientText}>{siteConfig.title}</span>
          </Heading>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={`button button--primary button--lg ${styles.ctaPrimary}`} to="/blog/blog">
              Leia meu blog
            </Link>
            <Link className={`button button--lg ${styles.ctaSecondary}`} to="/learning">
              Explorar notas →
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
        <div className={styles.sectionGrid}>
          {sections.map(({title, description, to, icon}) => (
            <Link key={title} to={to} className={styles.sectionCard}>
              <span className={styles.sectionIcon} aria-hidden="true">
                {icon}
              </span>
              <Heading as="h3" className={styles.sectionTitle}>
                {title}
              </Heading>
              <p className={styles.sectionDescription}>{description}</p>
              <span className={styles.sectionArrow} aria-hidden="true">
                →
              </span>
            </Link>
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
        <SectionCards />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
