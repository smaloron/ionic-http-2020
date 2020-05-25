import { Component, OnInit, OnDestroy } from "@angular/core";
import { TaskEntity } from "src/app/models/task-entity";
import { TaskService } from "src/app/services/task.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.page.html",
  styleUrls: ["./task-list.page.scss"],
})
export class TaskListPage implements OnInit, OnDestroy {
  public taskList: TaskEntity[];

  constructor(
    private taskService: TaskService,
    private alertCtrl: AlertController
  ) {
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

  public async presentAddTaskAlert() {
    const alert = await this.alertCtrl.create({
      header: "Création d'une nouvelle tâche",
      buttons: [
        {
          text: "Annuler",
          role: "cancel",
        },
        {
          text: "Valider",
          handler: (data) => {
            const task = new TaskEntity()
              .setTaskName(data.taskName)
              .setDone(false);

            this.taskService.addTask(task);
          },
        },
      ],
      inputs: [
        {
          type: "text",
          name: "taskName",
          placeholder: "Le nom de la tâche",
        },
      ],
    });

    alert.present();
  }

  public async presentUpdateTaskAlert(task: TaskEntity) {
    const alert = await this.alertCtrl.create({
      header: "Modification d'une tâche",
      buttons: [
        {
          text: "Annuler",
          role: "cancel",
        },
        {
          text: "Valider",
          handler: (data) => {
            task.setTaskName(data.taskName);
            this.taskService.updateTask(task);
          },
        },
      ],
      inputs: [
        {
          type: "text",
          name: "taskName",
          placeholder: "Le nom de la tâche",
          value: task.getTaskName(),
        },
      ],
    });

    alert.present();
  }

  public async presentDeleteTaskAlert(id: number) {
    const alert = await this.alertCtrl.create({
      header: "Voulez-vous vraiment supprimer cette tâche",
      buttons: [
        {
          text: "NON",
          role: "cancel",
        },
        {
          text: "OUI",
          handler: () => {
            this.taskService.deleteTask(id);
          },
        },
      ],
    });

    alert.present();
  }
}
