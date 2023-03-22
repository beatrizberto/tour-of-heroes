import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero = {
    id: 0,
    name: '',
  };

  heroes = HEROES;

  ngOnInit(): void {
    this.selectedHero = this.heroes[0];
  }

  getHeroes(heroDaLista: Hero) {
    this.selectedHero = heroDaLista
  }
}
