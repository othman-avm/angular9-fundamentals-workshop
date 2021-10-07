import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons/lessons.service';

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

  courseLessons = null;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void
  {
    this.courseLessons = this.lessonsService.all();
  }

  selectLesson(lesson)
  {
    console.log("What up fool!", lesson)
    this.currentLesson = lesson;
  }
}
