import { Injectable } from '@angular/core';
import {MenuItem} from "../component/menu.item";

const MENU_ITEMS: MenuItem[] = [
  { name: 'PRIME RIB', description: 'Premium quality, seasoned, slow-roasted and aged for 28 days. Choice of grilled or au jus.' },
  { name: 'COWBOY RIB STEAK', description: 'Signature steak, aged for 28 days, well-marbled for great flavour.' },
  { name: 'GOAT CHEESE TOP SIRLOIN', description: 'Crumbled goat cheese, Herbes de Provence, chopped walnuts.' },
  { name: 'CAJUN BLACKENED TOP SIRLOIN', description: 'Grilled with Cajun spice rub.' },
  { name: 'ATLANTIC SALMON', description: '8 oz. grilled salmon fillet, sauce vierge.' },
  { name: 'SEARED AHI TUNA', description: 'Seared & sliced ahi tuna, lime-ginger dressing. Served rare with a cool interior.' },
  { name: 'THE OSCAR - TOP SIRLOIN ', description: 'Butter-poached 6 oz. lobster tail, asparagus, tarragon hollandaise sauce. Served with mashed potatoes and seasonal vegetables.' },
  { name: 'JEWELS OF THE SEA', description: '6 oz. lobster tail, grilled jumbo black tiger shrimp, North Atlantic scallops, lobster bisque.' },
];

@Injectable()
export class MenuService {
  getMenu(): MenuItem[] {
    return MENU_ITEMS;
  }
}
