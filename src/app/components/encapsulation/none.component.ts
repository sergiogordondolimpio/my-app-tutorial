import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-none',
    template: `
      <h2>None</h2>
      <div class="none-message">No encapsulation</div>
    `,
    styles: ['h2, .none-message { color: red; }'],
    encapsulation: ViewEncapsulation.None,
  })

  export class NoneComponent {

    /* 
    The styles of components are added to the <head> of the document, 
    making them available throughout the application, so are completely 
    global and affect any matching elements within the document.

    <head>
        <style>
            h2, .none-message { color:red; }
        </style>
    </head>
    */

    
   }