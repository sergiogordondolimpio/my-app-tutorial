import { Component, ViewChild } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';

import { HEROES } from '../hero';
import { HeroChildLocalVariableComponent } from '../hero-child-local-variable/hero-child-local-variable.component';

@Component({
  selector: 'app-hero-parent',
  templateUrl: "./hero-parent.component.html",
  providers: [MissionService] // the provider inject the instance to the constructor
                              // and hares with its children
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
  username = '     user name     '

  major = 1;
  minor = 23;

  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  //                      Without local variable
  //////////////////////////////////////////
  // inject the child component and asign to a variable, in this
  // case the parent component can use the methods and properties 
  // without using a local varable
  @ViewChild(HeroChildLocalVariableComponent)
  private timerComponent!: HeroChildLocalVariableComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
  //////////////////////////////////////////////////////////////////////////


  //                      With local variable
  //////////////////////////////////////////////////////////////////////////////
  /* 
  Receive the event in the html --(voted)="onVoted($event)--
  with the variable
  */
 onVoted(agreed: boolean) {
   if (agreed) {
     this.agreed++;
    } else {
      this.disagreed++;
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  
  
  //////////////////////////////////////////////////////////////////////////
  ///////////////// With Service
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
  //////////////////////////////////////////////////////////////////////////


  
  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}