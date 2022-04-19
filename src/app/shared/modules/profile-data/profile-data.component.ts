import { Component } from '@angular/core';

@Component({
  selector: 'ga-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent  {
  profileData = {
    type:'group school',
    school_name: 'delhi public school',
    first_name: 'delhi public school',
    location: 'gdks',
    district: 'peddapalli',
    state:  'telangana',
    country:'delhi public school',
    pin: 505209
  };
  constructor() { }

  

}
