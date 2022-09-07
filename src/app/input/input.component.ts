import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
 inputTask = "bruce"

 myEvent(e: string) {
  console.log(e)
 }

 onSaveTask(inputTask: string)  {
  console.log(inputTask)
 }

}
