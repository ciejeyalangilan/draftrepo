import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myint',
  templateUrl: './myint.component.html',
  styleUrls: ['./myint.component.scss'],
})
export class MyintComponent implements OnInit {

  public person: any = [
    { id: 1, hobby:         'Editing, taking photos & videos', pers: 0 },
    { id: 2, country:       'Australia', pers: 1 },
    { id: 3, car:           'Mustang', pers: 2 },
    { id: 4, job:           'To be a Surgeon', pers: 3 },
    { id: 5, crush:         'Daniel Johnford Padilla', pers: 4 },
    { id: 6, song:          'Say you wont let go', pers: 5 },
    { id: 7, food:          'Fried Eggplant', pers: 6 },
    { id: 8, drink:         'Cucumber Lemonade', pers: 7 },
    { id: 9, classmate:     'Nica Rose Bautista', pers: 8 },
    
]
  constructor() { }

  ngOnInit() {}

}
