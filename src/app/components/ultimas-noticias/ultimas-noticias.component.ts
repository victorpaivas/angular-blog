import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimas-noticias',
  templateUrl: './ultimas-noticias.component.html',
  styleUrls: ['./ultimas-noticias.component.css']
})
export class UltimasNoticiasComponent implements OnInit {
  
  @Input()
  photoCoverSCard:string = ""

  @Input()
  cardTitleSmall:string = ""

  @Input()
  Id: string = "0"
  constructor() { }

  ngOnInit(): void {
  }

}
