import { Component, Input } from '@angular/core';
import { SimpleTableColumn, SimpleTableRow } from './simple-table.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-simple-table',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.scss',
})
export class SimpleTableComponent {
  @Input() columns: SimpleTableColumn[] = [];
  @Input() rows: SimpleTableRow[] = [];
}
