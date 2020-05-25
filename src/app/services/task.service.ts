import { Injectable } from "@angular/core";
import { TaskEntity } from "../models/task-entity";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

const URL = "http://localhost:3001/tasks/";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private taskList: TaskEntity[];

  public taskListChanged: Subject<TaskEntity[]>;

  constructor(private http: HttpClient) {
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
    this.http.get(URL).subscribe((response: any) => {
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
}
