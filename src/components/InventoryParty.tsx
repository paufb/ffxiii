import { Character } from '../types.ts';
import styles from '../pages/InventoryPage.module.css';

interface InventoryPartyProps {
  highlightedCharacter: Character | undefined;
}

export function InventoryParty({ highlightedCharacter }: InventoryPartyProps) {
  const charactersInfo: { [key in Character]: { imgURL: string } } = {
    'Lightning': { imgURL: new URL('../assets/Lightning.png', import.meta.url).href },
    'Vanille': { imgURL: new URL('../assets/Vanille.png', import.meta.url).href },
    'Fang': { imgURL: new URL('../assets/Fang.png', import.meta.url).href },
    'Snow': { imgURL: new URL('../assets/Snow.png', import.meta.url).href },
    'Sazh': { imgURL: new URL('../assets/Sazh.png', import.meta.url).href },
    'Hope': { imgURL: new URL('../assets/Hope.png', import.meta.url).href },
  };

  return (
    <div>
      <div className={`${styles['ruler-title']} outlined`}>
        Party
      </div>
      <div className={`${styles['ruler']} outlined`} />
      <div className={styles['party']}>
        {Object.entries(charactersInfo).map(([characterName, character]) => (
          <div className={`${styles['party-character']} ${styles[characterName.toLowerCase()]}`} key={characterName}>
            <img src={character.imgURL} className={highlightedCharacter !== characterName ? styles['greyscale'] : ''} />
          </div>
        ))}
      </div>
    </div>
  );
}
