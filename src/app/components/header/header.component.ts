import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
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
  }

}
