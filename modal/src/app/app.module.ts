import { NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './confirm.component';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-modal';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BootstrapModalModule,
    ModalModule
  ],
  //Don't forget to add the component to entryComponents section
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
