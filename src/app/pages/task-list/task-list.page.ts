import { Component, OnInit, OnDestroy } from "@angular/core";
import { TaskEntity } from "src/app/models/task-entity";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.page.html",
  styleUrls: ["./task-list.page.scss"],
})
export class TaskListPage implements OnInit, OnDestroy {
  public taskList: TaskEntity[];

  constructor(private taskService: TaskService) {
    this.taskList = [];
  }

  ngOnDestroy(): void {
    this.taskService.taskListChanged.unsubscribe();
  }

  ngOnInit() {
    this.taskService.loadTasks();

    this.taskService.taskListChanged.subscribe((data) => {
      this.taskList = data;
    });
  }

  public statusChange(task: TaskEntity) {
    console.log(task);
    this.taskService.updateTask(task);
  }
}
