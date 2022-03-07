import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DepartmentService } from '../data/department.service';
import { DepartmentDetailsComponent } from '../department-details/department-details.component';

@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.css']
})
export class DepartmentOverviewComponent implements OnInit {
  
  public departments = [];
  // to hold the currently passed id parameter
  public selectedDepartmentId;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _departmentService: DepartmentService) { }
  
  ngOnInit() {
    // read the route parameter
    // snapshot approach 
    //console.log(this.activatedRoute.snapshot.paramMap);
    //let routeParamId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    //this.selectedDepartmentId = routeParamId;
    //
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedDepartmentId = id;
      this.selectedDepartmentId = DepartmentDetailsComponent.selectedId;
    }) //

    this._departmentService.getDepartments()
      .subscribe(data => this.departments = data);    
  }
  
}
