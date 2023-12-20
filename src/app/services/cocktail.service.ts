import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.moel';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private cocktails: Cocktail[] = [
    { nom: 'Mojito', prix: 8, image: '../assets/images/cocktail1.jpg' },
    { nom: 'Piña Colada', prix: 9, image: '../assets/images/cocktail2.jpg' },
  ];

  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
