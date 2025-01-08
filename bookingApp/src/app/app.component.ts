import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookingApp';
}
