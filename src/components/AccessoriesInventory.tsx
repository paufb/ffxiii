import { useEffect, useState } from 'react';
import { Accessory } from '../types.ts';
import { Cursor } from './Cursor.tsx';
import styles from '../pages/InventoryPage.module.css';

interface AccessoriesInventoryProps {
  setHelpHeaderText: Function;
}

export function AccessoriesInventory({ setHelpHeaderText }: AccessoriesInventoryProps) {
  const [accessories, setAccessories] = useState<{ [key: string]: Accessory }>({});
  const [selectedAccessoryKey, setSelectedAccessoryKey] = useState<string>();

  useEffect(() => {
    import('../data/accessoriesData.ts').then(accessoriesModule => {
      const entries = Object.entries(accessoriesModule.accessoriesData);
      for (let i = 0; i < entries.length; i += 6) {
        [entries[i + 1], entries[i + 3]] = [entries[i + 3], entries[i + 1]];
        [entries[i + 2], entries[i + 3]] = [entries[i + 3], entries[i + 2]];
        [entries[i + 3], entries[i + 4]] = [entries[i + 4], entries[i + 3]];
      }
      const sortedEntries = Object.fromEntries(entries);
      setAccessories(sortedEntries);
    });
  }, []);

  function handleOnClickAccessory(accessoryKey: string) {
    setSelectedAccessoryKey(accessoryKey);
    setHelpHeaderText(accessories[accessoryKey].effect);
  }

  return (
    <div className={styles['table-container']}>
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
          {Object.entries(accessories).map(([accessoryKey, _], index) => {
            const nextAccessoryKey = Object.keys(accessories)[index + 1];
            if (index % 2 === 0) {
              return (
                <tr className={styles['table-row']} key={accessoryKey + nextAccessoryKey}>
                  <td onClick={() => handleOnClickAccessory(accessoryKey)}>
                    <div className={`${styles['item-name']} ${selectedAccessoryKey === accessoryKey ? styles["active"] : ""}`}>
                      <img className={styles['item-icon']} src={''} alt="" />
                      <Cursor className={styles['item-cursor']} animated={selectedAccessoryKey === accessoryKey} />
                      {`${accessoryKey} Lv. 1`}
                    </div>
                  </td>
                  <td>
                    <div className={styles['item-quantity']}>
                    </div>
                  </td>
                  <td onClick={() => handleOnClickAccessory(nextAccessoryKey)}>
                    <div className={`${styles['item-name']} ${selectedAccessoryKey === nextAccessoryKey ? styles["active"] : ""}`}>
                      <img className={styles['item-icon']} src={""} alt="" />
                      <Cursor className={styles['item-cursor']} animated={selectedAccessoryKey === nextAccessoryKey} />
                      {`${nextAccessoryKey} Lv. 1`}
                    </div>
                  </td>
                  <td>
                    <div className={styles['item-quantity']}>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
