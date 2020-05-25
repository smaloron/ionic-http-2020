export class TaskEntity {
  private id: number;
  private taskName: string;
  private done: boolean;
  private userId: number;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): TaskEntity {
    this.id = id;
    return this;
  }

  public getTaskName(): string {
    return this.taskName;
  }

  public setTaskName(taskName: string): TaskEntity {
    this.taskName = taskName;
    return this;
  }

  public isDone(): boolean {
    return this.done;
  }

  public setDone(done: boolean): TaskEntity {
    this.done = done;
    return this;
  }

  public getUserId(): number {
    return this.userId;
  }

  public setUserId(userId: number): TaskEntity {
    this.userId = userId;
    return this;
  }
}
