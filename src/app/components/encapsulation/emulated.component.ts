import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-emulated',
    template: `
      <h2>Emulated</h2>
      <div class="emulated-message">Emulated encapsulation</div>
      <app-none></app-none>
    `,
    styles: ['h2, .emulated-message { color: green; }'],
    encapsulation: ViewEncapsulation.Emulated,
  })
  export class EmulatedComponent { 

    /* 
    The styles of components are added to the <head> of the document, 
    making them available throughout the application, but their 
    selectors only affect elements within their respective components' 
    templates.

    <head>
        <style>
            h2[_ngcontent-sai-c14], .emulated-message[_ngcontent-sai-c14] { color: green; }
        </style>
    </head>
    */

  }