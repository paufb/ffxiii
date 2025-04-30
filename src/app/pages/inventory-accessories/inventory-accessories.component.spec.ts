import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAccessoriesComponent } from './inventory-accessories.component';

describe('InventoryAccessoriesComponent', () => {
  let component: InventoryAccessoriesComponent;
  let fixture: ComponentFixture<InventoryAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
