import { Component, Input, OnInit } from '@angular/core';
import { ListContent } from 'src/app/models/ListContent';
import { Tittle } from 'src/app/models/Tittle';
import { TranslateService } from '@ngx-translate/core';
import { Value } from 'src/app/models/Values';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  content: ListContent = new ListContent;
  @Input()
  next!: string;

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'es']);
    translateService.setDefaultLang('es');
    translateService.use('es');
  }
  ngOnInit(): void {
  }


  findTittle(tittles: Tittle[], nameTittle: string): Tittle {

    let tittle = tittles.find(value => value.name == nameTittle)
    if (tittle == null) {
      return new Tittle
    }
    return tittle
  }

  findValue(tittle: Tittle, valueName: string): Value{
    let values = tittle.values.find(value => value.name == valueName)
    if(values == null){
      return new Value
    }
    return values
  }

  translateSite(language: string) {
    this.translateService.use(language);
  }



}
