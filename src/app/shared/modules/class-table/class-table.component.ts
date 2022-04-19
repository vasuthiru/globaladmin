import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { ClassesList } from './class.list';

@Component({
  selector: 'ga-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.scss']
})
export class ClassTableComponent implements OnInit, OnChanges {
  @Input() selected_class: Array<any>;
  @Output() sectionSelection = new EventEmitter<any>();
  classes = ClassesList;
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    const intersection = this.classes.filter(element => this.selected_class.includes(element.id));
    // this.classes.map(res=>intersection.includes(res)?(res.is_selected=true):res.is_selected=false);
    this.classes.map(res=>{
      if(intersection.includes(res)){
        res.is_selected=true;
        res.sections[0].is_active=true;
      }else{
        res.is_selected = false;
        res.sections.forEach(re=>re.is_active=false);
      }
    })
  }
  checkCheckBoxvalue(event:any, section:any, indx:number){
    let sectionIndx = this.classes[indx].sections.findIndex(res=>res===section);    
    if(event.checked){
      let incIndx = sectionIndx + 1;
      this.classes[indx]['sections'][sectionIndx]['is_checked']=true;
      if(incIndx<10){
        this.classes[indx]['sections'][incIndx]['is_active']=true;
      }
    }
    if(!event.checked){   
      if(sectionIndx < 9){
        let incIndx = sectionIndx + 1;
        // this.classes[indx]['sections'][sectionIndx+1]['is_active']=false;
        this.classes[indx].sections.slice(incIndx).map(res=>res.is_active=false);
        this.classes[indx].sections.slice(incIndx).map(res=>res.is_checked=false);
        if(sectionIndx === 0){
          this.classes[indx].sections.slice(sectionIndx).map(res=>res.is_checked=false);
        }
      }
    }
    // console.log(this.classes, 'ffff')
    this.sectionSelection.emit(this.classes)

  }
  
}
