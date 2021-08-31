import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IPeople } from './models';
import 'rxjs/add/observable/of';

@Injectable()
export class PeopleService {
  constructor() {}

  getPeople(): Observable<IPeople[]> {
    return Observable.of([
      {
        id: 1,
        name: 'Juri',
        surname: 'Strumpflohner',
        twitter: '@juristr'
      }
    ]);
  }
}