import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [ new Quote(0, "tony", "neil barringham", "the grass is greener where you water it", new Date(2019,5,1), 0,0)
  
  ];
  completeQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`are you ${this.quotes[index].name}`)
      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  formReceive(quote) {
    let qLength = this.quotes.length;
    quote.id = qLength++;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
    console.log(this.quotes)

  }
  addVote(index) {
    this.quotes[index].upvote ++;
  }

  minusVote(index) {
    this.quotes[index].downvote ++;
    
  };

  constructor() { }

  ngOnInit() {
  }

}
