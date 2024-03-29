import { ContentChild, Input, Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{ bindable }}</p>
    <p>{{ boundParagraph.textContent }}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;

  @ContentChild('boundContent') boundContent: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }
  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterContentInit() {
this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
this.log('ngAfterViewInit');
    console.log(this.boundContent);
  }
  ngAfterViewChecked() {
this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
