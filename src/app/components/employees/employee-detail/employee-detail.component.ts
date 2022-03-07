import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeService } from '../data/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  public employees = [];
  // to hold the currently passed id parameter
  public selectedEmployeeId;
  public static selectedId = 2;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _employeeService: EmployeeService) { }
  
  ngOnInit() {
    // read the route parameter
    //
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedEmployeeId = id;
      EmployeeDetailComponent.selectedId = id;
    }) //

    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
    
  }

  /* Previous/Back button click */
  goPrevious() {
    let previousId = (this.selectedEmployeeId - 1) < 1? this.selectedEmployeeId: this.selectedEmployeeId - 1;
    this.router.navigate(['/employees', previousId]);
  }

  /* Next button click */
  goNext() {
    let length = this.employees.length;
    let nextId = (this.selectedEmployeeId + 1) > length? this.selectedEmployeeId: this.selectedEmployeeId + 1;
    this.router.navigate(['/employees', nextId]);
  }

  // back button - method to handle optional parameters and show current employee highlighted
  goToEmployees() {
    console.log('goToEmployees clicked');
    let currentSelectedId = this.selectedEmployeeId ? this.selectedEmployeeId : null
    // relative path, links parameter array - {key:value}, {relativeTo property}
    // we can pass multiple parameters as per our requirements
    // this.router.navigate(['../', { id: currentSelectedId, name: 'Hello'  }]);
    this.router.navigate(['../', { id: currentSelectedId }], { relativeTo: this.activatedRoute });  // to the current route  append the employee id and navigate to that URL
  }

  /* on overview button click */
  showDetails() {
    this.router.navigate(['overview'], { relativeTo: this.activatedRoute })
  }

  /* on contact button click */
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.activatedRoute })
  }
  // to compare/match current route clicked and optional parameter
  isSelectedRouteMatchOptionalParam(curEmployee) {
    return curEmployee.id === this.selectedEmployeeId;
  }
}
