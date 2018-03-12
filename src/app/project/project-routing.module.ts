import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'detail', component: ProjectsDetailComponent},
  {path: '**', redirectTo: 'projects'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
