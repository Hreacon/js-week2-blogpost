module ToDoList {
  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void;
    assignedTo?: IPerson;
    dueDate?: Date;
  }

  export interface IPerson {
    name: string;
    email: string;
    phone?: string;
  }

  export class Task implements ITask {
    done = false;
    constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
    markDone() {
      this.done = true;
    }
  }

  export class HomeTask extends Task {
    constructor(description: string) {
      super(description, "Low");
    }
  }

  export class HobbyTask extends Task {
    constructor(description: string) {
      super(description, "Low");
    }
  }

  export class WorkTask extends Task {
    constructor(public dueDate: Date, description: string, priority: string = "Low", public assignedTo: IPerson) {
      super(description, priority);
    }
  }
}
