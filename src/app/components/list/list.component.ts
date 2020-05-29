import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @Input() data: string[];

  @Output() itemSelectionChange: EventEmitter<number> = new EventEmitter();

  @Input() itemSelection: number;

  constructor() {}

  ngOnInit() {}

  onSelect(pos) {
    this.itemSelection = pos;
    this.itemSelectionChange.emit(pos);
  }
}
