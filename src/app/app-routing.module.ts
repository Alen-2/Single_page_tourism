import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictComponent } from './page/district/district.component';
import { LoginComponent } from './page/login/login.component';
import { SinglepageComponent } from './page/singlepage/singlepage.component';

const routes: Routes = [
  {path:'district', component: DistrictComponent},
  {path:'login', component: LoginComponent},
  {path:'singlepage', component: SinglepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

