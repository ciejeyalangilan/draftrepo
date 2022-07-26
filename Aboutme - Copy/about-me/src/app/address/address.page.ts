import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  public address: any= [
    {id: 1, address: '045, Villa Teresa, Sambat, San Pascual, Batangas', cat: 'address'}
    
]

constructor( private router:Router) { }

ngOnInit() {
}


}
