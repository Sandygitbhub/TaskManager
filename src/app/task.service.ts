import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.http.get<Task[]>(this.apiUrl).subscribe(tasks => {
      this.tasksSubject.next(tasks);
    });
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  getTasksValue(): Task[] {
    return this.tasksSubject.value;
  }

  addTask(title: string, description: string): Observable<Task> {
    const newTask: Omit<Task, 'id'> = {
      title: title.trim(),
      description: description.trim(),
      completed: false
    };
    return this.http.post<Task>(this.apiUrl, newTask).pipe(
      tap(task => {
        const currentTasks = this.tasksSubject.value;
        this.tasksSubject.next([...currentTasks, task]);
      })
    );
  }

  toggleComplete(id: number): Observable<Task> {
    const currentTasks = this.tasksSubject.value;
    const task = currentTasks.find(t => t.id === id);
    if (task) {
      const updatedTask = { ...task, completed: !task.completed };
      return this.http.put<Task>(`${this.apiUrl}/${id}`, updatedTask).pipe(
        tap(() => {
          const updatedTasks = currentTasks.map(t => t.id === id ? updatedTask : t);
          this.tasksSubject.next(updatedTasks);
        })
      );
    }
    throw new Error('Task not found');
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const currentTasks = this.tasksSubject.value;
        const updatedTasks = currentTasks.filter(t => t.id !== id);
        this.tasksSubject.next(updatedTasks);
      })
    );
  }
}
