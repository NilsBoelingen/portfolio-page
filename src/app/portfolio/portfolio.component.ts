import { Component } from '@angular/core';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemComponent, NgFor, NgForOf, CommonModule, PortfolioItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  public projects = [
    {
      titel: "Join",
      Languages: "HTML | CSS | JavaScript",
      describtion: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      image: "assets/img/portfolio/join.png"
    },
    {
      titel: "Skarkie",
      Languages: "HTML | CSS | JavaScript",
      describtion: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
      image: "assets/img/portfolio/sharkie.png"
    },
    {
      titel: "Simple CRM",
      Languages: "Angular | Firebase",
      describtion: "A very Simple Customer Relationship Management system working with CRUD functionality.",
      image: "assets/img/portfolio/simple_crm.png"
    },
    {
      titel: "Pokédex",
      Languages: "HTML | CSS | JavaScript | Api",
      describtion: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      image: "assets/img/portfolio/pokedex.png"
    },
    {
      titel: "DA Bubble",
      Languages: "HTML | CSS | JavaScript",
      describtion: "A simple messanger inspired by Slack. Get and Post Messages to your Team or your friends.",
      image: "assets/img/portfolio/da_bubble.png"
    },
    {
      titel: "Ring of Fire",
      Languages: "Angular | Firebase | TypeScript",
      describtion: "A simple Card game based on the Popular drink game.",
      image: "assets/img/portfolio/ring_of_fire.png"
    },
  ]

  scrollbarWidth: number = 17;
  headlineGap: number = 42;

  constructor() {
    setInterval(() => this.changeLineWidth(), 1000);
  }

  changeLineWidth() {
    let headline: any = document.getElementById('headline');
    let lineWidth = (window.innerWidth / 2) - (headline?.clientWidth / 2) - this.scrollbarWidth - this.headlineGap;
    let rightLine: any = document.getElementById('rightLine');
    rightLine.style.width = `${lineWidth}px`;
  }
}
