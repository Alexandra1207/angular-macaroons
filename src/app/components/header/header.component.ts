import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonVariablesService } from "../../common-variables.service";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  phoneNumber: string;

  constructor(public commonVariablesService: CommonVariablesService, private elementRef: ElementRef) {
    this.phoneNumber = this.commonVariablesService.phoneNumber;

  }
  scrollTo(targetId: string) {
    const targetElement = this.elementRef.nativeElement.ownerDocument.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

  }

  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
  }

}
