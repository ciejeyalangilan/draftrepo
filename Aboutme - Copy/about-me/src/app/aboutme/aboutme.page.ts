import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.page.html',
  styleUrls: ['./aboutme.page.scss'],
})
export class AboutmePage implements OnInit {

  constructor(private router: Router) { }



  ngOnInit() {
  }

  personal(){
    this.router.navigate(['personal'])
  }
  interests(){
    this.router.navigate(['interests'])
  }
  gettoknow(){
    this.router.navigate(['gettoknow'])
  }


}
