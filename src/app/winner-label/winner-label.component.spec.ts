import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerLabelComponent } from './winner-label.component';

describe('WinnerLabelComponent', () => {
  let component: WinnerLabelComponent;
  let fixture: ComponentFixture<WinnerLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
