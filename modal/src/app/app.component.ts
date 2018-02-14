import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfirmComponent } from './confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalModule } from "ngx-modal";

@Component({
  selector: 'app-root',
  template: `
  <div class="row">
      <button (click)="myModal.open()">open my modal</button>
      <modal #myModal class="password-modal">
          <modal-header>
              <h1>Modal header</h1>
          </modal-header>
          <modal-content>
              Hello Modal!
          </modal-content>
          <modal-footer>
              <button class="btn btn-primary" (click)="submitForm()">Submit</button>
              <button class="btn btn-warning" #close (click)="myModal.close()">close</button>
          </modal-footer>
      </modal>
  </div>
      `
})
export class AppComponent {
  @ViewChild('close') close:ElementRef;

  constructor(private dialogService:DialogService) {}
  submitForm() {
    this.close.nativeElement.click();
    console.log("all good");
  }
}
