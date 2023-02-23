import { Component } from '@angular/core';

import { HEROES } from '../hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: "./hero-parent.component.html"
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
  username = '     user name     '

  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}