import { Component, OnInit } from '@angular/core';
import {CommonVariablesService} from "../../common-variables.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  phoneNumber: string;
  linkInstagram: string = 'https://www.google.com/'

  constructor(public commonVariablesService: CommonVariablesService) {
    this.phoneNumber = this.commonVariablesService.phoneNumber;
  }

  ngOnInit(): void {
  }

}
