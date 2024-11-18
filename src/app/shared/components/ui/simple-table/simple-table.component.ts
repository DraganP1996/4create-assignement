import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SimpleTableColumn, SimpleTableRow } from './simple-table.model';
import { ToggleComponent } from '@shared/components/form';

@Component({
  selector: 'app-simple-table',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.scss',
})
export class SimpleTableComponent {
  @Input() columns: SimpleTableColumn[] = [];
  @Input() rows: SimpleTableRow[] = [];

  @Output() cellToggled = new EventEmitter<{ id: number; value: boolean }>();
}
