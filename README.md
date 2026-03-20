# Task Manager Application

This is a simple task manager application built using FastAPI for the backend and React for the frontend. The goal of this project was to implement basic CRUD operations and connect a frontend UI with a backend API.

---

## What this project does

* You can add a new task with a title and description
* All tasks are displayed in a table format
* You can mark a task as completed
* You can delete a task

The UI is kept minimal and clean to focus more on functionality.

---

## Tech used

**Backend**

* FastAPI
* MongoDB (Motor driver)

**Frontend**

* React (Vite)

---

## Project structure

```id="y8d3lc"
TASKMANAGERAPPLICATION/
│
├── Backend/
│   ├── app/
│   ├── venv/
│   ├── .env
│   └── requirements.txt
│
├── Frontend/
│   └── task_manager_application/
│
└── README.md
```

---

## How to run the project

### 1. Clone the repo

```id="7ndvfa"
git clone <https://github.com/Siddharthp23/TaskManagerApplication/>
cd TASKMANAGERAPPLICATION
```

---

### 2. Setup backend

```id="qk2dne"
cd Backend
python -m venv venv
```

Activate environment (Windows):

```id="q5i9gh"
venv\Scripts\activate
```

Install dependencies:

```id="6y5k9v"
pip install -r requirements.txt
```

Create a  `.env` file:

```id="0n7ch3"
MONGO_URL=mongodb://localhost:27017
```

Run the server:

```id="l7qz1k"
uvicorn app.main:app --reload
```

---

### 3. Setup frontend

```id="f7bzls"
cd ../Frontend/task_manager_application
npm install
npm run dev
```

---

## API endpoints

* `POST /tasks` → create task
* `GET /tasks` → get all tasks
* `PUT /tasks/{id}` → mark as completed
* `DELETE /tasks/{id}` → delete task

---

## Notes

* Database used: `task_db`
* Collection: `tasks`
* Make sure MongoDB is running before starting the backend

---

## Possible improvements

* Add edit functionality
* Add filters (completed / pending)
* Improve UI styling
* Add authentication

---

## Author

Siddharth Pagare
