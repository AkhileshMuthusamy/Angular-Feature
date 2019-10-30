import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.css']
})
export class FormHandlingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onInput(event: KeyboardEvent) {
    // setTimeout(() => {
    const inputValue: string = (event.target as HTMLInputElement).value;
    console.log(`Received: ${(event.target as HTMLInputElement).value}`);
    if (inputValue.length > 5) {
      (event.target as HTMLInputElement).value = inputValue.slice(0, 5);
    }
    // }, 3000);
  }
}
