import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../data/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  
  public departments = [];

  public selectedDepartmentId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _departmentService: DepartmentService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedDepartmentId = id;
    })
        
    this._departmentService.getDepartments()
      .subscribe(data => this.departments = data);
  }

  /* on department click */
  onLinkSelect(curDepartment) {
    console.log('onLinkSelect curDepartment');
    // navigate ( path, route parameter)
    // this.router.navigate(['departments', curDepartment.id]);

    // relative path, links parameter array, relativeTo property
    this.router.navigate([curDepartment.id], { relativeTo: this.activatedRoute }); // to the current route  append the department id and navigate to that URL
  }

  // to compare/match current route clicked and optional parameter
  isSelectedRouteMatchOptionalParam(curDepartment) {
    return curDepartment.id === this.selectedDepartmentId;
  }

}
