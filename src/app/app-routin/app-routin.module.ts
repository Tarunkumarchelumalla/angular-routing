import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Mycomp1Component } from '../mycomp1/mycomp1.component';
import { Mycomp2Component } from '../mycomp2/mycomp2.component';
import { PageComponent } from '../404-page/404-page.component';
const routes: Routes = [
  { path: '', redirectTo: '/depart', pathMatch: 'full' },
  { path: 'depart', component: Mycomp1Component },
  { path: 'depart/:id', component: Mycomp2Component },
  { path: '**', component: PageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutinModule {}
export const routingcomps = [Mycomp1Component, Mycomp2Component, PageComponent];
