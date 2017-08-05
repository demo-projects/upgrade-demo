import {Component, OnInit, Inject} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  template: `      
    <div class="ng-view"></div>
  `,
})
export class AppComponent implements OnInit{
  private upgrade: UpgradeModule;

  constructor(upgrade: UpgradeModule) {
    this.upgrade = upgrade;
  }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.body, ['phonecatApp']);

    const logger = this.upgrade.$injector.get(`Logger`);
    logger.log('Working!!')
  }
}
