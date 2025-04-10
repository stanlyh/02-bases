import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  //styleUrls: ['./hero-page.component.css'],
  imports: [ UpperCasePipe ],
})
export class HeroPageComponent{

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(()=> {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  //getHeroDescription(){
  //  return `${ this.name() } - ${ this.age() }`;
  //}

  capitalizeName = computed(()=> this.name().toUpperCase());

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(){
    this.age.update(v => v = 60);
  }

}
