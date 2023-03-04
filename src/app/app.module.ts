import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './page/district/district.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { SinglepageComponent } from './page/singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SinglepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
