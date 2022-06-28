import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    // array of objects
    search: {
      title: string;
      snippet: string;
      pageid:number;
    }[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    // generic type to define it  to know what shows what reponse is showing
    // geti s an obersavle watching changes
    // pluck transfomrs data and pases it 
    return this.http
      .get<WikipediaResponse>('http://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*'
        }
      }).pipe(
        pluck('query', 'search')
      )
  }
}