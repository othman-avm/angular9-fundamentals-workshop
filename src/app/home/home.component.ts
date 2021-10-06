import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{


  currentLesson = null;
  themeColor = "red";

  title = "Hello Workshop";

  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  ngOnInit(): void
  {
  }

  selectLesson(lesson)
  {
    console.log("What up fool!", lesson)
    this.currentLesson = lesson;
  }
}
