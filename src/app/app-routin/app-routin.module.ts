import { NgModule } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { Routes, RouterModule } from '@angular/router';
import { Mycomp1Component } from '../mycomp1/mycomp1.component';
import { Mycomp2Component } from '../mycomp2/mycomp2.component';
import { PageComponent } from '../404-page/404-page.component';
const routes: Routes = [
  { path: '', redirectTo: '/depart', pathMatch: 'full' },
  { path: 'depart', component: Mycomp1Component },
  {
    path: 'depart/:id',
    component: Mycomp2Component,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ],
  },
  { path: '**', component: PageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutinModule {}
export const routingcomps = [
  Mycomp1Component,
  Mycomp2Component,
  PageComponent,
  Child1Component,
  Child2Component,
];
