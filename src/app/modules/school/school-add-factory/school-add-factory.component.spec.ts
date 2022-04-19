/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAddFactoryComponent } from './school-add-factory.component';

describe('SchoolAddFactoryComponent', () => {
  let component: SchoolAddFactoryComponent;
  let fixture: ComponentFixture<SchoolAddFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAddFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAddFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
