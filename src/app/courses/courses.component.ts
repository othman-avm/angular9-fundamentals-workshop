import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit
{


  selectedCourse = null

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: "JavaScript The hard parts",
      description: "Things you might not know",
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void
  {
    this.resetSelectedCourse();
  }


  resetSelectedCourse()
  {
    const emptyCourse =
    {
      id: null,
      title: "",
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectedCourse = emptyCourse;
  }

  /** 
   * Evene handler 
   * Selects the course
  */

  selectCourse(course)
  {
    this.selectedCourse = course;
  }

  deleteCourse(courseId)
  {
    console.log("COURSE DELETED!", courseId)
  }

  cancel()
  {
    this.resetSelectedCourse();
  }

  saveCourse()
  {
    console.log("SAVE COURSE!")
  }

}
