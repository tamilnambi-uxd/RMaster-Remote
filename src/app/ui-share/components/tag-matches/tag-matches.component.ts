import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { TreeviewItem } from 'ngx-treeview';


@Component({
  selector: 'app-tag-matches',
  templateUrl: './tag-matches.component.html',
  styleUrls: ['./tag-matches.component.scss']
})
export class TagMatchesComponent implements OnInit {
  selectedCar: number;
  selectedTopics:boolean = false;
  public step = 'step1';
  items: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.items = this.getItems([this.simpleItems, this.simpleItems2]);
  }

  // getItems(parentChildObj) {
  //   let itemsArray = [];
  //   parentChildObj.forEach(set => {
  //     itemsArray.push(new TreeviewItem(set))
  //   });
  //   return itemsArray;
  // }

  simpleItems = {
    text: 'parent-1',
    value: 'p1',
    children: [
      {
        text: 'child-1',
        value: 'c1'
      }, {
        text: 'child-2',
        value: 'c2',
        children: [
          {
            text: 'child-1-2',
            value: 'c12'
          },
          {
            text: 'child-1-2',
            value: 'c12',
            disabled: true,
            collapsed: true,
            checked: true,
            children: [
              {
                text: 'child-1-2',
                value: 'c12'
              },
              {
                text: 'child-1-2',
                value: 'c12'
              }
            ]
          }
        ]
      },
    ]
  };

  simpleItems2 = {
    text: 'parent-2',
    value: 'p2',
    collapsed: true,
    children: [
      {
        text: 'child-1',
        value: 'c1'
      }, {
        text: 'child-2',
        value: 'c2',
        children: [
          {
            text: 'child-1-2',
            value: 'c12'
          },
          {
            text: 'child-1-2',
            value: 'c12',
            disabled: true,
            collapsed: true,
            checked: true,
            children: [
              {
                text: 'child-1-2',
                value: 'c12'
              },
              {
                text: 'child-1-2',
                value: 'c12'
              }
            ]
          }
        ]
      },
    ]
  };
//   cars = [
//     { id: 1, name: 'Volvo' },
//     { id: 2, name: 'Saab' },
//     { id: 3, name: 'Opel' },
//     { id: 4, name: 'Audi' },
// ];


// changeTab($event) {
//    this.selectTab = !this.selectTab;
// }


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
