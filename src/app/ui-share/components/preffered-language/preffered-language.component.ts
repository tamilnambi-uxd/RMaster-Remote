import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-preffered-language',
  templateUrl: './preffered-language.component.html',
  styleUrls: ['./preffered-language.component.scss']
})
export class PrefferedLanguageComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  topics = [
    {id:1, name:'English' },
    {id:2, name:'Studio' },
    {id:3, name:'Japanese'},
    {id:4, name:'Russian'},
    {id:5, name:'Spanish'},
    {id:6, name:'French'},
    {id:7, name:'Chinese'},
    {id:8, name:'German',},
    {id:9, name:'Turkish'}
  ]
}
