import { Component } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../pages/header/header.component';
import { FooterComponent } from '../pages/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, RouterOutlet, HeaderComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
