import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.page.html',
  styleUrls: ['./birthday.page.scss'],
})
export class BirthdayPage implements OnInit {

 
  public birthday: any= [
    {id: 1, birthday: 'December 19, 2000  21 Years Old', cat: 'birthday'}
    
]

constructor( private router:Router) { }

ngOnInit() {
}


}
