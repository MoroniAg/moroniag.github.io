import { Component } from '@angular/core';
import { Page } from './models/Page';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  pageList: Page[] = require('../assets/info.json')


  test01() {
    console.log(this.pageList)
  }

  ngOnInit(): void {
    this.test01();
  }

}
