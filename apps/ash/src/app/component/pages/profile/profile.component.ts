import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'mysite-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @HostBinding('class.test')
  testVariable:String;
  constructor() { }

  ngOnInit(): void {
  }

}
