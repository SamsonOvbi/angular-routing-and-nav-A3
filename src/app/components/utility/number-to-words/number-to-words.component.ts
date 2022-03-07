import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-to-words',
  templateUrl: './number-to-words.component.html',
  styleUrls: ['./number-to-words.component.css']
})
export class NumberToWordsComponent implements OnInit {
  public numInput = 1234567;
  public message: string = "";
  dateMsg = new Date();

  ngOnInit() {
    setInterval(() => {
      this.dateMsg = new Date();
    }, 10);
    this.message = this.stringPrint(this.numInput); 
  }

  stringPrint(num) {
    let x = ["", "thousand", "million", "billion", "trillion", "quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion"];
    let buf = "";
    let index = 0;
    while (num > 0) {
      if (Math.floor(num % 1000)) {
        buf = this.printNum(Math.floor(num % 1000)) + x[index] + " " + buf;
      }
      index++;
      num = Math.floor(num / 1000);
    }
    console.log(buf);
    this.message = buf;
    return (buf);
  }
  
  printNum(num2) {
    let bf = "";
    let selDigit = 0;
    while (num2 > 0) {
      bf = this.printNumImp(num2, selDigit++) + bf;
      num2 = Math.floor(num2 / 10);
    }
    return bf;
  }
  
  printNumImp(num3, selDig) {
    let y = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let z = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sizteen", "seventeen", "eighteen", "nineteen"];
    let w =["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninty", " "];
  
    let buf2 = ""; let numb = 0;
    //base case
    if (selDig === 0) {
      //numb = num3 / 10 ;
      //if((Math.floor(num3 / 10) % 10) === 1) {// 10,11,...,19
      if (Math.floor(Math.floor(num3 / 10) % 10) === 1) {// 10,11,...,19
        buf2 = z[Math.floor(num3 % 10)] + " ";
      }else{
        buf2 = y[Math.floor(num3 % 10)] + " ";}
    } else if (selDig === 1) { // 10,11,...,19 <already taken care of>
      buf2 = w[Math.floor(num3 % 10)] + " ";
    } else {
      buf2 = y[Math.floor(num3 % 10)] + " hundred ";
    }
    return buf2;
  }
  
}
