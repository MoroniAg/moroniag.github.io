import { Component, Input, OnInit } from '@angular/core';
import { ListContent } from 'src/app/models/ListContent';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  @Input()
  listContent!: ListContent

  constructor() { }

  ngOnInit(): void {
  }

}
