import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-mycomp2',
  templateUrl: './mycomp2.component.html',
  styleUrls: ['./mycomp2.component.css'],
})
export class Mycomp2Component implements OnInit {
  public id;
  constructor(private ac: ActivatedRoute, private route: Router) {}

  ngOnInit() {
    // this.id = parseInt(this.ac.snapshot.paramMap.get('id'));
    this.ac.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.id = id;
    });
  }
  nxt() {
    let nxtid = this.id + 1;
    this.route.navigate(['/depart', nxtid]);
  }
  prev() {
    let preid = this.id - 1;
    this.route.navigate(['/depart', preid]);
  }
  goback() {
    let selectedid = this.id ? this.id : null;
    this.route.navigate(['/depart', { id: selectedid }]);
  }
  child1() {
    this.route.navigate(['child1'], { relativeTo: this.ac });
  }
  child2() {
    this.route.navigate(['child2'], { relativeTo: this.ac });
  }
}
