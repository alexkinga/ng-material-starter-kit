import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  readonly form: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    name: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
    }),
    address: new FormGroup({
      street: new FormControl(),
      zipcode: new FormControl(),
      number: new FormControl(),
      city: new FormControl(),
    }),
    phone: new FormControl()
  });

  constructor(private _userService: UserService) {
  }

  onRegisterFormSubmitted(reg: FormGroup): void {
    this._userService.create({
      email: reg.get('email')?.value,
      username: reg.get('username')?.value,
      password: reg.get('password')?.value,
      name: (reg.get('name') as FormGroup).value,
      address: (reg.get('address') as FormGroup).value,
      phone: reg.get('phone')?.value
    }).subscribe();
  }
}
