import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChildEventComponent } from './hero-child-event.component';

describe('HeroChildEventComponent', () => {
  let component: HeroChildEventComponent;
  let fixture: ComponentFixture<HeroChildEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroChildEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroChildEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
