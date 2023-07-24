import {Component, Input} from "@angular/core";

@Component({
  selector: 'name-child',
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  private _name = '';
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || 'Name is not set';
    // this._name = name ? name.trim() : 'Name is not set';
  }
  get name(): string {return this._name};
}
