import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 

@Component({
  selector: 'app-data',
  template: '<li>Name is {{name}} and age  is {{age}}</li>'
})
export class DataComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() email: string;
  @Input() title: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }


}
