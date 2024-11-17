import { TemplateRef } from '@angular/core';

export interface SimpleTableColumn {
  /**
   * Unique identifier used to map columns and cells
   */
  key: string;
  /**
   * The column name that will be displayed in the
   * header of the table
   */
  name: string;
  /**
   * Definition of the alignement of the content of a specific
   * column
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Definition of custom cell templates
   */
  template?: TemplateRef<any>;
}

export type SimpleTableRow = Record<string, any> & { id: number };
