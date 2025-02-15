# Task Manager

This project is a task management system that allows users to register, list, edit and delete tasks. The system consists of a frontend developed in React.js with Tailwind CSS and a backend using Node.js with Express and Sequelize for communication with the database.

## 🚀 Technologies Used

### Frontend:
- React.js
- Tailwind CSS
- Vite.js

### Backend:
- Node.js
- Express.js
- Sequelize
- Relational database (example: MySQL or PostgreSQL)

## 📌 Features
- Task registration
- Task listing
- Task editing
- Task deletion

## 📂 Project Structure

### Backend
```
/backend
│── config/
│   ├── database.js  # Sequelize and Database Configuration
│
│── controllers/
│   ├── taskController.js  # Logic of CRUD operations
│
│── routes/
│   ├── taskRoutes.js  # Routes for handling tasks
│
│── index.js  # Express Server Configuration
```

### Frontend
```
/frontend
│── src/
│   ├── pages/  # Main pages (Home, Registration, List)
│   ├── App.jxs  # Main component
│   ├── main.jxs  # React App Entry
│   ├── index.css  # Global styles
```

### Layout
```
/layout
│── Home.png  # Home screen
│── Form.png  # Task registration and editing screen
│── List.png  # Task list screen
```

## 🎨 Interface
The system interface follows a dark theme with colored buttons to highlight actions. The available pages are:
- **Home:** Welcome screen with buttons for registering and listing tasks.
- **Register Task:** Form for adding new tasks with fields for title, description and date.
- **List Tasks:** Display of registered tasks with editing and deletion options.

To view the system interface, please refer to the images above.

## 🛠 Configuration and Execution
### Backend
1. Install the dependencies:
```sh
cd backend
npm install
```
2. Configure the database in the `config/database.js` file.
3. Run the server:
```sh
node index.js
```

### Frontend
1. Install the dependencies:
```sh
cd frontend
npm install
```
2. Start the development server:
```sh
npm run dev
```

The frontend will be accessible at `http://localhost:5173` and the backend at `http://localhost:3000`.

## 📌 API Endpoints

### Create Task
- **Route:** `POST /tasks/register`
- **Body:**
```json
{
"title": "New Task",
"description": "Task Description",
"date": "2025-02-15"
}
```

### List Tasks
- **Route:** `GET /tasks/list`

### Edit Task
- **Route:** `PUT /tasks/edit/:id`
- **Body:**
```json
{
"title": "Updated Task",
"description": "New Description",
"date": "2025-02-20"
}
```

### Delete Task
- **Route:** `DELETE /tasks/delete/:id`

---
**Developed by Matheus**

