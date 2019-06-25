import { Component } from '@angular/core';
import { Student } from './student/student.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Conruscant' },
    { name: 'Leia', isJedi: false },
    { name: 'Han solo', isJedi: false }
  ]

}
