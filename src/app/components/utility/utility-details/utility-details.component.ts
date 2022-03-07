import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-utility-details',
  templateUrl: './utility-details.component.html',
  styleUrls: ['./utility-details.component.css']
})
export class UtilityDetailsComponent implements OnInit {
  
  // to hold the currently passed id parameter
  public selectedTestId;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // read the route parameter
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedTestId = id;
    })
  }

    /* on overview button click */
    showAnimation() {
      this.router.navigate(['animation'], { relativeTo: this.activatedRoute })
    }
  
    /* on contact button click */
    showPipes() {
      this.router.navigate(['pipes'], { relativeTo: this.activatedRoute })
    }
  
  
  /* on scroll button click */
    showScroll() {
      this.router.navigate(['scroll'], { relativeTo: this.activatedRoute })
    }
  
    /* on scroll button click */
    showNumberToWords() {
      this.router.navigate(['number-to-words'], { relativeTo: this.activatedRoute })
    }
  
  // back button - method to handle optional parameters and show current test highlighted
  goToTests() {
    console.log('goToTests clicked');
    let currentSelectedId = this.selectedTestId ? this.selectedTestId : null
    // relative path, links parameter array - {key:value}, {relativeTo property}
    // we can pass multiple parameters as per our requirements
    // this.router.navigate(['../', { id: currentSelectedId, name: 'Hello'  }]);
    this.router.navigate(['../', { id: currentSelectedId }], { relativeTo: this.activatedRoute });  // to the current route  append the test id and navigate to that URL
  }

}
