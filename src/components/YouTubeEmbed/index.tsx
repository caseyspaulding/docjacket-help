import styles from './styles.module.css';

interface Props {
  id: string;
  title: string;
}

export default function YouTubeEmbed({id, title}: Props): React.JSX.Element {
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
