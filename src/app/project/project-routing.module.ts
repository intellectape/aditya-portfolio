import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'detail', component: ProjectsDetailComponent},
  {path: '**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
