import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TaskUserEntity } from "src/app/models/task-user-entity";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {
  @Input() user: TaskUserEntity;

  @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onUserClick() {
    this.onClick.emit("on a cliqué sur moi");
  }
}
