import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultorioComponent } from './add-consultorio.component';

describe('AddConsultorioComponent', () => {
  let component: AddConsultorioComponent;
  let fixture: ComponentFixture<AddConsultorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
