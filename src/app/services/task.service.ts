import { Injectable } from "@angular/core";
import { TaskEntity } from "../models/task-entity";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";

const URL = "http://localhost:3000/tasks/";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private taskList: TaskEntity[];

  public taskListChanged: Subject<TaskEntity[]>;

  constructor(private http: HttpClient, private user: UserService) {
    this.taskListChanged = new Subject<TaskEntity[]>();
    this.taskList = [];
  }

  public getAll() {
    return this.taskList;
  }

  private getTaskFormJson(data) {
    let task = new TaskEntity();
    task
      .setId(data.id)
      .setTaskName(data.taskName)
      .setDone(data.done)
      .setUserId(data.userId);

    return task;
  }

  public loadTasks() {
    this.http
      .get(URL + "?userId=" + this.user.getUser().getId())
      .subscribe((response: any) => {
        this.taskList = response.map((item) => {
          return this.getTaskFormJson(item);
        });

        this.taskListChanged.next(this.taskList);
      });
  }

  public updateTask(task: TaskEntity) {
    const postData = {
      id: task.getId(),
      taskName: task.getTaskName(),
      userId: task.getUserId(),
      done: task.isDone(),
    };
    this.http.put(URL + task.getId(), postData).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }

  public addTask(task: TaskEntity) {
    const postData = {
      taskName: task.getTaskName(),
      done: task.isDone(),
      userId: this.user.getUser().getId(),
    };

    this.http.post(URL, postData).subscribe(
      (response) => {
        this.loadTasks();
      },
      (err) => console.log(err)
    );
  }

  public deleteTask(id: number) {
    this.http.delete(URL + id).subscribe((response) => {
      this.loadTasks();
    });
  }
}
