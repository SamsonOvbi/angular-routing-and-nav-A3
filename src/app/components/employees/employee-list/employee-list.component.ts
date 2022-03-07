import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../data/employee.service';//importer le service

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //
  public employees = [];

  public selectedEmployeeId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedEmployeeId = id;
    }) 
    
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
    
  }
//
  // on employee click 
  onLinkSelect(curEmployee) {
    console.log('onLinkSelect curEmployee');
    // relative path, links parameter array, relativeTo property
    this.router.navigate([curEmployee.id], { relativeTo: this.activatedRoute }); // to the current route  append the employee id and navigate to that URL
  }

  // to compare/match current route clicked and optional parameter
  isSelectedRouteMatchOptionalParam(curEmployee) {
    return curEmployee.id === this.selectedEmployeeId;
  }
//
}
