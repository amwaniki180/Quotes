import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
  
  ];
  completeQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`are you ${this.quote[index].name}`)
      if (toDelete){
        this.quote.splice(index,1);
      }
    }
  }
  formReceive(quote) {
    this.quote.push(quote);

  }
  addVote(index) {
    this.quote[index].upvote =+1;
  }

  minusVote(index) {
    this.quote[index].downvote =+1;
    
  };

  constructor() { }

  ngOnInit() {
  }

}
