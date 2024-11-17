import { Component } from '@angular/core';
import { SimpleTableComponent } from '../../../../shared/components/ui/simple-table/simple-table.component';
import {
  SimpleTableColumn,
  SimpleTableRow,
} from '../../../../shared/components/ui/simple-table/simple-table.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SimpleTableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  cols: SimpleTableColumn[] = [
    { key: 'name', name: 'Name', align: 'left' },
    { key: 'age', name: 'Age', align: 'center' },
    { key: 'email', name: 'Email', align: 'left' },
  ];

  rows: SimpleTableRow[] = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
  ];
}
