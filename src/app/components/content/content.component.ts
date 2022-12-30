import { Component, Input, OnInit } from '@angular/core';
import { ListContent } from 'src/app/models/ListContent';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  content: ListContent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
