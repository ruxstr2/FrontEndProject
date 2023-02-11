import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public tasks: Task[] = [];
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.getTasks()
    .subscribe(
      (response: Task[]) => {
        this.tasks = response;
      }, error => {
        console.log(error);
      }
    );
  }

  public completeTask(task: Task): void {
    task.completed = !task.completed;
  }

}
