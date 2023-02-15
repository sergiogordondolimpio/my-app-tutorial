import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BasicComponent } from './components/basic-component/basic-component.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { NoneComponent } from './components/encapsulation/none.component';
import { EmulatedComponent } from './components/encapsulation/emulated.component';
import { ShadowDomComponent } from './components/encapsulation/shadowdom.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BasicComponent,
    EncapsulationComponent,
    NoneComponent,
    EmulatedComponent,
    ShadowDomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
