import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HelpCategories from '@site/src/components/HelpCategories';
import styles from './index.module.css';

function HeroBanner() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>How can we help?</h1>
        <p className={styles.heroSubtitle}>
          Browse guides, tutorials, and answers for DocJacket.
        </p>
        <Link className="button button--lg button--secondary" to="/docs/getting-started">
          Browse Documentation
        </Link>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Help Center"
      description="Find answers, guides, and tips for DocJacket — the AI-powered transaction coordination platform.">
      <HeroBanner />
      <main>
        <HelpCategories />
      </main>
    </Layout>
  );
}
