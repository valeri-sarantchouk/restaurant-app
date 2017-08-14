import {Injectable} from '@angular/core';
import {NavMenuItem} from "./nav.menu.item";

let NAV_MENU: NavMenuItem[] = [
  {
    "id": "Home",
    "url": "http://home.url"
  },
  {
    "id": "About",
    "url": "http://about.url"
  },
  {
    "id": "Menu",
    "url": "http://food-menu.url",
    "items": [
      {
        "id": "food menu item one",
        "url": "http://food-item-one.url"
      },
      {
        "id": "food menu item two",
        "url": "http://food-item-two.url"
      },
      {
        "id": "food menu item three",
        "url": "http://food-item-three.url"
      }
    ]
  },
  {
    "id": "Contact",
    "url": "http://contact.url"
  }
];

@Injectable()
export class NavMenuService {
  getNavMenu(): NavMenuItem[] {
    return NAV_MENU;
  }
}
