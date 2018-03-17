import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mpg',
  templateUrl: './mpg.component.html',
  styleUrls: ['./mpg.component.scss']
})
export class MpgComponent {
  @Input('mpg') mpg: any;
}
