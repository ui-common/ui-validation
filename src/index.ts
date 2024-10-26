import { Locale } from "./resources"
import {
  currencyOnBlur,
  currencyOnFocus,
  emailOnBlur,
  faxOnBlur,
  numberOnBlur,
  numberOnFocus,
  patternOnBlur,
  percentageOnFocus,
  phoneOnBlur,
  requiredOnBlur,
  urlOnBlur,
} from "./uievent"
import { buildErrorMessage, ErrorMessage, removeError, removeFormError, showFormError, validateForm } from "./uivalidator"

export * from './resources';
export * from './formatter';
export * from './ui';
export * from './uivalidator';
export * from './uievent';

export class UIService {
  validateForm(form?: HTMLFormElement, locale?: Locale, focusFirst?: boolean, scroll?: boolean): boolean {
    return validateForm(form, locale, focusFirst, scroll)
  }
  removeFormError(form: HTMLFormElement): void {
    removeFormError(form)
  }
  removeError(el: HTMLInputElement): void {
    removeError(el)
  }
  showFormError(form?: HTMLFormElement, errors?: ErrorMessage[], focusFirst?: boolean): ErrorMessage[] {
    return showFormError(form, errors, focusFirst)
  }
  buildErrorMessage(errors: ErrorMessage[]): string {
    return buildErrorMessage(errors)
  }

  numberOnFocus(event: Event | any, locale: Locale): void {
    numberOnFocus(event, locale)
  }
  numberOnBlur(event: Event | any, locale: Locale): void {
    numberOnBlur(event, locale)
  }
  percentageOnFocus(event: Event | any, locale: Locale): void {
    percentageOnFocus(event, locale)
  }
  currencyOnFocus(event: Event | any, locale: Locale, currencyCode?: string): void {
    currencyOnFocus(event, locale, currencyCode)
  }
  currencyOnBlur(event: Event | any, locale: Locale, currencyCode?: string, includingCurrencySymbol?: boolean): void {
    currencyOnBlur(event, locale, currencyCode, includingCurrencySymbol)
  }
  emailOnBlur(event: Event | any): void {
    emailOnBlur(event)
  }
  urlOnBlur(event: Event | any): void {
    urlOnBlur(event)
  }
  phoneOnBlur(event: Event | any): void {
    phoneOnBlur(event)
  }
  faxOnBlur(event: Event | any): void {
    faxOnBlur(event)
  }
  requiredOnBlur(event: Event | any): void {
    requiredOnBlur(event)
  }
  patternOnBlur(event: Event | any): void {
    patternOnBlur(event)
  }
}
