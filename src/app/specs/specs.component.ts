import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.scss']
})
export class SpecsComponent {
  @Input('specs') specs: any;
}
