import {Component} from "@angular/core";

@Component({
  selector: 'name-parent',
  template: ' <h2>Master controls {{names.length}} names</h2>\n'
    // + '  <name-child *ngFor="let name of names" [name]="name"></name-child>'
})
export class NameParentComponent {
  names: string[] = ['Mr. IQ', '   ', '  Bombasto  '];
}
