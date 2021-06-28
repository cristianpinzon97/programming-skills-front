import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private route: Router
  ) {}

  ngOnInit(): void {}

   private saveEmployee() {
     if (!this.employee.id) {
     this.getEmployeeNextId();
     }
     
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployees();
      },
      (error) => console.error(error)
    );
  }


  private getEmployeeNextId() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employee.id = data.length+1;
    });
  }

  private goToEmployees() {
    this.route.navigate(['/employeees']);
  }

  onSubmit() {
    this.saveEmployee();

  }
}
