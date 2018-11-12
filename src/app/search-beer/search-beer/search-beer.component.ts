import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/core/services';
import { Beer } from 'src/app/core/models';
import { SearchEvent } from 'src/app/core/events';

@Component({
  selector: 'app-search-beer',
  templateUrl: './search-beer.component.html',
  styleUrls: ['./search-beer.component.css']
})
export class SearchBeerComponent implements OnInit {

  beerResults: Beer[];
  showSearching = false;

  constructor(private beerService: BeerService) { }

  ngOnInit() { }

  onBeerSearch(searchEvent: SearchEvent) {
    this.beerResults = [];
    this.showSearching = true;
    if (searchEvent.byFilter == 'name')
      this.beerService.getBeersByName(searchEvent.searchTerm)
        .subscribe(beers => this.onSearchComplete(beers));
    else if (searchEvent.byFilter == 'description')
      this.beerService.getBeersByDesc(searchEvent.searchTerm)
        .subscribe(beers => this.onSearchComplete(beers));
  }

  onSearchComplete(beers: Beer[]) {
    this.showSearching = false;
    this.beerResults = beers;
  }
}
