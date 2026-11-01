import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Registros pessoais',
    Svg: require('@site/static/img/darthVader.svg').default,
    description: <>Aqui faço registros pessoais, para consultas futuras.</>,
  },
  {
    title: 'Compartilhar conhecimento',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        A ideia também é aproveitar para compartilhar conhecimento e experiências que estou
        adquirindo ao longo da minha jornada.
      </>
    ),
  },
  {
    title: 'Todos podem contribuir',
    Svg: require('@site/static/img/rick.svg').default,
    description: <>Um pouco de tudo, onde todos podem contribuir.</>,
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureArt}>
        <Svg className={styles.featureSvg} role="img" aria-label={title} />
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Sobre</span>
          <Heading as="h2" className={styles.heading}>
            Um caderno de notas aberto
          </Heading>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
