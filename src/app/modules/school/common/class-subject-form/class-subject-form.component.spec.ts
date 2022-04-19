/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubjectFormComponent } from './class-subject-form.component';

describe('ClassSubjectFormComponent', () => {
  let component: ClassSubjectFormComponent;
  let fixture: ComponentFixture<ClassSubjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSubjectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSubjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
