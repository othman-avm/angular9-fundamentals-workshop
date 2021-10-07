import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  private model = 'courses';
  constructor(private http:HttpClient) 
  { }


  /**
   * CRUD Operations
   */

  
  all()
  {
    return this.http.get(`${BASE_URL}${this.model}`);

  }
  
  find(courseId)
  {
    return this.http.get(this.getURLById(courseId))
  }
  create(course)
  {
    return this.http.post(this.getURL(),course)
  }
  
  update(course)
  {
    return this.http.put(this.getURLById(course.id),course);
  }
  
  delete(courseId)
  {
    console.log("DELETE COURSE",courseId);
    return this.http.delete(this.getURLById(courseId));
  }

  private getURL()
  {
    return `${BASE_URL}${this.model}`;
  }


  private getURLById(id)
  {
    return `${this.getURL()}/${id}`
  }
}
