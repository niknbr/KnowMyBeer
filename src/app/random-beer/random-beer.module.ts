import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RandomBeerComponent, BeerDetailsComponent],
  exports: [RandomBeerComponent]
})
export class RandomBeerModule { }
