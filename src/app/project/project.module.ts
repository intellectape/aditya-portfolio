import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { ProjectRoutingModule } from './project-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ProjectsComponent, ProjectsDetailComponent, NavBarComponent, MainPageComponent, FooterComponent]
})
export class ProjectModule { }
