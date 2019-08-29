import { MessageService } from './message.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import {HEROES} from './mockheros' ;
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Tudo certo');
    return of(HEROES);
  }


}

