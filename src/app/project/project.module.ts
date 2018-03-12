import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { ProjectRoutingModule } from './project-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ProjectsComponent, ProjectsDetailComponent]
})
export class ProjectModule { }
