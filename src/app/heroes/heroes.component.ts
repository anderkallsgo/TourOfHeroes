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

  heroes: Hero[];

  constructor(private heroesService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void{
    name = name.trim();

    if (!name){ return; }
    this.heroesService.addHero({ name} as Hero)
    .subscribe(hero => { this.heroes.push(hero);
    });
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(h => h !== hero);

    this.heroesService.deleteHero(hero).subscribe();
  }
}
