import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit
{

  title = "Hello Users";


  constructor(private titleService: Title) { }

  ngOnInit(): void
  {
    this.setPageTitle();
  }

  setPageTitle()
  {
    this.titleService.setTitle("Login");
  }

}
