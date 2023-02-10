import { Component, Input, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Value } from 'src/app/models/Values';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  @Input() 
  values!: Value[];

  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
