import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, DashboardComponent,FormsModule,HttpClientModule],
})
export class AppComponent {
  title = 'todomvc';
}
