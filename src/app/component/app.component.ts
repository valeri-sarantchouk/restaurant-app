import { Component } from '@angular/core';
import { FoodMenuService } from "../service/food.menu.service";
import { FoodMenuItem } from "../service/food.menu.item";
import { TranslateService } from '@ngx-translate/core';
import { NavMenuItem } from "../service/nav.menu.item";
import { NavMenuService } from "../service/nav.menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    FoodMenuService,
    NavMenuService
  ]
})
export class AppComponent {
  navMenuItems: NavMenuItem[];
  foodMenuItems: FoodMenuItem[];

  constructor(translate: TranslateService,
              private navMenuService: NavMenuService,
              private foodMenuService: FoodMenuService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.navMenuItems = this.navMenuService.getNavMenu();
    this.foodMenuItems = this.foodMenuService.getFoodMenu();
    //console.log('AppComponent menuItems: ' + JSON.stringify(this.menuItems));
  }
}
