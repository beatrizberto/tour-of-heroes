import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-model';

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

  heroes: Hero[] = [
    {
      id: 1,
      name: 'dynama',
    },

    {
      id: 2,
      name: 'batman',
    },

    {
      id: 3,
      name: 'windstorm',
    },

    {
      id: 4,
      name: 'miranha',
    },
  ];
  ngOnInit(): void {
    this.selectedHero = this.heroes[0];
  }

  selecionarHeroi(heroDaLista: Hero) {
    this.selectedHero = heroDaLista
  }
}
