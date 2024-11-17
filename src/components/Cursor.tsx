import CursorIcon from '../assets/FFXIII_Pointer_White_BG.webp';
import styles from './Cursor.module.css';

interface CursorProps {
  className?: string;
  animated?: boolean;
}

export function Cursor({ className, animated }: CursorProps) {
  return (
    <div className={className}>
      <img
        className={animated ? styles['glide'] : ''}
        src={CursorIcon}
        alt=""
      />
    </div>
  );
}
