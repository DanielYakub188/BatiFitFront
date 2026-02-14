import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalFormComponent } from './personal-form.component';

describe('PersonalFormComponent', () => {
  let component: PersonalFormComponent;
  let fixture: ComponentFixture<PersonalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.personalForm.get('name')?.value).toBe('');
    expect(component.personalForm.get('age')?.value).toBe('');
  });

  it('should validate required fields', () => {
    expect(component.personalForm.invalid).toBeTruthy();
  });

  it('should emit formSubmit event on valid form submission', () => {
    spyOn(component.formSubmit, 'emit');
    component.personalForm.patchValue({
      name: 'Juan',
      age: 25,
      gender: 'masculino',
      goal: 'ganar_masa',
      heightCm: 180,
      weightKg: 80,
      fatPercent: 15,
    });
    component.onSubmit();
    expect(component.formSubmit.emit).toHaveBeenCalled();
  });
});
