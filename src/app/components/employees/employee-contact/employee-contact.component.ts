import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeService } from '../data/employee.service';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css']
})
export class EmployeeContactComponent implements OnInit {

  public employees = [];
  // to hold the currently passed id parameter
  public selectedEmployeeId;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private _employeeService: EmployeeService) { }
  
  ngOnInit() {
    // read the route parameter
    //
    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedEmployeeId = id;
      this.selectedEmployeeId = EmployeeDetailComponent.selectedId;
    }) //

    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);    
  }
  
}
