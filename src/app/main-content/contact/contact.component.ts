import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatSlideToggleModule, MatCheckboxModule, NgStyle, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  img: any;
  url(arg0: number): any {
    throw new Error('Method not implemented.');
  }

  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  @ViewChild('checkbox') checkbox!: ElementRef;

  nameValue: boolean = false;
  nameClicked: boolean = false;
  emailValue: boolean = false;
  emailClicked: boolean = false;
  messageValue: boolean = false;
  messageClicked: boolean = false;
  checkboxActive: boolean = false;
  checkboxClicked: boolean = false;

  checkNameEmpty() {
    if (this.name.nativeElement.value) {
      this.nameValue = true;
      this.name.nativeElement.style.border = '1px solid #70E61C';
    } else {
      this.nameValue = false;
      this.name.nativeElement.style.border = '1px solid #E61C40';
    }
  }

  checkEmailEmpty() {
    if (this.email.nativeElement.value) {
      this.emailValue = true;
      this.email.nativeElement.style.border = '1px solid #70E61C';
    } else {
      this.emailValue = false;
      this.email.nativeElement.style.border = '1px solid #E61C40';
    }
  }

  checkMessageEmpty() {
    if (this.message.nativeElement.value) {
      this.messageValue = true;
      this.message.nativeElement.style.border = '1px solid #70E61C';
    } else {
      this.messageValue = false;
      this.message.nativeElement.style.border = '1px solid #E61C40';
    }
  }

  activateCheckbox() {
    if (this.checkbox.nativeElement.checked) {
      this.checkboxActive = true;
      console.log(this.checkboxActive);
    } else {
      this.checkboxActive = false;
      console.log(this.checkboxActive);
    }
  }
}
