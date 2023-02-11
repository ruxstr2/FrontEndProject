import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }

  public getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');

  }


}
