import { Injectable } from '@angular/core';
import { Page } from '../models/Page';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  pageList: Page[] = require('../../assets/info.json')


  getinfo() {
    return this.pageList
  }

}
