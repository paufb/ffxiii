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
    switch (category) {
      case categories[0]:
        return <ItemsInventory />;
      case categories[1]:
        return <WeaponsInventory />;
      case categories[2]:
        return <AccessoriesInventory />;
      case categories[3]:
        return <ComponentsInventory />;
      case categories[4]:
        return <KeyItemsInventory />;
      default:
        return null;
    }
  }

  return (
    <div className={styles['page']}>
      <div className={`${styles['categories-container']} ${pageAnimations['fade-in-from-left']}`}>
        <div className={`${styles['ruler-title']} ${styles['end']}`}>
          Inventory
        </div>
        <div className={styles['ruler']} />
        <ul className={styles['categories']}>
          {categories.map(category => (
            <li
              key={category}
              className={`${styles['category']} ${activeCategory === category ? styles['active'] : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <img className={styles['category-cursor']} src={CursorIcon} alt="" />
              {category}
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
