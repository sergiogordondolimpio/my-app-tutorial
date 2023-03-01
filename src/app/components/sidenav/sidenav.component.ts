import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  buttons = [
    {name: 'Basic',
     show: true 
    },
    {name: 'Encapsulation',
     show: false 
    },
    {name: 'Comunication',
     show: false 
    }
  ]

  @ViewChild(MatDrawer) 
  private toogleComponent!: MatDrawer;

  triggerToogle() {
    this.toogleComponent.toggle()
  }

  showElement(name: string) {
    this.buttons.forEach((button) => {
      button.show = false
    })
    this.buttons.map ((button) => {
      if (button.name == name) {
        button.show = true
      }
    })
  }
}
