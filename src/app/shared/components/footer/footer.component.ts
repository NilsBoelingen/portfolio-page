import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf, HeaderComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  mouseOver: boolean = false;
}
