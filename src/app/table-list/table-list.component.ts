import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  

  tiposDeDocumento: Array<string>;
  nombresMedicos: Array<string>;
  tiposDeConsulta: Array<string>;
  

  form: FormGroup;
  citas: Array<any>;

  constructor(private fb: FormBuilder, private toastr: ToastrService) { 
    this.tiposDeConsulta = ['Consulta prioritaria', 'Consulta por Urgencias', 'Consulta externa', 'Control' ];
    this.nombresMedicos = ['Ellen Pompeo','Hugh Laurie', 'Freddie Highmore'];
    this.tiposDeDocumento = ['Cedula de ciudadania', 'Cedula extranjera', 'NIT'];
    this.citas = [];

  }

  showNotification(from, align){

      const color = Math.floor((Math.random() * 5) + 1);

      switch(color){
        case 1:
        this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Cita medica almacenada', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-info alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 2:
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Cita medica almacenada', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-success alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 3:
        this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Cita medica almacenada', '', {
           timeOut: 8000,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-warning alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 4:
        this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Cita medica almacenada', '', {
           timeOut: 8000,
           enableHtml: true,
           closeButton: true,
           toastClass: "alert alert-danger alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
         break;
         case 5:
         this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Cita medica almacenada', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: 'toast-' + from + '-' +  align
          });
        break;
        default:
        break;
      }
  }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: new FormControl('',[
        Validators.required,
        // Validators.maxLength(15),
        // Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        // Validators.maxLength(20),
        // Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      tipodocumento: new FormControl('', [
        Validators.required
      ]),
      documento: new FormControl('', [
        Validators.required,
        // Validators.maxLength(12),
        // Validators.minLength(6)
      ]),
      fechanacimiento: new FormControl('', [
        Validators.required
      ]),
      direccion: new FormControl('', [
        Validators.required,
        // Validators.maxLength(20),
        // Validators.minLength(5)
      ]),
      celular: new FormControl('', [
        Validators.required,
        // Validators.maxLength(10),
        // Validators.minLength(10)
      ]),
      aseguradora: new FormControl('', [
        Validators.required,
        // Validators.maxLength(20),
        // Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      medico: new FormControl('', [
        Validators.required,
        // Validators.maxLength(20)
      ]),
      tipoconsulta: new FormControl('', [
        Validators.required
      ]),
      check: new FormControl(''),
      auxcheck: new FormControl(''),

      fechacita: new FormControl('', [
        Validators.required
      ]),
      
    })
  }

  get nombre(){
    return this.form.get('nombre');
  }

  get apellidos(){
    return this.form.get('apellidos');
  }

  get email(){
    return this.form.get('email');
  }

  get documento(){
    return this.form.get('documento');
  }

  get fechanacimiento(){
    return this.form.get('fechanacimiento');
  }

  get direccion(){
    return this.form.get('direccion');
  }

  get celular(){
    return this.form.get('celular');
  }

  get aseguradora(){
    return this.form.get('aseguradora');
  }

  get fechacita(){
    return this.form.get('fechacita');
  }


  onResetForm(){
    this.form.reset();
  }

  onSaveForm(){
    if(this.form.value.check){
      this.form.setValue(
        {...this.form.value,
          auxcheck: 'Si'}
        )
    } else {
      this.form.setValue({...this.form.value, auxcheck: 'No'})
    }
    console.log(this.form.value);
    this.citas.push(this.form.value);
  }

}
