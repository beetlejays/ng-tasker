import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
 inputTask: string = ""

 inputTasks: string[] = []

 onSaveTask() {
  this.inputTasks.push(this.inputTask)
  console.log(this.inputTasks)
 }

}
