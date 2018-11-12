import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBeerComponent } from './search-beer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

describe('SearchBeerComponent', () => {
  let component: SearchBeerComponent;
  let fixture: ComponentFixture<SearchBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ SearchBeerComponent ],
      schemas: [NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
