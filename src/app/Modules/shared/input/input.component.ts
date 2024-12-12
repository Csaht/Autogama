import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = "";
  @Input() fieldLabel: string='';
  @Input() subLabel: string ='' ;
  @Input() inputType: string = 'text';
  @Input() value ='';
  @Input() mandetory: boolean = false;
  @Input() readonly = false;
  @Input() onlyDigit = false;
  @Input() isDecimal = false;
  @Input() maxLength = 100;
  @Input() minLength=100;
  @Output() onchangeInputValue = new EventEmitter<any>();

  inputValue: any;

  OnChange: any = () => { };
  OnTouch: any = () => { };

  constructor() { }
  ngOnInit(): void { }

  writeValue(value: any): void {
    this.inputValue = value;
  }
  registerOnChange(fun: any): void {
    this.OnChange = fun;
  }
  registerOnTouched(fun: any): void {
    this.OnTouch = fun;
  }
  setDisabledState?(isDisabled: boolean): void { }

  inputchange(item:any) {
    this.inputValue = item;
    if(this.inputType == 'number'){
      this.inputValue = parseFloat(item);
    }
    if(this.isDecimal){
      this.inputValue = item.toFixed(2); 
    }
    this.OnChange(this.inputValue);
    this.onchangeInputValue.emit(this.inputValue);
  }
}
