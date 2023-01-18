import { Component, Input, OnInit } from '@angular/core';
import { Tittle } from 'src/app/models/Tittle';
import { Value } from 'src/app/models/Values';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {

  @Input() tittle!: Tittle
  @Input() color!: string
  constructor() { 
    
   }

  ngOnInit(): void {
  }


  findValue(tittle: Tittle, valueName: string): Value {

    let value = tittle.values.find(value => value.name == valueName)
    return value == null ? new Value : value;

  }


}
