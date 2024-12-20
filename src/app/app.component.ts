import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { FotterComponent } from './fotter/fotter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ContentComponent,AboutComponent,FotterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'karthikMortgage';
}
