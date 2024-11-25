import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header

 className={clsx('hero')}
style={{
  backgroundImage: 'url(/E3Lineamientos/img/kiosk.png)',
  backgroundSize: 'contain',         // Cambia "cover" por "contain" para mostrar la imagen completa
  backgroundPosition: 'center center', 
  backgroundRepeat: 'no-repeat',     // Evita que la imagen se repita
  height: '900px',                   // Ajusta según lo necesites
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',              // Esto permitirá agregar una superposición si lo deseas
}}
>




      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            E3-Lineamientos - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`E3-Lineamientos ${siteConfig.title}`}
      description="Lineamientos generales<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
