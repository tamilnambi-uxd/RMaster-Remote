import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-manage-filters',
  templateUrl: './manage-filters.component.html',
  styleUrls: ['./manage-filters.component.scss']
})
export class ManageFiltersComponent implements OnInit {
rightPanels = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
