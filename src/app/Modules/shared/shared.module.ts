import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

  const components=[ 
     HeaderComponent,
    FooterComponent,
    ButtonComponent,
    InputComponent,
  ]

@NgModule({
  declarations: [
   ...components,
   
  
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[...components]
})
export class SharedModule { }
