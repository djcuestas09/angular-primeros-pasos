import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public age:  number = 45;

  get capitalizedName(): string {
    return 'Hola mundo'.toUpperCase()
  }

  getHeroDescription(): string {
    return ` ${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Batman';
  }

  changeAge(): void {
    this.age = 34;
  }

  resetForm(): void {
    this.name = 'Spiderman';
    this.age = 45
  }
}
