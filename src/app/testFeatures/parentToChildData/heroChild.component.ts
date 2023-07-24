import {Component, Input} from "@angular/core";
import {HeroInterface} from "./Hero.interface";

@Component({
  selector: 'hero-child',
  template: '<h3>{{hero.name}} says:</h3>\n' +
    '<p>I, {{hero.name}}, am at your service, {{masterName}}.</p>'
})
export class HeroChildComponent{
  @Input() hero: HeroInterface;
  @Input() masterName: string;

  master = 'master';
}
