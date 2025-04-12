import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  //styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
/*     { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'Piccolo', power: 3001 },
    { id: 4, name: 'Yamcha', power: 500 }, */
  ]);

  addCharacter() {
    //console.log(this.name(), this.power());
    if( !this.name() || !this.power() || this.power() <= 0 ){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    //this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    this.resetField();
  }

  resetField() {
    this.name.set('');
    this.power.set(0);
  }

}
