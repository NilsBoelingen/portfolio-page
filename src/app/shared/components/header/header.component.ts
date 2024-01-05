import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public aboutMe: boolean = false;
  public skills: boolean = false;
  public portfolio: boolean = false;

  public selectedItem: string | null = null;

  public selectItem(item: string): void {
    this.portfolio = false;
    this.skills = false;
    this.aboutMe = false;
    (this as any)[item] = true;
    this.selectedItem = item;
  }

  public resetSelected() {
    this.aboutMe = false;
    this.portfolio = false;
    this.skills = false;
    this.selectedItem = null;
  }
}