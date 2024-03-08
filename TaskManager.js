class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  // Add other methods as needed
}

module.exports = TaskManager;
