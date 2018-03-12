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

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  data: any;

  constructor(private service: ProjectService) { }

  ngOnInit() {
    this.data = this.service.getProjects();
    console.log(this.data);
  }

}
