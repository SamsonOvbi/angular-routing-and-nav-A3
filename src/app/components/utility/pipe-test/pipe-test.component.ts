import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class TestPipeComponent implements OnInit {

  phone = 'Galaxy Note 10+ costs';
  price = 1099.99;
  todaydate = new Date();

  dollarPrice = 415.87;
  
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.todaydate = new Date();
    }, 1000)
    
  }

}
