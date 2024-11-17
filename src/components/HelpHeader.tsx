import styles from './HelpHeader.module.css';
import pageAnimations from '../pages/page-animations.module.css';

interface HelpHeaderProps {
  theme: 'light' | 'dark';
}

export function HelpHeader({ theme }: HelpHeaderProps) {
  const outlinedClass = theme === 'light' ? 'outlined' : '';

  return (
    <div className={`${styles['header']} ${styles[theme]} ${pageAnimations['fade-in-from-top']}`}>
      <div className={`${styles['ruler']} ${outlinedClass}`} />
      <div className={styles['help-container']}>
        <span className={`${styles['int']} ${outlinedClass}`}>
          ?
        </span>
        <span className={`${styles['help']} ${outlinedClass}`}>
          Help
        </span>
      </div>
      <div className={`${styles['ruler']} ${outlinedClass}`} />
    </div>
  );
}
