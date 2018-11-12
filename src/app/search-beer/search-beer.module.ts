import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBeerComponent } from './search-beer/search-beer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SearchBeerComponent, SearchBarComponent, SearchResultsComponent],
  exports: [SearchBeerComponent]
})
export class SearchBeerModule { }
