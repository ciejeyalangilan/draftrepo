import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  public course: any= [
    {id: 1, course: 'Bachelor of Science in Information Technology, Major in Business Analytics', cat: 'course'}
    
]

constructor( private router:Router) { }

ngOnInit() {
}


}
