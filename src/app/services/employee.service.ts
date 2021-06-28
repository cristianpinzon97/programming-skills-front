import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "/api/bdb/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL); 
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(this.baseURL,employee);
  }
}
