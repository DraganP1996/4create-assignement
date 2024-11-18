import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

import { ButtonComponent } from '@shared/components';
import { InputComponent, ToggleComponent } from '@shared/components/form';
import { UniqueRoleValidator } from './services/uniqueName.service';
import { UserService } from '@shared/services';
import { randomId } from '../../utils/random-generator';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    ToggleComponent,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _uniqueNameValidator: UniqueRoleValidator,
    private _userService: UserService
  ) {
    this.form = this._formBuilder.group({
      name: [
        '',
        [Validators.required],
        [this._uniqueNameValidator.validate.bind(this._uniqueNameValidator)],
      ],
      active: [false],
      id: randomId(100, 10_000),
    });
  }

  closeModal() {
    this._userService.toggleCreateUserModal(false);
  }

  createUser() {
    this._userService.addUser(this.form.value);
    this.closeModal();
  }
}
