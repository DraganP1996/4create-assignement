import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
  @Input() id = '';

  value = '';

  // These methods are provided by the ControlValueAccessor interface
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Called by Angular when the form control value changes
  writeValue(value: string): void {
    this.value = value || '';
  }

  // Called by Angular to register a change callback
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Called by Angular to register a touch callback
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Update the value and notify Angular
  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.onChange(inputValue);
  }
}
