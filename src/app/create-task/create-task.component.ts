import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  newTitle = '';
  newDescription = '';

  constructor(private taskService: TaskService, private router: Router, private toastService: ToastService) {}

  addTask(): void {
    const title = this.newTitle.trim();
    if (!title) {
      this.toastService.showError('Task title is required.');
      return;
    }
    this.taskService.addTask(title, this.newDescription.trim()).subscribe({
      next: () => {
        this.newTitle = '';
        this.newDescription = '';
        this.toastService.showSuccess('Task added successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error adding task:', err);
        this.toastService.showError('Error adding task. Please try again.');
      }
    });
  }
}
