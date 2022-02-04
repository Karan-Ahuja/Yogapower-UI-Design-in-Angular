import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishYogaComponent } from './english-yoga.component';

describe('EnglishYogaComponent', () => {
  let component: EnglishYogaComponent;
  let fixture: ComponentFixture<EnglishYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
