import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('-- should be valid search term', () => {
    const result = component.validate("---")
    expect(result).toBeTruthy();
  });

  it('123 should be valid search term', () => {
    const result = component.validate("123")
    expect(result).toBeTruthy();
  });

  it('ABCaz should be valid search term', () => {
    const result = component.validate("ABCaz")
    expect(result).toBeTruthy();
  });

  it('@SS34 should be invalid search term', () => {
    const result = component.validate("@@@@")
    expect(result).toBeFalsy();
  });
});
