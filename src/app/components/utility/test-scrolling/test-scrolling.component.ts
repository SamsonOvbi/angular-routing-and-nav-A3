import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-scrolling',
  templateUrl: './test-scrolling.component.html',
  styleUrls: ['./test-scrolling.component.css']
})
export class TestScrollingComponent implements OnInit {

  public message1: string = "Hello, Is anybody on this Page";
  public message2: string = 'Message To Scroll Across Page';
  public message3: string = 'Powered by Angular8.....!';
  public greetings: string = 'Hello, It is a beautiful day..!';

  public message: string = "";
  dateMsg = new Date();

  ngOnInit() {
    setInterval(() => {
      this.dateMsg = new Date();
    }, 10);
    this.printSentence(this.greetings); 
  }

  printSentence(msg) {
    for (var i = 0; i < msg.length; i++) {
      ((indx) => {
        setTimeout(() => {
          this.message += msg[indx];
        }, 500 * i);
      })(i);
    }
  }

}
