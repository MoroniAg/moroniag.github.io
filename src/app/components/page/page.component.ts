import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/models/Content';
import { ListContent } from 'src/app/models/ListContent';

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

  findContent(content: Content, name: string) {

    let listContent = content.list_content.find((value) => value.name == name)
    if (listContent == null) {
      return new ListContent
    }
    return listContent
  }

}
