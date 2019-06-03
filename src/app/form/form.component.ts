import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quote(0, '', ' ', ' ', new Date(), 0 , 0 );


  constructor() { }

  ngOnInit() {
  }

}
