import {Component, Input} from '@angular/core';
import {NavMenuItem} from "../../service/nav.menu.item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent {
  @Input() navMenuItems: NavMenuItem;
}
