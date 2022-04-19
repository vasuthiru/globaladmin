import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolsummaryService {
  SchoolSummaryList={
    school_name:'vvvhs school',
    school_address:'godavarikhani',
    curriculum:'text',
    assign_group:['test', 'test2'],
    classes:['class1', 'class2'],
    subjects:['maths', 'science'],
    teacher_count:30,
    student_count:300,
    min_class:'1st',
    max_class:'12th'
  };
  constructor(private http:HttpClient) { }
}
