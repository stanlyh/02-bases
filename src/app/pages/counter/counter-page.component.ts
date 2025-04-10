import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10);

  constructor() {}

  increaseBy(value: number){
    this.counter += value;
    //this.counterSignal.set(this.counterSignal() + value);  // forma no recomendada
    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number){
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
