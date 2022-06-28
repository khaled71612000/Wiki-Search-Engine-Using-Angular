import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  // generic initaion so eventually emit a string info
  // cause we try to send a term work or line to search ofr
  @Output() submitted = new EventEmitter<string>();
  term ='';
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event:any){
event.preventDefault();
this.submitted.emit(this.term)
  }

}
