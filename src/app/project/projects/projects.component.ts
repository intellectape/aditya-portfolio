import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/model/project';
import { ProjectService } from '../../service/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  data = require('../../../assets/projects.json');
  techList = require('../../../assets/technologyList.json');


  constructor(private service: ProjectService) {
  }

  ngOnInit() {
  }
}
