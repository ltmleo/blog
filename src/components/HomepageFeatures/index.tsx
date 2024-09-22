import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Registros pessoais',
    Svg: require('@site/static/img/darthVader.svg').default,
    description: (
      <>
      Aqui faço registros pessoais, para consultas futuras.
      </>
    ),
  },
  {
    title: 'Compartilhar conhecimento',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        A ideia também é aproveitar para compartilhar conhecimento e experiências que estou adquirindo ao longo da minha jornada.
      </>
    ),
  },
  {
    title: 'Todos podem contribuir',
    Svg: require('@site/static/img/rick.svg').default,
    description: (
      <>
        Um pouco de tudo, onde todos podem contribuir.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
