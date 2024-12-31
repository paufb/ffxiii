import { useEffect, useState } from 'react';
import { Component } from '../types.ts';
import { Cursor } from './Cursor.tsx';
import styles from '../pages/InventoryPage.module.css';

interface ComponentsInventoryProps {
  setHelpHeaderText: Function;
}

export function ComponentsInventory({ setHelpHeaderText }: ComponentsInventoryProps) {
  const [components, setComponents] = useState<{ [key: string]: Component }>({});
  const [selectedComponentKey, setSelectedComponentKey] = useState<string>();

  useEffect(() => {
    import('../data/componentsData.ts').then(componentsModule => setComponents(componentsModule.componentsData));
  }, []);

  function handleOnClickComponent(componentKey: string) {
    setSelectedComponentKey(componentKey);
    setHelpHeaderText(components[componentKey].description);
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
          {Object.entries(components).map(([componentKey, _], index) => {
            const nextComponentKey = Object.keys(components)[index + 1];
            if (index % 2 === 0) {
              return (
                <tr className={styles['table-row']} key={componentKey + nextComponentKey}>
                  <td onClick={() => handleOnClickComponent(componentKey)}>
                    <div className={`${styles['item-name']} ${selectedComponentKey === componentKey ? styles['active'] : ''}`}>
                      <img className={styles['item-icon']} src={''} alt="" />
                      <Cursor className={styles['item-cursor']} animated={selectedComponentKey === componentKey} />
                      {componentKey}
                    </div>
                  </td>
                  <td>
                    <div className={styles['item-quantity']}>
                      01
                    </div>
                  </td>
                  <td onClick={() => handleOnClickComponent(nextComponentKey)}>
                    <div className={`${styles['item-name']} ${selectedComponentKey === nextComponentKey ? styles["active"] : ""}`}>
                      <img className={styles['item-icon']} src={""} alt="" />
                      <Cursor className={styles['item-cursor']} animated={selectedComponentKey === nextComponentKey} />
                      {nextComponentKey}
                    </div>
                  </td>
                  <td>
                    <div className={styles['item-quantity']}>
                      {nextComponentKey ? '01' : ''}
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
