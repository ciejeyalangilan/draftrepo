import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {
  public name: any= [
    {id: 1, name: 'Christine Joy Masangcay Alangilan', cat: 'name'}
    
]

constructor( private router:Router) { }

ngOnInit() {
}

}
