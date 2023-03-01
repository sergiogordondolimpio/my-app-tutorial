import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BasicComponent } from './components/basic-component/basic-component.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { NoneComponent } from './components/encapsulation/none.component';
import { EmulatedComponent } from './components/encapsulation/emulated.component';
import { ShadowDomComponent } from './components/encapsulation/shadowdom.component';
import { HeroChildComponent } from './components/component-interaction/hero-child/hero-child.component';
import { HeroParentComponent } from './components/component-interaction/hero-parent/hero-parent.component';
import { HeroChildEventComponent } from './components/component-interaction/hero-child-event/hero-child-event.component';
import { HeroChildLocalVariableComponent } from './components/component-interaction/hero-child-local-variable/hero-child-local-variable.component';
import { HeroChildWithServiceComponent } from './components/component-interaction/hero-child-with-service/hero-child-with-service.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
// angular material
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BasicComponent,
    EncapsulationComponent,
    NoneComponent,
    EmulatedComponent,
    ShadowDomComponent,
    HeroChildComponent,
    HeroParentComponent,
    HeroChildEventComponent,
    HeroChildLocalVariableComponent,
    HeroChildWithServiceComponent,
    NavComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
