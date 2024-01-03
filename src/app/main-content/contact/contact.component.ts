import { Component, ViewChild } from '@angular/core';
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

  @ViewChild('contactForm') contactForm: any;
  @ViewChild('name') name: any;
  @ViewChild('email') email: any;
  @ViewChild('massage') massage: any;

  nameValue: boolean = false;

  checkNameEmpty() {
    if (this.name.nativeElement.value) {
      this.nameValue = true;
      console.log('passt' + this.name.nativeElement.value);
    } else {
      this.nameValue = false;
      console.log('name ist leer');
    }
  }

  checkEmailEmpty() {
    if (this.email.nativeElement.value) {
      console.log('passt' + this.email.nativeElement.value);
    } else {
      console.log('email ist leer');
    }
  }

  checkMassageEmpty() {
    if (this.massage.nativeElement.value) {
      console.log('passt' + this.massage.nativeElement.value);
    } else {
      console.log('massage ist leer');
    }
  }

}
