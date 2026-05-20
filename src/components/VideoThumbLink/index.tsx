import styles from './styles.module.css';

interface Props {
  youtubeId: string;
  title: string;
  subtitle?: string;
}

export default function VideoThumbLink({youtubeId, title, subtitle}: Props): React.JSX.Element {
  const href = `https://www.youtube.com/watch?v=${youtubeId}`;
  const thumbSrc = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <a className={styles.wrapper} href={href} target="_blank" rel="noopener" aria-label={title}>
      <img className={styles.img} src={thumbSrc} alt="" loading="lazy" />
      <div className={styles.overlay}>
        <div className={styles.play} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      </div>
    </a>
  );
}
