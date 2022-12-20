import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() content: any;

  constructor() { 
    this.content = Object
  }

  ngOnInit(): void {
  }



}
