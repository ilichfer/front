import { Persona } from './../../Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  persona: Persona = new Persona();

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert('Se Agrego con Exito...!!!'  + this.persona.id + ' ' + this.persona.fullname + ' ' + this.persona.birth);
      this.router.navigate(['listar']);
    })
  }



  // tslint:disable-next-line: typedef
/*   Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data => {
      alert(' Se ha agregado con exito a ' + this.persona.id + ' ' + this.persona.fullname + ' ' + this.persona.birth);
      this.router.navigate(['listar']);
    });

  } */
}
