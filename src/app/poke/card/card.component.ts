import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from '../../service/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  info: any = {name: ''};

  url:string = "";

  constructor(private pokemService: PokeService) { }

  ngOnInit(): void {
    this.pokemService.getPokeData(this.info.name).subscribe((res:any)=>{
      this.url = (res.sprites.front_default);
    })
  }

}
