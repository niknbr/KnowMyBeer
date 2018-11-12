import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/core/services';
import { Beer } from 'src/app/core/models';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {
  beer: Beer;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getRandomBeer().subscribe(b => this.beer = b);
  }

  showAnotherBeer(nonAlcoholic: boolean = false) {
    this.beer = null;
    if (!nonAlcoholic)
      this.beerService.getRandomBeer().subscribe(b => this.beer = b)
    else
      this.beerService.getNonAlcoholicBeer().subscribe(b => this.beer = b)
  }
}
