import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['../app.component.css']
})
export class FeatureComponent {
  @Input() title;
  @Input() reverseColumnOrder;
}
