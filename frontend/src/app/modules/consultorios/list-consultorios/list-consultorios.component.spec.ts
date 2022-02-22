import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultoriosComponent } from './list-consultorios.component';

describe('ListConsultoriosComponent', () => {
  let component: ListConsultoriosComponent;
  let fixture: ComponentFixture<ListConsultoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsultoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsultoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
