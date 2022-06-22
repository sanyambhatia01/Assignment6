import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { CompInfoComponent } from './comp-info/comp-info.component';
import { RouterModule,Routes} from '@angular/router';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { DataService } from './service/data.service';

const appRoutes : Routes = [

  {
    path : 'new' ,component : AddComponent
  },
  {
    path : 'empdetails' ,component : EmpDetailsComponent
  },
  {
    path : 'compInfo' ,component : CompInfoComponent
  },
  // {
  //   path: 'empInfo' ,component: EmpInfoComponent
  // },
  {
    path: 'empdetails/:id/:name/:designation' ,component: EmpInfoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CompInfoComponent,
    EmpDetailsComponent,
    EmpInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
