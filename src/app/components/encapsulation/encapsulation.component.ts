import { Component } from '@angular/core';


@Component({
    selector: 'app-encapsulation-component',
    template: `
        <h1>Encapsulation!</h1>
        <app-none></app-none>
        <hr>
        <app-emulated></app-emulated>
        <hr>
        <app-shadowdom></app-shadowdom>
        <hr>
        `
  })

export class EncapsulationComponent {

   /*  https://angular.io/guide/view-encapsulation

    There are three Modes (can see in the components, is better not use it):
        - ViewEncapsulation.ShadowDom
        - ViewEncapsulation.Emulated
        - ViewEncapsulation.None
    
    If you inspect the css in the browser, there are two kind of 
    attributes:
        - _nghost
        - _ngcontent

    <hero-details _nghost-pmm-5>
        <h2 _ngcontent-pmm-5>Mister Fantastic</h2>
        <hero-team _ngcontent-pmm-5 _nghost-pmm-6>
          <h3 _ngcontent-pmm-6>Team</h3>
        </hero-team>
    </hero-details> 
    
    */

}