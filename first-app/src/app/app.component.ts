import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h1>{{title}}</h1>
            <app-databinding>
          
            </app-databinding>
            <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
                <p #boundContent>{{ test }}</p>
            </app-lifecycle>
            <button (click)="delete = true">Click to delete</button>
            <button (click)="test = 'Changed value'">Click to change content</button>
            <button (click)="boundValue = 2000">Click to change bindable</button>


  `
})
export class AppComponent {
  delete = false;
  title = 'Root Component!';
  test = 'Starting value';
  boundValue = 1000;
}
