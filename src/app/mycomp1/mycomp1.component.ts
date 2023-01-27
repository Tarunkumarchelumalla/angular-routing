import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-mycomp1',
  templateUrl: './mycomp1.component.html',
  styleUrls: ['./mycomp1.component.css'],
})
export class Mycomp1Component implements OnInit {
  public CourseDatat = [
    { id: 1, course: 'games' },
    { id: 2, course: 'boots' },
    { id: 3, course: 'mongooose' },
    { id: 4, course: 'sports' },
  ];
  constructor(private route:Router) {}

  ngOnInit() {}

  onfire(g){
    this.route.navigate(['/depart',g.id])
  }
}
