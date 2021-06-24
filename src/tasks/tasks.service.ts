import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getAllTasks() {
    // public 생략 가능
    return this.tasks;
  }
}
