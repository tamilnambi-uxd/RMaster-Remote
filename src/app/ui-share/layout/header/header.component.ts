import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
navbarCollapsed = true;

constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
}

}
