import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './component/app.component';
import { HeaderComponent } from "./component/header.component";
import { FooterComponent } from "./component/footer.component";
import { FeatureComponent } from "./component/feature.component";
import { GridComponent } from "./component/grid.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeatureComponent,
    GridComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
