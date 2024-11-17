import { Component, Input } from '@angular/core';

import { SimpleTableColumn, SimpleTableRow } from './simple-table.model';

@Component({
  selector: 'app-simple-table',
  standalone: true,
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.scss',
})
export class SimpleTableComponent {
  @Input() columns: SimpleTableColumn[] = [];
  @Input() rows: SimpleTableRow[] = [];
}
