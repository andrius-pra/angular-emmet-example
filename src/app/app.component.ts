import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <!-- emmet works -->
  div.a

  <!-- emmet down't work -->
  div.a*2
  ul#nav>li.item>a*5{Item $}
  `,
  styles: [`
    div{
      w10
    }
  `]
})
export class AppComponent {
  title = 'angular-emmet-example';
}
