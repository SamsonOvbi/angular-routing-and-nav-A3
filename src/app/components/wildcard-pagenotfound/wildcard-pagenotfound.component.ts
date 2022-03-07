import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wildcard-pagenotfound',
  templateUrl: './wildcard-pagenotfound.component.html',
  styleUrls: ['./wildcard-pagenotfound.component.css']
})
export class WildcardPagenotfoundComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  /* on contact button click */
  goHome() {
    this.router.navigate(['../home'], { relativeTo: this.activatedRoute })
  }
      
}
