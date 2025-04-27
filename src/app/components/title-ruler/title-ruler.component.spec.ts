import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRulerComponent } from './title-ruler.component';

describe('TitleRulerComponent', () => {
  let component: TitleRulerComponent;
  let fixture: ComponentFixture<TitleRulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleRulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
