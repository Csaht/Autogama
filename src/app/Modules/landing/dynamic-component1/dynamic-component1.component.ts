import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component1',
  templateUrl: './dynamic-component1.component.html',
  styleUrls: ['./dynamic-component1.component.css']
})
export class DynamicComponent1Component {
  @Input() data: any;
  constructor(){
    console.log("Received data--->",this.data)
  }
}
