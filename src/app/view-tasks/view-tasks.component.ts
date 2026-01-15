import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: 'all' | 'completed' | 'pending' = 'all';
  searchTerm = '';

  constructor(private taskService: TaskService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.applyFilterAndSearch();
    });
  }

  toggleComplete(id: number): void {
    this.taskService.toggleComplete(id).subscribe({
      next: () => {
        this.toastService.showSuccess('Task status updated!');
      },
      error: (err) => {
        console.error('Error toggling task:', err);
        this.toastService.showError('Error updating task. Please try again.');
      }
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.toastService.showSuccess('Task deleted successfully!');
      },
      error: (err) => {
        console.error('Error deleting task:', err);
        this.toastService.showError('Error deleting task. Please try again.');
      }
    });
  }

  setFilter(filter: 'all' | 'completed' | 'pending'): void {
    this.filter = filter;
    this.applyFilterAndSearch();
  }

  onSearch(): void {
    this.applyFilterAndSearch();
  }

  private applyFilterAndSearch(): void {
    let filtered = [...this.tasks];

    // Apply filter
    switch (this.filter) {
      case 'completed':
        filtered = filtered.filter(task => task.completed);
        break;
      case 'pending':
        filtered = filtered.filter(task => !task.completed);
        break;
    }

    // Apply search
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(term) ||
        task.description.toLowerCase().includes(term)
      );
    }

    this.filteredTasks = filtered;
  }

  trackByFn(index: number, item: Task): number {
    return item.id;
  }
}
