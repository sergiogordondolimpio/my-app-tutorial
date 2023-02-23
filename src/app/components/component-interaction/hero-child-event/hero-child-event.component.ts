import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-child-event',
  templateUrl: './hero-child-event.component.html',
  styleUrls: ['./hero-child-event.component.css']
})
export class HeroChildEventComponent {
  @Input()  name = '';
  // emit event with EventEmitter, need Output
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    // here is emited, with same variable, can be an object
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
