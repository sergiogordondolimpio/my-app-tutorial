import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html'
})
export class HeroChildComponent {
  @Input() hero!: Hero;
  // aliases the property name masterName as 'master'
  @Input('master') masterName = '';

  // The setter of the name property in the child NameChildComponent trims
  // the whitespace from a name and replaces an empty value with default text.
  @Input()
  get username(): string { return this._username; }
  set username(username: string) {
    this._username = (username && username.trim()) || '<no username set>';
  }
  private _username = '';

  // Properties to onChanges test
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];


  /* 
    SimpleChanges is a hashtable (like an array) with SimpleChange
    SimpleChange is a class that containts the basic change of a property:
      previousValue: any
      currentValue: any
      firstChange: boolean
      isFirstChange(): boolean
    This is use in ngOnChanges
  */
  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];
    // loop in SimpleChange of every property
    for (const propName in changes) {
      // get the changes object
      const changedProp = changes[propName];
      // convert to string the currentValue
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        // convert to string the previousValue
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    // save all the values in this array of string
    this.changeLog.push(log.join(', '));
  }
}