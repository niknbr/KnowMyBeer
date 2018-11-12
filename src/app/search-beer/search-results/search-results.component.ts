import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/core/models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input()
  beers: Beer[];

  constructor() { }

  ngOnInit() {

  }

}
