import { Component, Input } from '@angular/core';
import { Hero } from '../hero-model';



@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component {

  @Input() selectedHero?: Hero;





}
