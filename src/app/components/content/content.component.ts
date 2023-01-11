import { Component, Input, OnInit } from '@angular/core';
import { ListContent } from 'src/app/models/ListContent';
import { Tittle } from 'src/app/models/Tittle';
import { Value } from 'src/app/models/Values';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  content: ListContent = new ListContent;

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('es');
    translateService.use('es');
  }
  ngOnInit(): void {
  }


  findValue(tittles: Tittle[], nameTittle: string, nameValue: string): Value {

    let listContent = tittles.find(value => value.name == nameTittle)
    if (listContent == null) {
      return new Value
    }

    let value = listContent.values.find(value => value.name == nameValue)
    if (value == null){
      return new Value
    }

    return value
  }

  translateSite(language: string) {
    this.translateService.use(language);
  }

}
