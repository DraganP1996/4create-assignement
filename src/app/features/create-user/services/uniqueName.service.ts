import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import {
  catchError,
  debounceTime,
  map,
  Observable,
  of,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';

import { UsersQuery } from '@stores/user';

@Injectable({ providedIn: 'root' })
export class UniqueRoleValidator implements AsyncValidator {
  constructor(private _userQuery: UsersQuery) {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const name = control.value;

    if (!name) {
      return of(null);
    }

    return timer(2_500).pipe(
      debounceTime(500),
      switchMap(() =>
        this._userQuery.selectUserByName(name).pipe(
          take(1),
          map((user) => (!!user ? { uniqueName: true } : null)),
          catchError(() => of(null))
        )
      )
    );
  }
}
