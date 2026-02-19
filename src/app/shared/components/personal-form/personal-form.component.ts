import { ProfileService } from './../../../pages/profile/profile.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
  IonPopover,
} from '@ionic/angular/standalone';
import { IonicModule, ModalController } from '@ionic/angular';
import { PersonalAtributes } from '../../models/personalAtributes';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    IonModal,
    IonButtons,
    IonHeader,
  ],
})
export class PersonalFormComponent implements OnInit {
  @Input() initialData?: PersonalAtributes;
  @Output() formSubmit = new EventEmitter<PersonalAtributes>();

  name: string = '';
  age: number = 0;
  gender: string = '';
  goal: string = '';
  heightCm: number = 0;
  weightKg: number = 0;
  fatPercent: number = 0;

  personalForm!: FormGroup;

  genderOptions = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Femenino', value: 'femenino' },
  ];

  goalOptions = [
    { label: 'Ganar masa muscular', value: 'Volumen' },
    { label: 'Perder peso', value: 'perder_peso' },
    { label: 'Definición', value: 'definicion' },
    { label: 'Mantenimiento', value: 'mantenimiento' },
  ];

  constructor(
    private fb: FormBuilder,
    public modalController: ModalController,
    private ProfileService: ProfileService,
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.personalForm = this.fb.group({
      name: [
        this.initialData?.name || '',
        [Validators.required, Validators.minLength(2)],
      ],
      age: [
        this.initialData?.age || '',
        [Validators.required, Validators.min(1), Validators.max(150)],
      ],
      gender: [this.initialData?.gender || '', Validators.required],
      goal: [this.initialData?.goal || '', Validators.required],
      heightCm: [
        this.initialData?.heightCm || '',
        [Validators.required, Validators.min(100), Validators.max(250)],
      ],
      weightKg: [
        this.initialData?.weightKg || '',
        [Validators.required, Validators.min(30), Validators.max(300)],
      ],
      fatPercent: [
        this.initialData?.fatPercent || '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
    });
  }

  onSubmit() {
    if (this.personalForm.valid) {

      const formData: PersonalAtributes = {
        userId: this.initialData?.userId || 0,
        imc: this.initialData?.imc || 0,
        muscleMass: this.initialData?.muscleMass || 0,
        fatMass: this.initialData?.fatMass || 0,
        ...this.personalForm.value,
      };
      this.ProfileService.updateProfile(formData).subscribe({
        next: () => {
          console.log('Perfil actualizado')
          console.log(formData);
        },
        error: (err) => {
          console.error('Error al actualizar el perfil', err);
        }
      })

      this.modalController.dismiss(formData);
    } else {
      console.log('Formulario inválido');
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.personalForm.get(fieldName);
    if (control?.hasError('required')) {
      return `${this.getFieldLabel(fieldName)} es requerido`;
    }
    if (control?.hasError('minLength')) {
      return `${this.getFieldLabel(fieldName)} debe tener al menos 2 caracteres`;
    }
    if (control?.hasError('min')) {
      return `${this.getFieldLabel(fieldName)} debe ser mayor o igual a ${control.getError('min').min}`;
    }
    if (control?.hasError('max')) {
      return `${this.getFieldLabel(fieldName)} debe ser menor o igual a ${control.getError('max').max}`;
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Nombre',
      age: 'Edad',
      gender: 'Género',
      goal: 'Objetivo',
      heightCm: 'Altura',
      weightKg: 'Peso',
      fatPercent: 'Porcentaje de grasa',
    };
    return labels[fieldName] || fieldName;
  }

  // Sanitizar entrada de edad (solo números)
  sanitizeAge(event: any) {
    const value = event.target.value;
    const sanitized = value.replace(/[.,]/g, '');
    event.target.value = sanitized;
    this.personalForm.get('age')?.setValue(sanitized, { emitEvent: false });
  }

  // Sanitizar entrada de peso (solo números y comas)
  sanitizeWeight(event: any) {
    const value = event.target.value;
    const sanitized = value.replace(/[.]/g, '');
    event.target.value = sanitized;
    this.personalForm
      .get('weightKg')
      ?.setValue(sanitized, { emitEvent: false });
  }

  // Sanitizar entrada de grasa (solo números y comas)
  sanitizeFatPercent(event: any) {
    const value = event.target.value;
    const sanitized = value.replace(/[.]/g, '');
    event.target.value = sanitized;
    this.personalForm
      .get('fatPercent')
      ?.setValue(sanitized, { emitEvent: false });
  }
}
