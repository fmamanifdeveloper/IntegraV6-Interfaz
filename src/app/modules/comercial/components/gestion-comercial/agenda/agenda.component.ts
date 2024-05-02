import { Component, computed, effect, Input, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  constructor(
    private _formBuilder: FormBuilder,
  ) {
    effect(() => console.log('Name changed:', this.fullName()));
  }

  @Input({ required: true }) title: string = '';
  formulario = this._formBuilder.group({
    nombre: new FormControl<string>(''),
    apellidos: new FormControl<string>(''),
    modalidades: new FormControl<number[]>([])
  })
  obtenerDatos(){
    let item = this.formulario.getRawValue().nombre
  }
  
  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);


  setName(newName: string) {
    this.firstName.set(newName);
  }
  
}
