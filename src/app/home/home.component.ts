import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users=[{name : "Mr Anil G.", position : "Director"},
  {name : "Mr Anuj Arora", position : "Web Developer"},
  {name : "Mr Mohit S.", position : "Manager"},
  {name : "Mr Pranav S.", position : "Software Developer"},
  {name : "Mr Bharat", position : "Software Developer"},
  {name : "Ms Swati Dahiya", position : "Software Developer"},
  {name : "Mr Gaurav", position : "QA"},
  {name : "Mr Amit Khanna", position : "IT Admin"},
  {name : "Ms Yashi", position : "HR"}]
}

