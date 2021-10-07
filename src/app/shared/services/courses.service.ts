import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  private courses = [
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
    },
    {
      id: 3,
      title: "TypeScript: JavaScript's big dick brother",
      description: "What if JavaScript was more like Java?",
      percentComplete: 0,
      favorite: true
    }
  ];

  constructor() 
  { }


  /**
   * CRUD Operations
   */

  
  all()
  {
    return this.courses;

  }
  
  find(courseId)
  {
  }
  create(course)
  {
    console.log("CREATE COURSE",course);
  }
  
  update(course)
  {
    console.log("UPDATE COURSE",course);
  }
  
  delete(courseId)
  {
    console.log("DELETE COURSE",courseId);
  }



}
