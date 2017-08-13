import {Component, Input} from '@angular/core';
import {MenuItem} from "../../service/menu.item";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['../app.component.css']
})
export class GridComponent {
  @Input() maxRows;
  @Input() menuItems:MenuItem[];
}
