import styles from './styles.module.css';

interface Props {
  children: string;
}

export default function VideoPlaceholder({children}: Props): React.JSX.Element {
  return (
    <div className={styles.placeholder}>
      <div className={styles.icon}>🎬</div>
      <div className={styles.text}>{children}</div>
      <div className={styles.badge}>Video coming soon</div>
    </div>
  );
}
