// currency-converter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  template: `
    <div>
      <label for="amountInput">Enter Amount:</label>
      <input
        type="text"
        id="amountInput"
        [(ngModel)]="enteredAmount"
        (input)="updateCurrency()"
      />

      <div>
        <p>Raw Number: {{ enteredAmount }}</p>
        <p>US Currency: {{ formattedAmount }}</p>
      </div>
    </div>
  `,
})
export class CurrencyConverterComponent {
  enteredAmount: number = 0;
  formattedAmount: string = '';

  updateCurrency() {
    this.formattedAmount = this.formatAsCurrency(this.enteredAmount);
  }

  formatAsCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }
}
