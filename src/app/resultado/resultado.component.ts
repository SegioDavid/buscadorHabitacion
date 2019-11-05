import { PeticionControllerService } from './../shared/peticion-controller.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/model/categoria';
import { Camas } from '../core/model/camas';
import { Capacidad } from '../core/model/capacidad';
import { Extras } from '../core/model/extras';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  
  constructor(public resultadoService: PeticionControllerService) {
  }
  ngOnInit() {
  }

}
