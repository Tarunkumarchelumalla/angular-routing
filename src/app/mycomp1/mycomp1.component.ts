import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
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

  public id;
  constructor(private route: Router, private ac: ActivatedRoute) {}

  ngOnInit() {
    this.ac.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.id = id;
    });
  }

  onfire(g) {
    this.route.navigate(['/depart', g.id]);
  }
  isSelected(val) {
    console.log(val.id === this.id);
    return val.id === this.id;
  }
}
