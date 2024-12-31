import { useEffect, useState } from 'react';
import { KeyItem } from '../types.ts';
import { Cursor } from './Cursor.tsx';
import styles from '../pages/InventoryPage.module.css';

interface KeyItemsInventoryProps {
  setHelpHeaderText: Function;
}

export function KeyItemsInventory({ setHelpHeaderText }: KeyItemsInventoryProps) {
  const [keyItems, setKeyItems] = useState<{ [key: string]: KeyItem }>({});
  const [selectedKeyItemKey, setSelectedKeyItemKey] = useState<string>();

  useEffect(() => {
    import('../data/keyItemsData.ts').then(keyItemsModule => setKeyItems(keyItemsModule.keyItemsData));
  }, []);

  function handleOnClickKeyItem(keyItemKey: string) {
    setSelectedKeyItemKey(keyItemKey);
    setHelpHeaderText(keyItems[keyItemKey].description);
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
            <th><div className={styles['quantity-column-name']}>Quantity</div></th>
            <th />
            <th><div className={styles['quantity-column-name']}>Quantity</div></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(keyItems).map(([keyItemKey, _], index) => {
            const nextKeyItemKey = Object.keys(keyItems)[index + 1];
            if (index % 2 === 0) {
              return (
                <tr className={styles['table-row']} key={keyItemKey + nextKeyItemKey}>
                  <td onClick={() => handleOnClickKeyItem(keyItemKey)}>
                    <div className={`${styles['item-name']} ${selectedKeyItemKey === keyItemKey ? styles['active'] : ''}`}>
                      <img className={styles['item-icon']} src={''} alt="" />
                      <Cursor className={styles['item-cursor']} animated={selectedKeyItemKey === keyItemKey} />
                      {keyItemKey}
                    </div>
                  </td>
                  <td>
                    <div className={styles['item-quantity']}>
                      01
                    </div>
                  </td>
                  <td onClick={() => handleOnClickKeyItem(nextKeyItemKey)}>
                    <div className={`${styles['item-name']} ${selectedKeyItemKey === nextKeyItemKey ? styles["active"] : ""}`}>
                      <img className={styles['item-icon']} src={""} alt="" />
                      <Cursor className={styles['item-cursor']} animated={selectedKeyItemKey === nextKeyItemKey} />
                      {nextKeyItemKey}
                    </div>
                  </td>
                  <td>
                    <div className={styles['item-quantity']}>
                      {nextKeyItemKey ? '01' : ''}
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
