import { NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-modal';
import { PhoneComponent } from './phone/phone.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BootstrapModalModule,
    ModalModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
