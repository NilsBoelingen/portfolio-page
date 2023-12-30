import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  scrollbarWidth: number = 17;
  headlineGap: number = 42;

  constructor() {
    setInterval(() => this.changeLineWidth(), 500);
  }

  changeLineWidth() {
    let headline: any = document.getElementById('headline');
    let lineWidth = (window.innerWidth / 2) - (headline?.clientWidth / 2) - this.scrollbarWidth - this.headlineGap;
    let rightLine: any = document.getElementById('rightLine');
    rightLine.style.width = `${lineWidth}px`;
  }
}
