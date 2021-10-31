import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public sideBarOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  public sideBartoggle() {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
