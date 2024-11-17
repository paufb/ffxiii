import { useState } from 'react';
import { ItemsInventory } from '../components/ItemsInventory.tsx';
import { WeaponsInventory } from '../components/WeaponsInventory.tsx';
import { AccessoriesInventory } from '../components/AccessoriesInventory.tsx';
import { ComponentsInventory } from '../components/ComponentsInventory.tsx';
import { KeyItemsInventory } from '../components/KeyItemsInventory.tsx';
import CursorIcon from '../assets/FFXIII_Pointer_White_BG.webp';
import styles from './InventoryPage.module.css';
import pageAnimations from './page-animations.module.css';
import { InventoryCategory } from '../types.ts';

export function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState<InventoryCategory>('Items');
  const categories: InventoryCategory[] = ['Items', 'Weapons', 'Accessories', 'Components', 'Key Items'];

  function renderInventoryCategory(category: InventoryCategory) {
    const categoriesMap: { [key in InventoryCategory]: JSX.Element } = {
      'Items': <ItemsInventory />,
      'Weapons': <WeaponsInventory />,
      'Accessories': <AccessoriesInventory />,
      'Components': <ComponentsInventory />,
      'Key Items': <KeyItemsInventory />
    };
    return categoriesMap[category];
  }

  return (
    <div className={styles['page']}>
      <div className={`${styles['categories-container']} ${pageAnimations['fade-in-from-left']}`}>
        <div className={`${styles['ruler-title']} ${styles['end']} outlined`}>
          Inventory
        </div>
        <div className={`${styles['ruler']} outlined`} />
        <ul className={styles['categories']}>
          {categories.map(category => (
            <li
              key={category}
              className={`${styles['category']} ${activeCategory === category ? styles['active'] : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <img className={styles['category-cursor']} src={CursorIcon} alt="" />
              <span className="outlined">{category}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={pageAnimations['fade-in-from-right']}>
        {renderInventoryCategory(activeCategory)}
      </div>
    </div>
  );
}
