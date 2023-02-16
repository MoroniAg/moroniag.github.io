import { Component, Input, OnInit } from '@angular/core';
import { Tittle } from 'src/app/models/Tittle';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent implements OnInit {

  @Input() tittles!: Tittle[];

  constructor() { }

  ngOnInit(): void {
  }

}
