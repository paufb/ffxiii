import { NavLink } from 'react-router-dom';
import { Character, MainMenuCategory } from '../types.ts';
import CursorIcon from '../assets/FFXIII_Pointer_White_BG.webp';
import styles from './MainMenu.module.css';
import pageAnimations from './page-animations.module.css';

export function MainMenuPage() {
  const categoryRoutes: { [key in MainMenuCategory]: string } = {
    'Inventory': '/inventory',
    'Datalog': '/datalog'
  };
  const charactersInfo: { [key in Character]: { role?: string, hp: number, cp: number, imgURL: string } } = {
    'Lightning': { role: 'Commando', hp: 3000, cp: 0, imgURL: new URL('../assets/Lightning.png', import.meta.url).href },
    'Vanille': { role: 'Medic', hp: 3000, cp: 0, imgURL: new URL('../assets/Vanille.png', import.meta.url).href },
    'Fang': { role: 'Ravager', hp: 3000, cp: 0, imgURL: new URL('../assets/Fang.png', import.meta.url).href },
    'Snow': { hp: 3000, cp: 0, imgURL: new URL('../assets/Snow.png', import.meta.url).href },
    'Sazh': { hp: 3000, cp: 0, imgURL: new URL('../assets/Sazh.png', import.meta.url).href },
    'Hope': { hp: 3000, cp: 0, imgURL: new URL('../assets/Hope.png', import.meta.url).href }
  };

  return (
    <div className={styles['page']}>
      <div className={`${styles['categories-container']} ${pageAnimations['fade-in-from-left']}`}>
        <div className={`${styles['ruler-title']} ${styles['end']}`}>
          Main Menu
        </div>
        <div className={styles['ruler']} />
        <ul className={styles['categories']}>
          {Object.entries(categoryRoutes).map(([categoryName, route]) => (
            <li key={categoryName} className={styles['category']}>
              <img className={styles['category-cursor']} src={CursorIcon} alt="" />
              <NavLink to={route}>
                {categoryName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {Object.entries(charactersInfo).map(([characterName, character], index) => (
        <div
          className={`${styles['character-card']} ${styles[`character-card--${characterName.toLowerCase()}`]} ${pageAnimations['fade-in-from-top']}`}
          style={{ animationFillMode: 'backwards', animationDelay: `${index / 10}s` }}
        >
          <img src={character.imgURL} />
          {/* {character.hp}
          {character.cp} */}
        </div>
      ))}
    </div>
  );
}
