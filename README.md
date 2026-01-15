# Task Manager

A modern, full-stack task management application built with Angular 16 and JSON Server. Features a clean, intuitive interface with real-time updates, routing, and persistent data storage.

## 🚀 Features

### Core Functionality
- ✅ **Create Tasks**: Add new tasks with title and description
- ✅ **View Tasks**: Browse all tasks with search and filtering
- ✅ **Update Tasks**: Toggle completion status
- ✅ **Delete Tasks**: Remove tasks with confirmation
- ✅ **Real-time Updates**: Instant UI updates with reactive programming

### User Experience
- 🎨 **Modern UI**: Clean menu-driven interface with smooth animations
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🔔 **Toast Notifications**: Dynamic success/error feedback
- 🔍 **Search & Filter**: Find tasks by title/description and status
- ⚡ **Fast Performance**: Optimized with OnPush change detection

### Technical Features
- 🛣️ **Angular Routing**: Separate pages for create/view operations
- 🔄 **Reactive State**: RxJS BehaviorSubject for state management
- 🌐 **REST API**: JSON Server backend with full CRUD operations
- 💾 **Data Persistence**: Automatic saving to JSON file
- 🎯 **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: Angular 16, TypeScript, RxJS, Bootstrap 5, SCSS
- **Backend**: JSON Server (REST API simulation)
- **State Management**: Reactive Services with BehaviorSubject
- **Styling**: Bootstrap + Custom SCSS with animations
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd task-manager
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Backend (JSON Server)
```bash
npm run server
```
This starts JSON Server on `http://localhost:3000` with data stored in `db.json`.

### 4. Start the Frontend (Angular)
```bash
ng serve
```
Navigate to `http://localhost:4200` in your browser.

## 📖 Usage

### First Time Setup
1. **Start Backend**: Run `npm run server` (keep it running)
2. **Start Frontend**: Run `ng serve` in another terminal
3. **Open App**: Visit `http://localhost:4200`

### Using the Application
1. **Home Screen**: Choose between "Create Task" or "View Tasks"
2. **Creating Tasks**: Fill in title (required) and description, click "Add Task"
3. **Viewing Tasks**: Use search bar and filter buttons to find tasks
4. **Managing Tasks**: Click checkbox to toggle completion, click delete button to remove

### Sample Data
The app starts with an empty task list. Add your first task to get started!

## 📁 Project Structure

```
task-manager/
├── db.json                 # JSON Server database
├── src/
│   ├── app/
│   │   ├── core/           # Core services
│   │   │   ├── task.service.ts     # Task data management
│   │   │   └── toast.service.ts    # Notification system
│   │   ├── shared/         # Shared models
│   │   │   └── task.model.ts       # Task interface
│   │   ├── features/       # Feature modules
│   │   │   ├── create-task/        # Task creation
│   │   │   ├── view-tasks/         # Task listing
│   │   │   └── task-item/          # Individual task component
│   │   ├── ui/             # UI components
│   │   │   └── toast/              # Toast notifications
│   │   ├── app.component.*         # Root component
│   │   ├── app.module.ts           # App module
│   │   └── app-routing.module.ts   # Routing configuration
│   ├── assets/             # Static assets
│   ├── styles.scss         # Global styles
│   └── index.html          # Main HTML
├── angular.json            # Angular CLI config
├── package.json            # Dependencies & scripts
└── README.md              # This file
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run server` | Start JSON Server backend on port 3000 |
| `ng serve` | Start Angular dev server on port 4200 |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng lint` | Run linting |

## 🌐 API Endpoints

JSON Server provides the following REST endpoints:

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

Example task object:
```json
{
  "id": 1,
  "title": "Complete project",
  "description": "Finish the task manager app",
  "completed": false
}
```
