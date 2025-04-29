import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryWeaponsComponent } from './inventory-weapons.component';

describe('InventoryWeaponsComponent', () => {
  let component: InventoryWeaponsComponent;
  let fixture: ComponentFixture<InventoryWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryWeaponsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
