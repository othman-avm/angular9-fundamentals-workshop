import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CoursesService } from '../shared/services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit
{
  selectedCourse = null

  courses = null;

  constructor(private coursesService: CoursesService,
    private titleService: Title) { }

  ngOnInit(): void
  {
    this.setPageTitle()
    this.refreshCourses();
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

  setPageTitle()
  {
    this.titleService.setTitle("Courses");
  }

  loadCourses()
  {
    this.coursesService.all().subscribe(courses => this.courses = courses);
  }

  refreshCourses()
  {
    this.resetSelectedCourse();
    this.loadCourses();
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
    this.coursesService.delete(courseId).subscribe(() => this.refreshCourses());
  }

  cancel()
  {
    this.resetSelectedCourse();
  }

  saveCourse(course)
  {
    if (course.id)
    {
      this.coursesService.update(course).subscribe(() => this.refreshCourses())
      return;
    }
    this.coursesService.create(course).subscribe(() => this.refreshCourses())
  }

}
