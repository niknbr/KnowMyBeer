import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchEvent } from 'src/app/core/events';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchEvent: SearchEvent = {
    byFilter: 'name',
    searchTerm: ''
  };

  @Input()
  showSearching = false;

  showError = false;

  @Output() onSearch: EventEmitter<SearchEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  validate(searchTerm: string): boolean {
    const regexp = RegExp(/^[0-9A-Za-z\s\-]+$/);
    return regexp.test(searchTerm);
  }

  search() {
    this.showError = false;
    if (this.validate(this.searchEvent.searchTerm)) {
      this.onSearch.emit(this.searchEvent);
    } else {
      this.showError = true;
    }
  }

}

