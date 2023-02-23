import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChildLocalVariableComponent } from './hero-child-local-variable.component';

describe('HeroChildLocalVariableComponent', () => {
  let component: HeroChildLocalVariableComponent;
  let fixture: ComponentFixture<HeroChildLocalVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroChildLocalVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroChildLocalVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
