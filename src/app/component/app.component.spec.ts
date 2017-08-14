import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FoodMenuService} from "../service/food.menu.service";
import {FoodMenuItem} from "../service/food.menu.item";

describe('AppComponent initialized', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  let data: FoodMenuItem[] = [
    { name: 'itemA', description: 'itemA desc' },
    { name: 'itemB', description: 'itemB desc' }
  ];

  beforeEach(async(() => {
    class MenuServiceStub {
      getMenu(): FoodMenuItem[] {
        return data;
      }
    }
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: FoodMenuService, useClass: MenuServiceStub}
        ]
      }
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
    });
  }));

  it('should be able to create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have retrieved data from the injected service`, () => {
    expect(component.menuItems).toBeDefined();
    expect(component.menuItems).toEqual(data);
  });

});
