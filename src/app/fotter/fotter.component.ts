import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-fotter',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './fotter.component.html',
  styleUrl: './fotter.component.css'
})
export class FotterComponent {

}
