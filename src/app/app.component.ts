import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  pageList: any[] = [
    {page: "page-one"},
    {page: "page-two"},
    {page: "page-three"},
    {page: "page-four"},
    {page: "page-five"}
  ]

}
