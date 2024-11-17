import { NavLink } from 'react-router-dom';
import { Character, MainMenuCategory, Role } from '../types.ts';
import CursorIcon from '../assets/FFXIII_Pointer_White_BG.webp';
import PartyLeaderIcon from '../assets/Leader-ffxiii-icon.png';
import styles from './MainMenu.module.css';
import pageAnimations from './page-animations.module.css';

export function MainMenuPage() {
  const categoryRoutes: { [key in MainMenuCategory]: string } = {
    'Inventory': '/inventory',
    'Datalog': '/datalog'
  };
  const charactersInfo: { [key in Character]: { role?: Role, imgURL: string } } = {
    'Lightning': { role: 'Commando', imgURL: new URL('../assets/Lightning.png', import.meta.url).href },
    'Vanille': { role: 'Medic', imgURL: new URL('../assets/Vanille.png', import.meta.url).href },
    'Fang': { role: 'Ravager', imgURL: new URL('../assets/Fang.png', import.meta.url).href },
    'Snow': { imgURL: new URL('../assets/Snow.png', import.meta.url).href },
    'Sazh': { imgURL: new URL('../assets/Sazh.png', import.meta.url).href },
    'Hope': { imgURL: new URL('../assets/Hope.png', import.meta.url).href }
  };

  function renderRole(role: Role | undefined) {
    if (!role) return;
    const roleColors: Record<Role, string> = {
      'Commando': 'red',
      'Ravager': 'rgb(133, 145, 194)',
      'Sentinel': 'yellow',
      'Saboteur': 'gray',
      'Synergist': 'purple',
      'Medic': 'rgb(204, 255, 204)'
    };
    return (
      <div
        className={`${styles['character-card-role']} outlined`}
        style={{
          background: `-webkit-linear-gradient(${roleColors[role]} -80%, white 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {role?.slice(0, 3)}
      </div>
    );
  }

  function renderPartyStatus(index: number) {
    return index >= 0 && index <= 2 && (
      <div className={styles['character-card-party-status']}>
        <span className="outlined">
          {index === 0 ? 'Leader' : index === 1 || index === 2 ? 'Member' : null}
        </span>
        <img src={PartyLeaderIcon} style={{ filter: `grayscale(${index === 0 ? '0' : '1'})` }} />
      </div>
    );
  }

  return (
    <div className={styles['page']}>
      <div className={`${styles['categories-container']} ${pageAnimations['fade-in-from-left']}`}>
        <div className={`${styles['ruler-title']} ${styles['end']} outlined`}>
          Main Menu
        </div>
        <div className={`${styles['ruler']} outlined`} />
        <ul className={styles['categories']}>
          {Object.entries(categoryRoutes).map(([categoryName, route]) => (
            <li key={categoryName} className={styles['category']}>
              <img className={styles['category-cursor']} src={CursorIcon} alt="" />
              <NavLink to={route}>
                <span className="outlined">{categoryName}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {Object.entries(charactersInfo).map(([characterName, character], index) => (
        <div
          key={characterName}
          className={`${styles['character-card']} ${styles[`character-card--${characterName.toLowerCase()}`]} ${!character?.role ? styles['character-card-grayscale'] : ''} ${pageAnimations['fade-in-from-top']}`}
          style={{ animationFillMode: 'backwards', animationDelay: `${index / 10}s` }}
        >
          <img src={character.imgURL} />
          {renderRole(character.role)}
          {renderPartyStatus(index)}
          <div className={`${styles['character-card-stats']} outlined`}>
            <div className={styles['character-card-hp-label']}>HP</div>
            <div className={styles['character-card-value']}>{Math.round(3000 * (1 + (Math.random() * 0.6 - 0.3)))}</div>
            <div className={styles['character-card-cp-label']}>CP</div>
            <div className={styles['character-card-value']}>0</div>
          </div>
        </div>
      ))}
    </div>
  );
}
