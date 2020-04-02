import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  constructor() { 
    
  }

  ngOnInit() {
  }

  consulta1() {
    
    Swal.fire({
      title: '<strong>Especialista en cirugia general</strong>',
      icon: 'info',
      html:
        `
        
          <ul class="list-group">
            <li class="list-group-item">
              Cirugia de tórax: <strong>6.290.450 COP</strong>
            </li>
            <li class="list-group-item">
              Cirugia de pelvis: <strong>8.500.000 COP</strong>
            </li>
            <li class="list-group-item">
              Cirugia de quistes sebaceos: <strong>2.350.200 COP</strong>
            </li>
            <li class="list-group-item">
              Drenaje de abscesos del tejido celular subcutáneo: <strong>4.180.000 COP</strong>
            </li>
          </ul>
        
        `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Confirmar',
      
    })
  }

  consulta2() {
    
    Swal.fire({
      title: '<strong>Especialista en neurología</strong>',
      icon: 'info',
      html:
        `
        
          <ul class="list-group">
            <li class="list-group-item">
              Cirugía de inyección subconjuntival de antimetabolicos:: <strong>1.980.000 COP</strong>
            </li>
            <li class="list-group-item">
              Cirugía de reconstrucción de bula filtrante: <strong>8.350.000 COP</strong>
            </li>
            <li class="list-group-item">
              Cirugía de cistotomia de cápsula:  <strong>7.970.000 COP</strong>
            </li>
          </ul>
        
        `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Confirmar',
      
    })
  }

  consulta3() {
    
    Swal.fire({
      title: '<strong>Especialista en ginecobtetra y ginecología </strong>',
      icon: 'info',
      html:
        `
        
          <ul class="list-group">
            <li class="list-group-item">
              Cesárea: <strong>2.000.000 COP</strong>
            </li>
            <li class="list-group-item">
              Ligadura de trompas: <strong>3.260.000 COP</strong>
            </li>
            <li class="list-group-item">
              Embarazo ectopico: <strong>2.680.000 COP</strong>
            </li>
            <li class="list-group-item">
              Ruptura uterina: <strong>3.600.000 COP</strong>
            </li>
          </ul>
        
        `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Confirmar',
      
    })
  }


}
