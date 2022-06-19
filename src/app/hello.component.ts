import { Component, Input } from '@angular/core';
import { UserService } from './services/userService';
import { Observable, of } from 'rxjs';
import { user } from './models/users';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1> `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
