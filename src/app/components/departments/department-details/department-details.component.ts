import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DepartmentService } from '../data/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  
  public departments = [];
  // to hold the currently passed id parameter
  public selectedDepartmentId;
  public static selectedId = 2;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    private _departmentService: DepartmentService) { }

  ngOnInit() {
    // read the route parameter
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedDepartmentId = id; 
      DepartmentDetailsComponent.selectedId = id;
    });

    this._departmentService.getDepartments()
    .subscribe(data => this.departments = data);
  }

  /* Previous/Back button click */
  goPrevious() {
    let previousId = ((this.selectedDepartmentId - 1) < 1)? this.selectedDepartmentId: this.selectedDepartmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  /* Next button click */
  goNext() {
    let length = this.departments.length;
    let nextId = ((this.selectedDepartmentId + 1) > length)? this.selectedDepartmentId: this.selectedDepartmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  // back button - method to handle optional parameters and show current department highlighted
  goToDepartments() {
    console.log('goToDepartments clicked');
    let currentSelectedId = this.selectedDepartmentId ? this.selectedDepartmentId : null
    //sending optional parameter - used for some logic
    //this.router.navigate(["/departments", { id: currentSelectedId, test: 'test-param-value' }])

    this.router.navigate(['../', { id: currentSelectedId }], { relativeTo: this.activatedRoute });  // to the current route  append the department id and navigate to that URL
  }

  /* on overview button click */
  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.activatedRoute })
  }

  /* on contact button click */
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.activatedRoute })
  }

}
