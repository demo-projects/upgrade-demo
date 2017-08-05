import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
  selector: 'angularjs-component'
})
export class AngularJSComponentDirective extends UpgradeComponent {

  constructor(ref: ElementRef, inj:Injector) {
    super('angularjsComponent', ref, inj);
  }

}
