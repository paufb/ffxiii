import { useEffect, useState } from 'react';
import styles from '../pages/InventoryPage.module.css';
import { Weapon } from '../types.ts';
import { StarIcon } from './StarIcon.tsx';
import { CheckmarkIcon } from './CheckmarkIcon.tsx';
import { Cursor } from './Cursor.tsx';

export function WeaponsInventory() {
  const [weapons, setWeapons] = useState<{ [key: string]: Weapon }>({});
  const [selectedWeaponKey, setSelectedWeaponKey] = useState<string>();
  const equippedWeapons = ['Blazefire Saber', 'Vega 42s', 'Wild Bear', 'Airwing', 'Binding Rod', 'Bladed Lance'];

  useEffect(() => {
    import('../data/weaponsData.ts').then(weaponsModule => {
      const entries = Object.entries(weaponsModule.weaponsData);
      for (let i = 0; i < entries.length; i += 6) {
        [entries[i + 1], entries[i + 3]] = [entries[i + 3], entries[i + 1]];
        [entries[i + 2], entries[i + 3]] = [entries[i + 3], entries[i + 2]];
        [entries[i + 3], entries[i + 4]] = [entries[i + 4], entries[i + 3]];
      }
      const sortedEntries = Object.fromEntries(entries);
      setWeapons(sortedEntries);
    });
  }, []);

  function renderLevelStar(weaponNameKey: string) {
    return equippedWeapons.includes(weaponNameKey) ? <StarIcon /> : null;
  }

  function renderEquippedCheckmark(weaponNameKey: string) {
    return equippedWeapons.includes(weaponNameKey) ? <CheckmarkIcon /> : null;
  }

  return (
    <div className={styles['table-container']}>
      <div className={styles['item-description']}>
        {selectedWeaponKey ? weapons[selectedWeaponKey].description : 'View weapons in the party inventory.'}
      </div>
      <div className={styles['ruler-one']} />
      <div className={styles['ruler-two']} />
      <div className={`${styles['ruler-title']} ${styles['start']} outlined`}>
        Inventory
      </div>
      <div className={`${styles['ruler']} outlined`} />
      <table className={styles['table']}>
        <colgroup>
          <col />
          <col style={{ width: '2.5rem' }} />
          <col />
          <col style={{ width: '2.5rem' }} />
        </colgroup>
        <thead>
          <tr className={styles['table-header-row']}>
            <th><div className={styles['item-column-name']}>Item</div></th>
            <th><div className={styles['quantity-column-name']}>Equipped</div></th>
            <th />
            <th><div className={styles['quantity-column-name']}>Equipped</div></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(weapons).map(([weaponNameKey, _], index) => {
            const nextWeaponNameKey = Object.keys(weapons)[index + 1];
            if (index % 2 === 0) {
              return (
                <tr className={styles['table-row']} key={weaponNameKey + nextWeaponNameKey}>
                  <td onClick={() => setSelectedWeaponKey(weaponNameKey)}>
                    <div className={`${styles['item-name']} ${selectedWeaponKey === weaponNameKey ? styles["active"] : ""}`}>
                      <img className={styles['item-icon']} src={''} alt="" />
                      <Cursor className={styles['item-cursor']} animated={selectedWeaponKey === weaponNameKey} />
                      {weaponNameKey} {renderLevelStar(weaponNameKey)}
                    </div>
                  </td>
                  <td>
                    <div className={styles['item-quantity']}>
                      {renderEquippedCheckmark(weaponNameKey)}
                    </div>
                  </td>
                  <td onClick={() => setSelectedWeaponKey(nextWeaponNameKey)}>
                    <div className={`${styles['item-name']} ${selectedWeaponKey === nextWeaponNameKey ? styles["active"] : ""}`}>
                      <img className={styles['item-icon']} src={""} alt="" />
                      <Cursor className={styles['item-cursor']} animated={selectedWeaponKey === nextWeaponNameKey} />
                      {nextWeaponNameKey} {renderLevelStar(nextWeaponNameKey)}
                    </div>
                  </td>
                  <td>
                    <div className={styles['item-quantity']}>
                      {renderEquippedCheckmark(nextWeaponNameKey)}
                    </div>
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
