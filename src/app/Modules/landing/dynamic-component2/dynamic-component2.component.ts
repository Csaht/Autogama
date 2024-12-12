import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component2',
  templateUrl: './dynamic-component2.component.html',
  styleUrls: ['./dynamic-component2.component.css']
})
export class DynamicComponent2Component {
  @Input() data: any;
  constructor(){
    console.log("Received data--->",this.data)
  }
}
