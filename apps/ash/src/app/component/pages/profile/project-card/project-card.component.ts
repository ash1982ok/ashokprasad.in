import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mysite-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() projectList;
  projectsArr;

  constructor() { }


  getListOfAchievement(){
    let projAchi = this.projectsArr.htmlDescription.listOfAchievement;
    return projAchi.join('');
  }

  ngOnInit(): void {
    this.projectsArr = JSON.parse(this.projectList);
  }

}
