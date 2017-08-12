import { Component } from '@angular/core';
import { MenuService } from "../service/menu.service";
import { MenuItem } from "./main-feature/menu.item";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MenuService ]
})
export class AppComponent {
  menuItems:MenuItem[];

  constructor(private menuService: MenuService, translate: TranslateService) {
    this.menuItems = this.menuService.getMenu();
    translate.setDefaultLang('en');
    translate.use('en');
    //console.log('AppComponent menuItems: ' + JSON.stringify(this.menuItems));
  }
}
