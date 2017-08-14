import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FeatureComponent} from './feature.component';
import {FoodMenuItem} from "../../service/food.menu.item";
import {By} from "@angular/platform-browser";

describe('FeatureComponent bindings', () => {

  let fixture: ComponentFixture<FeatureComponent>;
  let component: FeatureComponent;
  let titleElement;

  let data: FoodMenuItem[] = [
    { name: 'itemA', description: 'itemA desc' },
    { name: 'itemB', description: 'itemB desc' }
  ];

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        FeatureComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).createComponent(FeatureComponent);
    component    = fixture.componentInstance;
    component.title = 'Fichipizza';
    titleElement  = fixture.debugElement.query(By.css('.title'));
    fixture.detectChanges();
  }));

  it('should have the right title', () => {
    expect(titleElement.nativeElement.textContent).toContain('Fichipizza');
  });

});
