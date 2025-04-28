import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedGradientTextComponent } from './outlined-gradient-text.component';

describe('OutlinedGradientTextComponent', () => {
  let component: OutlinedGradientTextComponent;
  let fixture: ComponentFixture<OutlinedGradientTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinedGradientTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlinedGradientTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
