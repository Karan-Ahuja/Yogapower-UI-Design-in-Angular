import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiYogaComponent } from './hindi-yoga.component';

describe('HindiYogaComponent', () => {
  let component: HindiYogaComponent;
  let fixture: ComponentFixture<HindiYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindiYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
