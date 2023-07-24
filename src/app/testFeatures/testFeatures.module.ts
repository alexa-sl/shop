import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {RequiredComponent} from "./components/required.component";
import {HeroChildComponent} from "./parentToChildData/heroChild.component";
import {NameChildComponent} from "./parentToChildData/nameChild.component";
import {NameParentComponent} from "./parentToChildData/nameParent.component";

const routes = [{
  path: 'features',
  component: HeroComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RequiredComponent
  ],
  declarations: [
    RequiredComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent
  ]
})
export class TestFeaturesModule {}
