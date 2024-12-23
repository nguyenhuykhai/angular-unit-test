import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GradePipe } from './grade.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, GradePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unit-testing';
  btnText = "Subscribe";
  isSubscribed = false;
  marks = [90, 80, 70, 60, 50];

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = "Subscribed";
    }, 3000);
  }
}
