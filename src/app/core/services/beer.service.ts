import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Beer } from '../models';
import { map, filter } from 'rxjs/operators';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';


@Injectable()
export class BeerService {
  constructor(
    private apiService: ApiService
  ) { }

  getRandomBeer(): Observable<Beer> {
    const headers: HttpHeaders = new HttpHeaders({
      'cache-control': 'no-cache'
    });

    return this.apiService.get('/beers/random', null, headers).pipe(
      map(b => b[0])
    );
  }

  getNonAlcoholicBeer(): Observable<Beer> {
    const headers: HttpHeaders = new HttpHeaders({
      'cache-control': 'no-cache'
    });

    return this.apiService.get('/beers?abv_lt=1', null, headers).pipe(
      map(b => b[Math.floor(Math.random() * (b.length - 1))])
    );
  }

  getBeersByName(name: string = ''): Observable<Beer[]> {
    return this.apiService.get('/beers?beer_name=' + name);
  }

  getBeersByDesc(description: string = ''): Observable<Beer[]> {
    return this.apiService.get('/beers?food=' + description);
  }

}
