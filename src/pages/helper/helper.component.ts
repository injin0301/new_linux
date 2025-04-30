import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-helper',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './helper.component.html',
  styleUrl: './helper.component.scss'
})
export class HelperComponent {

}
