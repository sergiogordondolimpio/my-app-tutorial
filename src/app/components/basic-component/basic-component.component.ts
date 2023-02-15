import { Component } from '@angular/core';


/*  All the component here without importing styles and
    template
    @Component({
        selector: 'app-card',
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.css']
    }) 
*/
@Component({
    selector: 'app-basic-component',
    template: '<h1>Basic Component!</h1>',
    styles: ['h1 { font-weight: normal; }']
  })

export class BasicComponent {

}