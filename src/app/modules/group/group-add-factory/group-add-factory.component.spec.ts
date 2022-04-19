/* eslint-disable no-undef */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAddFactoryComponent } from './group-add-factory.component';

describe('GroupAddFactoryComponent', () => {
  let component: GroupAddFactoryComponent;
  let fixture: ComponentFixture<GroupAddFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAddFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAddFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
