import { Component } from '@angular/core';
import { MenuService } from "../service/menu.service";
import { MenuItem } from "./menu.item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MenuService ]
})
export class AppComponent {
  menuItems:MenuItem[];

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenu();
    console.log('AppComponent menuItems: ' + JSON.stringify(this.menuItems));
  }
}
