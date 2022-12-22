import { Component } from '@angular/core';
import { Content } from './models/Content';
import { Page } from './models/Page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  /* pageList: any[] = [
     { "page": "page-one", "content": { "name": "home" } },
     { "page": "page-two", "content": { "name": "experience" } },
     { "page": "page-three", "content": { "name": "experience" } },
     { "page": "page-four", "content": { "name": "experience" } },
     { "page": "page-five", "content": { "name": "experience" } }
   ]*/

  pageList: Page[] = [];


  test01() {

    let page = new Page();
    page.page = "page-one";
    let content = new Content();
    content.name = "home";

    let contentList: Content[] = [];

    contentList.push(content);
    page.content = contentList;
    this.pageList.push(page)

  }

  ngOnInit(): void {
    this.test01();
  }

}
