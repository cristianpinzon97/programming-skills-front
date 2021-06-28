import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
/**
 * Component that creates or updates an employee
 */
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

  /**
   * saves the employee on database
   */
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

  /**
   * Gets the next id for the employee if necessary
   */
  private getEmployeeNextId() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employee.id = data.length+1;
    });
  }

  /**
   * navigates to the employees page
   */
  private goToEmployees() {
    this.route.navigate(['/employeees']);
  }

  /**
   * Submit method to save the employee form
   */
  onSubmit() {
    this.saveEmployee();

  }
}
