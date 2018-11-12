import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomBeerModule } from './random-beer/random-beer.module';
import { SearchBeerModule } from './search-beer/search-beer.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RandomBeerModule,
    SearchBeerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
