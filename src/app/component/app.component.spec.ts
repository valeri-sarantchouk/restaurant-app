import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenuService } from "../service/menu.service";
import { MenuItem } from "./menu.item";
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {FeatureComponent} from "./feature.component";
import {GridComponent} from "./grid.component";

describe('AppComponent', () => {

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
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FeatureComponent,
        GridComponent
      ]
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

  it(`should have service injected as a dependency`, () => {
    expect(component.menuItems).toBeDefined();
    expect(component.menuItems).toEqual(data);
  });

});
