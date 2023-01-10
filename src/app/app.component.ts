import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Page } from './models/Page';
import { ContentService } from './service/content.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private contentService: ContentService) {}

  public pageList: Page[] = [];

  ngOnInit(): void {
    this.pageList = this.contentService.getinfo()
    console.log(this.pageList)
  }



}
