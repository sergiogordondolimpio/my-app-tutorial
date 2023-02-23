import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-hero-child-with-service',
  templateUrl: './hero-child-with-service.component.html',
  styleUrls: ['./hero-child-with-service.component.css']
})
export class HeroChildWithServiceComponent {
  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
