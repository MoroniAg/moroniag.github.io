import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Page } from './models/Page';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = false
  link = ""
  title = 'my-app'

  pageList: Page[] = require('../assets/info.json')


  test01() {
    console.log(this.pageList)
  }

  ngOnInit(): void {
    this.test01()
    
  }

  showText(link: string) {
    this.status = true
    this.link = link
  }

  hideText() {
    this.status = false
    this.link = ""
  }

}
