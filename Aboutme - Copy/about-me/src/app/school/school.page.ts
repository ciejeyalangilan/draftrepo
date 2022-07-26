import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.page.html',
  styleUrls: ['./school.page.scss'],
})
export class SchoolPage implements OnInit {

  public school: any= [
    {id: 1, school: 'Batangas State University Alangilan Campus', cat: 'school'}
    
]

constructor( private router:Router) { }

ngOnInit() {
}


}
