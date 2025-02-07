# Todo List Frontend

This is a simple frontend for a Todo List application built with HTML, CSS, and JavaScript. It interacts with a backend API to perform CRUD (Create, Read, Update, Delete) operations.

## Features
- Fetch and display todos from the API
- Add new todos
- Edit existing todos
- Delete todos

## Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/todo-frontend.git
   cd todo-frontend
   ```
2. Open `index.html` in a browser.
3. Ensure the backend API is running at `http://localhost:8080/todo`.

## API Endpoints Used
- `GET http://localhost:8080/todo` - Fetch all todos
- `POST http://localhost:8080/todo` - Add a new todo
- `PATCH http://localhost:8080/todo/:uuid` - Update a todo
- `DELETE http://localhost:8080/todo/:uuid` - Delete a todo

## Notes
- Make sure your backend is running and accessible.
- Update `apiUrl` in `index.html` if your backend runs on a different address.

## License
This project is open-source. Feel free to use and modify it!

