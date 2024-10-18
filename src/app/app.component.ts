import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from "./shared/headers/headers.component";
import { Site1Component } from './site-1/site-1.component';
import { FootersComponent } from './shared/footers/footers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadersComponent,Site1Component , FootersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finaly-project';
}
