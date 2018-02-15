import { Component, ElementRef, ViewChild,Input, HostListener, Directive } from '@angular/core';
import { ConfirmComponent } from './confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalModule } from "ngx-modal";

@Component({
  selector: 'app-root',
  template: `
  <app-phone></app-phone>
      `
})

@Directive({
    selector: '[OnlyNumber]'
  })

export class AppComponent {
  @ViewChild('close') close:ElementRef;

  maxLength='10';
  

  constructor( private el: ElementRef) {}

  submitForm() {
    this.close.nativeElement.click();
    console.log("all good");
  }
}
