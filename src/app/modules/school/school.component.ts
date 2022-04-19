import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent  {

  constructor(private location:Location) { }

  goBack(){
    this.location.back();
  }
}
