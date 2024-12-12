import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DynamicHostDirective } from './dynamic-host.directive';
import { DynamicComponent1Component } from './dynamic-component1/dynamic-component1.component';
import { DynamicComponent2Component } from './dynamic-component2/dynamic-component2.component';
import { TestCarosulbootstrapComponent } from './test-carosulbootstrap/test-carosulbootstrap.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TextanimationComponent } from './textanimation/textanimation.component';
const components=[ 
  HomeComponent,
  LandingComponent,
  DynamicHostDirective
]

const routes: Routes = [
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'landing',component:LandingComponent}
 ]

@NgModule({
  declarations: [
   ...components,
   DynamicComponent1Component,
   DynamicComponent2Component,
   TestCarosulbootstrapComponent,
   TextanimationComponent,
   
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbCarouselModule,
    
    //  NgIf, NgFor
  ],
  exports:[...components],
  providers: [NgbCarouselConfig],
})
export class LandingModule { }
