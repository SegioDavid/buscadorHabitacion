import { PeticionControllerService } from './../shared/peticion-controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.component.html',
  styleUrls: ['./peticion.component.scss']
})
export class PeticionComponent implements OnInit {
 
  
  constructor(public peticionService: PeticionControllerService) {
    
  }

  ngOnInit() {
    
  }

}
