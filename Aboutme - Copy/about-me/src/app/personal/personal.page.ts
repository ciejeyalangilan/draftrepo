import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  

  constructor( private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['aboutme']);
  }
  name(){
    this.router.navigate(['name']);
  }
  address(){
    this.router.navigate(['address']);
  }
  birthday(){
    this.router.navigate(['birthday']);
  }
  school(){
    this.router.navigate(['school']);
  }
  course(){
    this.router.navigate(['course']);
  }
  instructor(){
    this.router.navigate(['instructor']);
  }
 
 
 
}