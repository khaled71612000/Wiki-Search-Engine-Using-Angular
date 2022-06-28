import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
pages = [];

  // add as private property only accssed from inside
  // make it instance for app comp
  // wikipediaservice is a depenciy of app comp it cant workcorrectly without it 
  // so it needs access for it by first making instancethis.wikipedia= new wikipediaserivce()
  // the first way isnt that good cause created dependiny internally to use
  // instead we use dependecny injection so create spertaly and pass
  constructor(private wikipedia: WikipediaService) {

  }

  onTerm(term: string) {
    // avoid type any cause it doesnt give typescript much info
    this.wikipedia.search(term).subscribe((pages)=>{
      // inside reponse there is query and search results
      // response is pages so return query search from interface type rtuen
      // instead of reposnse .query.search get pages
      this.pages = pages;
    });
  }
}
