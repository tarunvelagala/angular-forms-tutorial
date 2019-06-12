import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myData = [
    {
      name: "Person 1",
      age: 20,
      email: "tarunvelagala80@gmail.com"
    },
    {
      name: "Person 2",
      age: 21,
      email: "tarunvelagala81@gmail.com"
    },
    {
      name: "Person 3",
      age: 22,
      email: "tarunvelagala83@gmail.com"
    }
  ];
  userForm;
  constructor() {
    this.userForm = new FormGroup({
      'name': new FormControl(),
      'age': new FormControl(),
      'email': new FormControl()
    })
  };
  formSubmit() {
    this.myData.push(
      this.userForm.value
    );
  }
}
