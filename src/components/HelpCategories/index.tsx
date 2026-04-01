import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Category = {
  title: string;
  description: string;
  link: string;
};

const categories: Category[] = [
  {
    title: 'Getting Started',
    description: 'Set up your account and learn the basics.',
    link: '/docs/getting-started',
  },
  {
    title: 'Transactions',
    description: 'Manage deals from contract to closing.',
    link: '/docs/transactions',
  },
  {
    title: 'Documents',
    description: 'Upload, organize, and share files.',
    link: '/docs/documents',
  },
  {
    title: 'AI Features',
    description: 'Contract extraction, smart timelines, and more.',
    link: '/docs/ai-features',
  },
  {
    title: 'Messages & Email',
    description: 'Communicate with your team and clients.',
    link: '/docs/messages',
  },
  {
    title: 'Tasks',
    description: 'Track action items and checklists.',
    link: '/docs/tasks',
  },
  {
    title: 'Calendar & Deadlines',
    description: 'Never miss a milestone or key date.',
    link: '/docs/calendar',
  },
  {
    title: 'Client Portal',
    description: 'Give clients a branded view of their transaction.',
    link: '/docs/client-portal',
  },
  {
    title: 'Integrations',
    description: 'Connect with Google, Outlook, Dotloop, and more.',
    link: '/docs/integrations',
  },
];

function CategoryCard({title, description, link}: Category) {
  return (
    <Link to={link} className={clsx(styles.card)}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}

export default function HelpCategories(): React.JSX.Element {
  return (
    <section className={styles.categories}>
      <div className="container">
        <div className={styles.grid}>
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
