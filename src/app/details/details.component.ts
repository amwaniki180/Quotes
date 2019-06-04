import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit { @Input() quote: Quote;
@Output() isComplete = new EventEmitter<boolean>();
quoteComplete(complete:  boolean) {
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}
