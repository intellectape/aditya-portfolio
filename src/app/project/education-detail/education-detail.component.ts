import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent implements OnInit {

  data = require('../../../assets/education.json');
  techList = require('../../../assets/technologyList.json');
  constructor() { }

  ngOnInit() {
  }

}
