import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {param} from 'jquery';
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {
  modalRef: BsModalRef;
subscribe=[];
showFilter = false;
favicon=[];
searchright = false;
public carditems = Array(16).fill([6]);
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalinfo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalshare(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalfavo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 
 
  
}

window.onload = function() {
  document.getElementById('searchright').focus();
}
