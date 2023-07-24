import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  public form = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  submit(event) {
    console.log(event);
    console.log(this.form.controls.name.value);
  }
}
