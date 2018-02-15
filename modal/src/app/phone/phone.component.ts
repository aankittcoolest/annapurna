import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

    maxLength=10

    model = new Phone('')

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

    // @HostListener('keydown', ['$event']) onkeydown(event) {
    //     let e = <KeyboardEvent>event
    //     if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
    //         // Allow: Ctrl+A
    //         (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
    //         // Allow: Ctrl+C
    //         (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
    //         // Allow: Ctrl+V
    //         (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
    //         // Allow: Ctrl+X
    //         (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
    //         // Allow: home, end, left, right
    //         (e.keyCode >= 35 && e.keyCode <= 39)) {
    //         // let it happen, don't do anything
    //         return;
    //     }
    //     // Ensure that it is a number and stop the keypress
    //     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //         e.preventDefault();
    //     }
    // }

    onSubmit() {
        console.log(this.model)
    }
}
