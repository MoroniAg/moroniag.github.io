import { Component, Input, OnInit } from '@angular/core';
import { Tittle } from 'src/app/models/Tittle';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {

  @Input() tittle!: Tittle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
