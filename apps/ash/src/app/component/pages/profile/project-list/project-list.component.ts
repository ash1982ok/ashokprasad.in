import { ProjectsService } from './projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mysite-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectService:ProjectsService;
  projectListJson;

  constructor( projectService:ProjectsService ) {
    this.projectService = projectService;
  }

  ngOnInit(): void {
    this.projectListJson = this.projectService.getProjectsList();
  }

}
