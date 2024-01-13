import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonVariablesService } from "../../common-variables.service";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  phoneNumber: string = '';

  constructor(public commonVariablesService: CommonVariablesService, private elementRef: ElementRef) {
  }
  scrollTo(targetId: string) {
    const targetElement = this.elementRef.nativeElement.ownerDocument.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false;
  }

  isMenuOpen: boolean = false;

  activeMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.phoneNumber = this.commonVariablesService.phoneNumber;
  }

}
