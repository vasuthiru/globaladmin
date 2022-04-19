/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBasicDetailsFormComponent } from './school-basic-details-form.component';

describe('SchoolBasicDetailsFormComponent', () => {
  let component: SchoolBasicDetailsFormComponent;
  let fixture: ComponentFixture<SchoolBasicDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBasicDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBasicDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
