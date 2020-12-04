import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapComponent } from './gsap.component';

describe('GsapComponent', () => {
  let component: GsapComponent;
  let fixture: ComponentFixture<GsapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
