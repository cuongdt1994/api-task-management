# Task Management API with Express

This is a simple Task Management API built with Express.js. It allows you to manage tasks by providing basic CRUD operations (Create, Read, Update, Delete).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)

## Features

- Create a new task with title and description
- Get a list of all tasks
- Update a task's title, description, or completion status
- Delete a task

## Technologies Used

- Node.js
- Express.js
- npm

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/cuongdt1994/api-task-management.git

2. **Install dependencies:**

   ```bash
   cd api-task-management
   npm install

3. **Start the server:**

   ```bash
   node app.js
   
The server will start running at http://localhost:3000

## API Endpoints

- GET /api/tasks: Get all tasks
- POST /api/tasks: Create a new task
- PUT /api/tasks/:id: Update a task by ID
- DELETE /api/tasks/:id: Delete a task by ID

## Example Usage

**Create a new task:**

```http
POST http://localhost:3000/api/tasks
Content-Type: application/json

{
  "title": "Task 1",
  "description": "Description for Task 1"
}
```
**Update a task by ID:**
```http
PUT http://localhost:3000/api/tasks/{taskId}
Content-Type: application/json

{
  "title": "Updated Task 1"
}
```
**Delete a task by ID:**
```http
DELETE http://localhost:3000/api/tasks/{taskId}
```

## Usage
You can use this API to manage tasks in your applications. Here's an example of how to integrate it into a Node.js application:
```javascript
// Example usage of the Task Management API

const fetch = require('node-fetch');

async function createTask(title, description) {
  const response = await fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  });
  const data = await response.json();
  console.log('New Task:', data);
}

// Call the createTask function
createTask('Task 1', 'Description for Task 1');

```

