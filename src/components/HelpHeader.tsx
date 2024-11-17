import styles from './HelpHeader.module.css';

interface HelpHeaderProps {
  theme: 'light' | 'dark';
}

export function HelpHeader({ theme }: HelpHeaderProps) {

  return (
    <div className={`${styles['header']} ${styles[theme]}`}>
      <div className={styles['ruler']} />
      <div className={styles['help-container']}>
        <span className={styles['int']}>
          ?
        </span>
        <span className={styles['help']}>
          Help
        </span>
      </div>
      <div className={styles['ruler']} />
    </div>
  );
}
