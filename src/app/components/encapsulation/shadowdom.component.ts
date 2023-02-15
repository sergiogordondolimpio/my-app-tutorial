import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-shadowdom',
    template: `
      <h2>ShadowDom</h2>
      <div class="shadow-message">Shadow DOM encapsulation</div>
      <app-emulated></app-emulated>
      <app-none></app-none>
    `,
    styles: ['h2, .shadow-message { color: blue; }'],
    encapsulation: ViewEncapsulation.ShadowDom,
  })
  export class ShadowDomComponent { }
/* 
The styles of components are only added to the shadow DOM host, 
ensuring that they only affect elements within their respective 
components' views.
*/