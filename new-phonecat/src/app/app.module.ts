import {NgModule, InjectionToken, Inject} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule, downgradeInjectable, downgradeComponent} from '@angular/upgrade/static';
import {AppComponent} from './app.component';
import {StorageService} from './storage.service';
import { InfoComponent } from './info.component';
import { AngularJSComponentDirective } from './angular-jscomponent.directive';

declare const angular: any;

const app = angular.module('phonecatApp');

app.service('storage', downgradeInjectable(StorageService));
app.directive('info', downgradeComponent({component: InfoComponent}));

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AngularJSComponentDirective,
  ],
  imports     : [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [InfoComponent],
  providers   : [StorageService],
  bootstrap   : [AppComponent]
})
export class AppModule {




}
