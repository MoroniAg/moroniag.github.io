import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/models/Content';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() content: Content;

  constructor() { 
    this.content = new Content;
  }

  ngOnInit(): void {
  }



}
