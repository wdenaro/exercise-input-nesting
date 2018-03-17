import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.scss']
})
export class MakesComponent {
  @Input('vehicles') vehicles: any;
}
