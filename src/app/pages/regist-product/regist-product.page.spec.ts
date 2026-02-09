import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistProductPage } from './regist-product.page';

describe('RegistProductPage', () => {
  let component: RegistProductPage;
  let fixture: ComponentFixture<RegistProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
