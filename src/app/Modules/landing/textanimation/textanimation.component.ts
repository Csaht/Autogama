import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-textanimation',
  templateUrl: './textanimation.component.html',
  styleUrls: ['./textanimation.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('2s ease-in-out')]),
    ]),
  ],
})
export class TextanimationComponent {

}
