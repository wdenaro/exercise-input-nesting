import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headingText = 'Exercise – @Input Nesting';

  vehicles = [
    {
      make: 'Ford',
      models: [
        {
          name: 'F150',
          specs: [
            {
              cylinders: 6,
              mpg: [
                {
                  city: 22,
                  highway: 24
                }
              ]
            }
          ]
        },
        {
          name: 'F250',
          specs: [
            {
              cylinders: 8,
              mpg: [
                {
                  city: 18,
                  highway: 20
                }
              ]
            }
          ]
        },
        {
          name: 'F350',
          specs: [
            {
              cylinders: 8,
              mpg: [
                {
                  city: 16,
                  highway: 17
                }
              ]
            }
          ]
        }
      ]
    },
    {
      make: 'Toyota',
      models: [
        {
          name: 'Tacoma',
          specs: [
            {
              cylinders: 6,
              mpg: [
                {
                  city: 18,
                  highway: 22
                }
              ]
            }
          ]
        },
        {
          name: 'Tundra',
          specs: [
            {
              cylinders: 8,
              mpg: [
                {
                  city: 15,
                  highway: 19
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
