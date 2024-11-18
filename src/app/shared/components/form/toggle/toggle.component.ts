import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true,
    },
  ],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  @Input() id = '';

  value = false;

  // These methods are provided by the ControlValueAccessor interface
  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  // Called by Angular when the form control value changes
  writeValue(value: boolean): void {
    this.value = value;
  }

  // Called by Angular to register a change callback
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Called by Angular to register a touch callback
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    this.value = checkbox.checked;
    this.onChange(this.value); // Notify Angular of the new value
    this.onTouched(); // Notify Angular that the component was touched
  }
}
