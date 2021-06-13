import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-development-plan',
  templateUrl: './development-plan.component.html',
  styleUrls: ['./development-plan.component.scss']
})
export class DevelopmentPlanComponent implements OnInit {
  rating3: number;
  subscribe=[];
  public form: FormGroup;
  public carditems = Array(6).fill([6]);
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.rating3 = 0;
    this.form = this.fb.group({
      rating1: ['', Validators.required],
      rating2: [4]
    });
   }

  ngOnInit() {
  }

}
