import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerNav:any[]=[
    {navUrl:'abc/d',navName:'Home',navParams:'Home',active:'false'},
    {navUrl:'abc/d',navName:'Services',navParams:'',active:'false'},
    {navUrl:'abc/d',navName:'Accessories',navParams:'',active:'false'},
    {navUrl:'abc/d',navName:'About Us',navParams:'',active:'false'},
  ]

}
