import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-legal-details',
  templateUrl: './legal-details.component.html',
  styleUrls: ['./legal-details.component.css']
})
export class LegalDetailsComponent implements OnInit {
  
  // to hold the currently passed id parameter
  public selectedLegalId;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // read the route parameter
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedLegalId = id;
    })
  }

  /* Previous/Back button click */
  goPrevious() {
    let previousId = this.selectedLegalId - 1;
    this.router.navigate(['/legal', previousId]);
  }

  /* Next button click */
  goNext() {
    let nextId = this.selectedLegalId + 1;
    this.router.navigate(['/legal', nextId]);
  }

  // back button - method to handle optional parameters and show current legal highlighted
  goToLegals() {
    console.log('goToLegals clicked');
    let currentSelectedId = this.selectedLegalId ? this.selectedLegalId : null
    //sending optional parameter - used for some logic
    //this.router.navigate(["/legals", { id: currentSelectedId, test: 'test-param-value' }])

    // relative path, links parameter array - {key:value}, {relativeTo property}
    // we can pass multiple parameters as per our requirements
    // this.router.navigate(['../', { id: currentSelectedId, name: 'Hello'  }]);
    this.router.navigate(['../', { id: currentSelectedId }], { relativeTo: this.activatedRoute });  // to the current route  append the legal id and navigate to that URL
  }

  /* on overview button click */
  showPrivacy() {
    this.router.navigate(['privacy'], { relativeTo: this.activatedRoute })
  }

  /* on contact button click */
  showTerms() {
    this.router.navigate(['terms'], { relativeTo: this.activatedRoute })
  }

}
