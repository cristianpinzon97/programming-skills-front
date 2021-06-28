import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

/**
 * Service for managing employee operations
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "/api/bdb/v1/employees";

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets all the employees
   * @returns list of employees
   */
  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL); 
  }

  /**
   * Saves a employee on database
   * @param employee that will be saved
   * @returns the saved employee
   */
  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(this.baseURL,employee);
  }
}
