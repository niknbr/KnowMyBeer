import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailsComponent } from './beer-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailsComponent ],
      schemas: [NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
