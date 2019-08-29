import { HeroService } from '../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HEROES} from '../mockheros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Doido'
  };

  heroes: Hero[];

  selectHero: Hero;


  constructor(private heroesService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }

  getHeroes(): void{
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
