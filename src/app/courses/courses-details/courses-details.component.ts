import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent
{


  selectedCourse;
  originalTitle;

  @Input() set course(value)
  {
    if (value)
    {
      // create clone of course variable
      // avoid shared mutability where we dont want it
      // shouldnt affect title displayed in course-details until
      // after submit is clicked
      this.selectedCourse = Object.assign({}, value)
      this.originalTitle = value.title;
    }
  };


  @Output() saved = new EventEmitter();

  @Output() cancelled = new EventEmitter();



}
