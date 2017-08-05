import {NgModule, InjectionToken, Inject} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule, downgradeInjectable} from '@angular/upgrade/static';
import {AppComponent} from './app.component';
import {StorageService} from './storage.service';

declare const angular: any;

const app = angular.module('phonecatApp');

app.service('storage', downgradeInjectable(StorageService));

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports     : [
    BrowserModule,
    UpgradeModule
  ],
  providers   : [StorageService],
  bootstrap   : [AppComponent]
})
export class AppModule {




}
