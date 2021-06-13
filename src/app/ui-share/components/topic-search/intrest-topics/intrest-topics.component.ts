import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-intrest-topics',
  templateUrl: './intrest-topics.component.html',
  styleUrls: ['./intrest-topics.component.scss']
})
export class IntrestTopicsComponent implements OnInit {
  selectedCar: number;
  selectedTopics:boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

topics = [
  {id:1, name:'Select All' },
  {id:2, name:'Studio', count:139 },
  {id:3, name:'Robots', count:139},
  {id:4, name:'Orchestrator', count:139 },
  {id:5, name:'Automation Cloud', count:9 },
  {id:6, name:'Automation Ops', count:6 },
  {id:7, name:'Insights', count:5},
  {id:8, name:'Action Cente', count:139},
  {id:9, name:'Task Mining', count:7 },
  {id:10, name:'Task Capture', count:10 }
]

IntrestTopic() {
  this.selectedTopics = !this.selectedTopics;
}
    

}
