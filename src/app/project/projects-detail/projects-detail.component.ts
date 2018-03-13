import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Project } from '../../shared/model/project';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit {

  // @Input() projectInput: Project;

  constructor() { }

  ngOnInit() {
  }

}
