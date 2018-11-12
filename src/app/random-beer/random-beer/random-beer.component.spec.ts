import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBeerComponent } from './random-beer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

describe('RandomBeerComponent', () => {
  let component: RandomBeerComponent;
  let fixture: ComponentFixture<RandomBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [RandomBeerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
