import { Component } from '@angular/core';
import { IStore } from './../../Models/istore';
import { Student } from './../../Models/student';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  Store:IStore;
  constructor() {
    this.Store = {
     // imgUrl:"https://picsum.photos/seed/picsum/200/300"
     name:"Store1",
     imgUrl:"https://picsum.photos/seed/200/300",
     branches:["branch1","branch2","branch3"]
    }
  }
  students: Student[] = [
    new Student(1, 'Alice', 20, 85),
    new Student(2, 'Bob', 22, 90),
    new Student(3, 'Charlie', 19, 78),
    new Student(4, 'David', 21, 92),
    new Student(5, 'Eve', 20, 88),
  ];

  }
