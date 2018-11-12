import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/core/models';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent {

  @Input()
  beer: Beer;

}
