import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <p>
      info Works
      <angularjs-component></angularjs-component>
    </p>
  `,
  styles: []
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}