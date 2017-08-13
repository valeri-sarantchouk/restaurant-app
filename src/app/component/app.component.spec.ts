import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MenuService} from "../service/menu.service";
import {MenuItem} from "../service/menu.item";

describe('AppComponent initialized', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  let data: MenuItem[] = [
    { name: 'itemA', description: 'itemA desc' },
    { name: 'itemB', description: 'itemB desc' }
  ];

  beforeEach(async(() => {
    class MenuServiceStub {
      getMenu(): MenuItem[] {
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
          { provide: MenuService, useClass: MenuServiceStub}
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
