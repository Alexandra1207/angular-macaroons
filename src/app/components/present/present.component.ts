import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'present-component',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {
  public showPresent: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
