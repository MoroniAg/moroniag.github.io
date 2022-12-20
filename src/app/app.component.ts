import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  pageList: any[] = [
    { "page": "page-one", "content": { "name": "home" } },
    { "page": "page-two", "content": { "name": "experience" } },
    { "page": "page-three", "content": { "name": "experience" } },
    { "page": "page-four", "content": { "name": "experience" } },
    { "page": "page-five", "content": { "name": "experience" } }
  ]

}
