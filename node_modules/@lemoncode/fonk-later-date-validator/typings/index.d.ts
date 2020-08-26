import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace laterDate {
  export interface CustomArgs {
    date: Date;
    parseStringToDateFn?: (value: string) => Date;
  }
  export const validator: FieldValidationFunctionSync<CustomArgs>;
  export function setErrorMessage(message: string | string[]): void;
  export function setCustomArgs(customArgs: Partial<CustomArgs>): void;
}
