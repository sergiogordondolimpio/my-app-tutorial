import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChildWithServiceComponent } from './hero-child-with-service.component';

describe('HeroChildWithServiceComponent', () => {
  let component: HeroChildWithServiceComponent;
  let fixture: ComponentFixture<HeroChildWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroChildWithServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroChildWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
